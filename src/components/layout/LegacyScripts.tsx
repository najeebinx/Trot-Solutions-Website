"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function LegacyScripts() {
  const pathname = usePathname();

  // If we are in the admin area, do not render frontend legacy scripts
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (isAdmin) {
    return null;
  }

  return (
    <>
        <Script src="/assets/js/jquery-latest.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        {/* Removed unused plugins: validate, isotope, owl.carousel, circleType, lettering, fittext.
            script.js stubs owlCarousel/isotope and only calls the rest on selectors absent from the site. */}
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/marquee.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery-sidebar-content.js" strategy="afterInteractive" />
        <Script src="/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/ScrollTrigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/SplitText.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
    </>
  );
}
