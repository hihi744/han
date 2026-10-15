"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    DomHoa?: { init: (root?: ParentNode) => void };
    __domhoaPending?: boolean;
  }
}

/**
 * Loads public/js/site.js (motion + interactive components shared with the static
 * preview) and runs it after hydration and after every client-side navigation.
 */
export function Enhance() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.DomHoa) window.DomHoa.init();
    else window.__domhoaPending = true;
  }, [pathname]);
  return <Script src="/js/site.js" strategy="afterInteractive" />;
}
