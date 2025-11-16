import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choose weights you need
  style: ["normal", "italic"],  // optional
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqsatech.in"),

  title: "Aqsa Tech",
  description:
    `Aqsa Tech provides dynamic and interactive websites tailored for industries such as Education, Health Care, Finance, and Food Services.
We focus on building user-friendly and performance-optimized platforms that enhance engagement and streamline operations.
Our solutions are crafted with modern technologies to ensure reliability, speed, and long-term scalability.
From simple portals to advanced custom systems, Aqsa Tech delivers digital experiences that truly make an impact.`,

  keywords: [
    "Aqsa Tech",
    "Official Website of Aqsa Tech",
    "Website Provider in Cooch Behar"
  ],

  icons: {
    icon: "/aqsa_tech_logo.png",
  },

  openGraph: {
    title: "Aqsa Tech | Website Provider",
    description: "Official website of Aqsa Tech",
    url: "https://aqsatech.in/",
    siteName: "Aqsa Tech, Website Provider",
    images: [
      {
        url: "/aqsa_tech_logo.png", // this now auto resolves to https://aqsatech.in/profile_image.jpg
        width: 1200,
        height: 630,
        alt: "Aqsa Tech logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aqsa Tech",
    description: "Official website of Aqsa Tech.",
    images: ["/aqsa_tech_logo.png"], // auto resolves to absolute URL
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className}`}
      >
        {children}
      </body>
    </html>
  );
}
