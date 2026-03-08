import type { Metadata } from "next";
import { Noto_Serif_JP, Cormorant_Garamond, Noto_Sans_JP, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIHON — Japan Travel Guide | 日本観光完全ガイド",
  description:
    "The complete Japan travel guide for international visitors. Discover 10,000+ destinations across all 47 prefectures — temples, nature, food, onsen and more.",
  keywords:
    "Japan travel guide, visit Japan, Tokyo, Kyoto, Osaka, Japanese temples, Japan tourism, inbound Japan, 日本観光, Japan itinerary, best places in Japan",
  authors: [{ name: "NIHON Japan Travel Guide" }],
  openGraph: {
    type: "website",
    title: "NIHON — Japan Travel Guide | 日本観光完全ガイド",
    description:
      "The complete Japan travel guide. 10,000+ destinations, all 47 prefectures, every season.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    alternateLocale: "ja_JP",
    siteName: "NIHON Japan Travel Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIHON — Japan Travel Guide",
    description:
      "The complete Japan travel guide. 10,000+ destinations across all 47 prefectures.",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    ],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗾</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NIHON Japan Travel Guide",
              alternateName: "日本観光ガイド",
              url: "https://nihon-guide.vercel.app/",
              description:
                "The complete guide to travelling Japan — destinations, food, culture and seasonal highlights.",
              inLanguage: ["en", "ja", "zh", "ko"],
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://nihon-guide.vercel.app/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "NIHON Japan Travel Guide",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${notoSerifJP.variable} ${cormorantGaramond.variable} ${notoSansJP.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
