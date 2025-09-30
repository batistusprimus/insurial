import type { Metadata } from "next";
import { Inter, Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const archivoBlack = Archivo_Black({ weight: ["400"], subsets: ["latin"], variable: "--font-archivo-black" });

export const metadata: Metadata = {
  title: "Insurial – Business Insurance Education + Free Risk Score",
  description: "Clear, trustworthy education on business insurance for US companies. Get your free Business Insurance Risk Score based on industry, size, location, and revenue.",
  keywords: "business insurance, education, risk score, general liability, workers compensation, commercial property, commercial auto, BOP",
  robots: "index, follow",
  openGraph: {
    title: "Insurial – Business Insurance Education + Free Risk Score",
    description: "Understand your insurance needs with clear, trustworthy resources. Get your free Business Insurance Risk Score.",
    url: "https://insurial.info",
    siteName: "Insurial",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurial – Business Insurance Education + Free Risk Score",
    description: "Get your free Business Insurance Risk Score and understand your insurance needs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} ${archivoBlack.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
