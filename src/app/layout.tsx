import type { Metadata } from "next";
import "./globals.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/custom-animate.css";
import "@/assets/css/swiper.min.css";
import "@/assets/css/font-awesome-all.css";
import "@/assets/css/jarallax.css";
import "@/assets/css/jquery.magnific-popup.css";
import "@/assets/css/odometer.min.css";
import "@/assets/css/flaticon.css";
import "@/assets/css/nice-select.css";
import "@/assets/css/aos.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import FrontendShell from "@/components/layout/FrontendShell";
import LegacyScripts from "@/components/layout/LegacyScripts";
import { Exo_2 } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Self-hosted via next/font — eliminates render-blocking Google Fonts requests
const exo = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-exo", // unique name — style.css references this via var(--font-exo)
});

export const metadata: Metadata = {
  title: "TROT Solutions",
  description:
    "Global Leader in Port and Terminal Equipment Lifecycles. We specialize in engineering products, predictive maintenance, heavy-lift logistics, and complete lifecycle optimization.",
  keywords: [
    "TROT Solutions",
    "Port Equipment",
    "Terminal Equipment",
    "Predictive Maintenance",
    "Heavy-Lift Logistics",
    "Lifecycle Optimization",
    "Cranes",
    "Spreaders",
    "Brokerage",
  ],
  icons: {
    icon: "/assets/images/favicons/favicon.ico",
    apple: "/assets/images/favicons/apple-touch-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={exo.variable}>
      <body>
        <FrontendShell>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontSize: '16px',
                borderRadius: '8px',
                padding: '16px',
              },
            }}
          />
        </FrontendShell>

        {/* Legacy Scripts */}
        <LegacyScripts />
      </body>
    </html>
  );
}
