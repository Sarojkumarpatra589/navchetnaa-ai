import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/data/site";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { BackToTop } from "@/components/common/BackToTop";
import { GlobalSchema } from "@/components/common/GlobalSchema";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "NAVCHETNAA AI | AI Development, Custom Software & Automation",
    template: "%s | NAVCHETNAA AI",
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: "NAVCHETNAA AI | AI Development, Custom Software & Automation",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVCHETNAA AI | AI Development, Custom Software & Automation",
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <GlobalSchema />
        <SmoothScrollProvider>
          <a href="#main-content" className="skipLink">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}