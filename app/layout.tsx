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
  metadataBase: new URL("https://dust-defender-lab.vercel.app"),
  title:
    "Dust Defender Lab | Premium Car Detailing & Ceramic Coating Studio Hyderabad",
  description:
    "Hyderabad's premium car detailing studio. PPF, Ceramic Coating, Graphene Coating, Sunfilm, Interior Cleaning & Car Wash. 4.9★ Google Rating. Book on WhatsApp.",
  keywords:
    "ceramic coating Hyderabad, car detailing studio Hyderabad, best car detailing Hyderabad, PPF Hyderabad, graphene coating, bike detailing studio near me, paint protection Hyderabad, sunfilm protection, interior foam cleaning",
  openGraph: {
    title: "Dust Defender Lab | Premium Car Detailing & Ceramic Coating",
    description:
      "Not just a wash. A transformation. PPF, Ceramic Coating, Graphene Coating & more. 4.9★ Rated. LB Nagar, Hyderabad.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Dust Defender Lab — Premium Car Detailing & Ceramic Coating Studio Hyderabad",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      name: "Dust Defender Lab",
      description:
        "Premium car and bike detailing studio offering PPF, Ceramic Coating, Graphene Coating, Sunfilm Protection, Interior Foam Cleaning, and Car Wash & Steam Clean.",
      url: "https://dust-defender-lab.vercel.app",
      telephone: "+919999999999",
      email: "hello@dustdefenderlab.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bhavani Towers, beside Srikara Hospital, LB Nagar",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500074",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.35,
        longitude: 78.55,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What's the difference between Ceramic and Graphene coating?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ceramic coating uses SiO2 for hydrophobic protection and gloss. Graphene coating adds superior heat dissipation, anti-static properties, and deeper shine. Both last 2-5+ years.",
          },
        },
        {
          "@type": "Question",
          name: "How long does ceramic coating last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ceramic coating lasts 2-5 years. Graphene coating lasts 3-5+ years. PPF lasts 7-10 years. Duration depends on maintenance and driving conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer PPF (Paint Protection Film)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer professional PPF installation on high-impact zones including hood, bumper, fenders, and side mirrors. PPF is self-healing and virtually invisible.",
          },
        },
        {
          "@type": "Question",
          name: "Do you do bike detailing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we detail both cars and bikes. Bike packages include foam wash, paint correction, ceramic/graphene coating, and chrome polishing.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Dust Defender Lab located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bhavani Towers, beside Srikara Hospital, LB Nagar, Hyderabad 500074. Easy access from Banjara Hills, Jubilee Hills, HITEC City, and Gachibowli.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the detailing process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Car Wash: 1-2 hours. Interior Foam Cleaning: 2-3 hours. Ceramic/Graphene Coating: 4-8 hours. PPF installation: 1-2 days.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a session?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp us for instant booking. Walk-ins welcome. We recommend booking 1-2 days in advance. Open Monday to Saturday, 10am to 7pm.",
          },
        },
      ],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text font-body">{children}</body>
    </html>
  );
}
