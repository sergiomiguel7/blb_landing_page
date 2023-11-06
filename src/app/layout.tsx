import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { generateBaseMetadata, generateSchemaOrg } from "./_shared/metadata";
import Script from "next/script";

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11402325724"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11402325724');
        `}
      </Script>
      <body className={inter.className}>
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
