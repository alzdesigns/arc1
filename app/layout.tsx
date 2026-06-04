import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://arc-alz.vercel.app");

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "ARC | Accelerated Recovery Club",
    template: "%s | ARC"
  },
  description:
    "Melbourne's dedicated red light therapy and wellness club. Non-invasive treatments designed to help your body heal, recover, and perform at its best.",
  applicationName: "ARC",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ARC | Accelerated Recovery Club",
    description:
      "Melbourne's dedicated red light therapy and wellness club. Non-invasive treatments designed to help your body heal, recover, and perform at its best.",
    url: "/",
    siteName: "ARC",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ARC Accelerated Recovery Club"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC | Accelerated Recovery Club",
    description:
      "Melbourne's dedicated red light therapy and wellness club. Non-invasive treatments designed to help your body heal, recover, and perform at its best.",
    images: ["/opengraph-image"]
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
