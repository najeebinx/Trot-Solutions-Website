"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type LegacyWindow = Window & {
  initThemeScripts?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jQuery?: any;
} & Record<string, unknown>;

// Legacy afterInteractive scripts are injected as async <script> tags, so they
// finish in network order, not declaration order. initThemeScripts (script.js)
// throws if any plugin it uses isn't loaded yet — wait for all of them instead
// of a fixed delay (a fixed delay loses the race on cold-cache mobile loads).
const isLegacyReady = () => {
  const w = window as unknown as LegacyWindow;
  const $ = w.jQuery;
  return (
    typeof w.initThemeScripts === "function" &&
    $ && $.fn.appear && $.fn.magnificPopup && $.fn.marquee && $.fn.niceSelect &&
    w.gsap && w.ScrollTrigger && w.SplitText && w.Swiper && w.AOS && w.WOW
  );
};

export default function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      if (!isLegacyReady()) {
        timer = setTimeout(run, 50);
        return;
      }
      try {
        (window as unknown as LegacyWindow).initThemeScripts?.();
      } catch (err) {
        console.error("initThemeScripts failed", err);
      }
    };
    timer = setTimeout(run, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
