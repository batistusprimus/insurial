import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insurial - Get a clear business insurance overview and request a tailored quote in <24h",
  description: "Free business insurance quotes for SMBs & mid-market. No obligation, fast response <24h. GDPR compliant.",
  keywords: "business insurance, commercial insurance, liability insurance, property insurance, SMB insurance",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Insurial - Business Insurance Quotes in <24h",
    description: "Get a personalized business insurance quote in <24h. Free, no obligation, GDPR compliant.",
    url: "https://insurial.info",
    siteName: "Insurial",
    type: "website",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Insurial Logo',
      },
    ],
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
        className={`${archivoBlack.variable} ${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
