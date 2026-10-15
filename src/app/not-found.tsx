import { LinkButton } from "@/components/ui";
import { StageGlyph } from "@/components/petals";

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-center py-28 text-center">
      <StageGlyph stage="gieo" className="size-20" />
      <h1 className="mt-8 text-[40px] text-moss-ink md:text-[52px]">Trang này chưa nở</h1>
      <p className="mt-4 max-w-md text-lg text-ink-muted">
        Đường dẫn có thể đã thay đổi. Hãy quay về trang chủ hoặc để lại số điện thoại để được tư vấn.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/">Về trang chủ</LinkButton>
        <LinkButton href="/lien-he#dang-ky" variant="ghost">Đăng ký tư vấn</LinkButton>
      </div>
    </section>
  );
}
