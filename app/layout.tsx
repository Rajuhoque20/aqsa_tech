import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choose weights you need
  style: ["normal", "italic"],  // optional
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });




export const metadata: Metadata = {
   title: "Aqsa Tech",
  description: "Aqsa Tech provides dynamic and interactive websites for Education, Health Care, Finanace, Food Order and so on.",

  keywords: ["Aqsa Tech", "Al Karim Mission","Al Karim Mission Cooch behar","Delhi Public School"],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Aqsa Tech | Website Provider",
    description: "Official website of Aqsa Tech",
    url: "https://aqsatech.in/",
    siteName: "Raju Hoque Portfolio",
    images: [
      {
        url: "https://aqsatech.in/profile_image.jpg",
        width: 1200,
        height: 630,
        alt: "Raju Hoque Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsa Tech",
    description: "Official website of Aqsa Tech.",
    images: ["https://aqsatech.in/profile_image.jpg"],
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
