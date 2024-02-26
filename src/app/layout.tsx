import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { generateBaseMetadata, generateSchemaOrg } from "./_shared/metadata";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return generateBaseMetadata({
    title: "Blb Lavagem Ecológica",
    description: `Descubra a revolução na lavagem automóvel! Sustentabilidade aliada a resultados excecionais. Conheça a nossa abordagem ecológica para um carro impecável.`,
    multimedia: [],
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-PJS2QCVD" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSchemaOrg()),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
