"""Turn the Next.js static export (out/) into a self-contained preview (preview/).

The preview runs without the Next.js runtime so it works on any static host,
including under an unknown sub-path: every link and asset is relative, pages
sit side by side as *.html, and tools/preview/preview.js re-implements the
interactive parts (menus, loan calculator, forms, hero animation).

Usage (from the repo root):
    rm -rf out && PREVIEW_EXPORT=1 npx next build
    python3 tools/preview/build.py
"""

import glob
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "out")
DEST = os.path.join(ROOT, "preview")
HERE = os.path.dirname(os.path.abspath(__file__))

FONTS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400..700&display=swap">'
)
HEAD_ASSETS = FONTS + '<link rel="stylesheet" href="assets/site.css">'
TAIL_ASSETS = '<script src="assets/preview.js" charset="utf-8" defer></script>'

# Hero entrance delays, in document order: five petals, four stage labels, the example card.
HERO_DELAYS = [0.15, 0.45, 0.8, 0.95, 1.35, 0.35, 0.65, 1.1, 1.55, 1.8]


def page_file(path: str) -> str:
    """Map a site route to its preview file name. Nested routes are flattened
    (/san-pham/tai-chinh -> san-pham-tai-chinh.html) so every page sits side by side."""
    if path in ("", "/"):
        return "trang-chu.html"
    return path.strip("/").replace("/", "-") + ".html"


def rewrite_href(match: re.Match) -> str:
    attr, url = match.group(1), match.group(2)
    if url.startswith(("/brand/", "/icon.png")):
        return f'{attr}="{url.lstrip("/").split("?")[0]}"'
    path, sep, frag = url.partition("#")
    path, qsep, query = path.partition("?")
    target = page_file(path) + (qsep + query if qsep else "")
    return f'{attr}="{target}{sep}{frag}"'


def clean(html: str) -> str:
    # Drop the Next.js runtime: every script, script preloads and the original stylesheet link.
    html = re.sub(r"<script\b[^>]*>.*?</script>", "", html, flags=re.S)
    html = re.sub(r'<link rel="(?:preload|modulepreload)"[^>]*as="(?:script|font)"[^>]*/?>', "", html)
    html = re.sub(r'<link rel="stylesheet" href="/_next/[^"]+"[^>]*/?>', "", html)
    html = re.sub(r'<link rel="preload" as="image"[^>]*/?>', "", html)
    html = re.sub(r'<link rel="icon"[^>]*/?>', '<link rel="icon" href="icon.png" type="image/png">', html)
    # Relative links and assets.
    html = re.sub(r'\b(href|src)="(/[^"]*)"', rewrite_href, html)
    # Motion's server render starts hidden; swap that for a CSS entrance animation.
    delays = iter(HERO_DELAYS)

    def animate(m: re.Match) -> str:
        tag = m.group(0)
        delay = next(delays, 0.2)
        tag = tag.replace(' opacity="0"', "")
        tag = re.sub(r"opacity:0;?", "", tag)
        tag = re.sub(r"transform:translateY\([^)]*\)( scale\([^)]*\))?;?", "", tag)
        tag = tag.replace('style="', f'style="animation-delay:{delay}s;', 1)
        tag = re.sub(r'class="', 'class="pv-rise ', tag, count=1) if 'class="' in tag else tag.replace("<path", '<path class="pv-rise"', 1)
        return tag

    html = re.sub(r'<(?:path|div|figure)\b[^>]*(?:opacity="0"|style="[^"]*opacity:0)[^>]*>', animate, html)
    return html.replace("<!-- -->", "")


def split_document(html: str):
    head = re.search(r"<head>(.*?)</head>", html, flags=re.S).group(1)
    body = re.search(r"<body[^>]*>(.*)</body>", html, flags=re.S).group(1)
    title = re.search(r"<title>.*?</title>", head, flags=re.S).group(0)
    metas = "".join(re.findall(r'<meta name="(?:description|theme-color)"[^>]*/?>', head))
    return title, metas, body


def main():
    shutil.rmtree(DEST, ignore_errors=True)
    os.makedirs(os.path.join(DEST, "assets"))

    css_files = glob.glob(os.path.join(OUT, "_next/static/css/*.css"))
    css = "\n".join(open(f, encoding="utf-8").read() for f in css_files)
    css = re.sub(r"@font-face\s*{[^}]*}", "", css)
    css = css.replace('"Manrope Variable"', '"Manrope"').replace("Manrope Variable", "Manrope")
    css += """
@keyframes pv-rise{from{opacity:0;transform:translateY(24px) scale(.9)}to{opacity:1;transform:none}}
.pv-rise{animation:pv-rise .9s cubic-bezier(.22,1,.36,1) both}
"""
    open(os.path.join(DEST, "assets/site.css"), "w", encoding="utf-8").write(css)
    shutil.copy(os.path.join(HERE, "preview.js"), os.path.join(DEST, "assets/preview.js"))
    shutil.copytree(os.path.join(OUT, "brand"), os.path.join(DEST, "brand"))
    shutil.copy(os.path.join(OUT, "icon.png"), os.path.join(DEST, "icon.png"))

    for src in glob.glob(os.path.join(OUT, "**/*.html"), recursive=True):
        rel = os.path.relpath(src, OUT)
        if rel == "404.html":
            continue
        name = "index.html" if rel == "index.html" else page_file("/" + rel[: -len(".html")])
        html = clean(open(src, encoding="utf-8").read())
        title, metas, body = split_document(html)
        full = (
            '<!doctype html><html lang="vi"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            f"{title}{metas}{HEAD_ASSETS}</head><body>{body}{TAIL_ASSETS}</body></html>"
        )
        out_name = "trang-chu.html" if name == "index.html" else name
        open(os.path.join(DEST, out_name), "w", encoding="utf-8").write(full)
        if name == "index.html":
            # The artifact's own page gets wrapped in a document skeleton, so it carries content only.
            open(os.path.join(DEST, "index.html"), "w", encoding="utf-8").write(
                f'<meta charset="utf-8"><title>Website Đơm Hoa</title>{HEAD_ASSETS}{body}{TAIL_ASSETS}'
            )

    print("preview written to", DEST)
    for f in sorted(glob.glob(os.path.join(DEST, "**/*"), recursive=True)):
        if os.path.isfile(f):
            print(" ", os.path.relpath(f, DEST))


if __name__ == "__main__":
    main()
