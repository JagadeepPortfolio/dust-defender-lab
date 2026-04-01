import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dust Defender Lab | Premium Car Detailing & Ceramic Coating Studio Hyderabad",
  description:
    "Hyderabad's premium car detailing studio offering professional ceramic coating, paint correction, and hydrophobic protection. Transparent pricing, expert techniques, showroom-quality results.",
  keywords:
    "ceramic coating Hyderabad, car detailing studio Hyderabad, best car detailing Hyderabad, ceramic coating price, car detailing price Hyderabad, bike detailing studio near me, paint protection Hyderabad",
  openGraph: {
    title: "Dust Defender Lab | Premium Car Detailing & Ceramic Coating",
    description:
      "Not just a wash. A transformation. Professional ceramic coating with deep gloss, hydrophobic protection, and long-lasting durability.",
    type: "website",
    locale: "en_IN",
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
      className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}
    >
      <body className="bg-bg text-text font-body">{children}</body>
    </html>
  );
}
