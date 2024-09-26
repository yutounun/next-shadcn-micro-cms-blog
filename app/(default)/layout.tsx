import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteFooter } from "@/components/layout/footer";
import Header from "@/components/layout/header";
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Change to your project's domain
  title: {
    default: "Andrew Blog",
    template: "Andrew Blog",
  },
  description: "About tech and life in Vancouver",
  openGraph: {
    title: "Andrew Blog",
    description:
      "Explore the future of blogging with our platform powered by Next.js 14, ShadcnUI, and Sanity.io.",
    url: "https://yourdomain.com", // Change to your project's URL
    siteName: "Andrew Blog",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Andrew Blog",
    card: "summary_large_image",
  },
  verification: {
    google: "YourGoogleVerificationToken", // Update with your new Google verification token
    yandex: "YourYandexVerificationToken", // Update with your new Yandex verification token
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx("text-black  dark", GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <main className="min-h-screen antialiased">
            <Header />
            {children}
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
