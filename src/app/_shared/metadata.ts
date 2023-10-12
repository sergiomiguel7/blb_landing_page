import { WebPage, WithContext } from "schema-dts";
import { WEBSITE } from "../robots";
import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  multimedia?: string[];
}

export const generateSchemaOrg = (): WithContext<WebPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blb Lavagem Ecológica",
    description: `Descubra a revolução na lavagem automóvel! Sustentabilidade aliada a resultados excecionais. Conheça a nossa abordagem ecológica para um carro impecável.`,
    url: WEBSITE,
  };
};

export const generateBaseMetadata = (props: PageMetadata): Metadata => {
  return {
    title: props.title,
    description: props.description,
    keywords: [
      "Lavagem automóvel",
      "Lavagem ecológica",
      "Sustentabilidade",
      "Preservação do ambiente",
      "Abordagem ecológica",
      "Resultados excecionais",
      "Carro limpo",
      "Serviços de lavagem",
      "Lavagem sem água",
      "Eficiência ecológica",
      "Lavagem ao domicílio",
      "Poupança de água",
      "Cuidado ambiental",
      "Tecnologia sustentável",
      "Inovação em lavagem",
    ],
    alternates: {
      canonical: "/",
      languages: {
        pt: "/",
        br: "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: props.title,
      description: props.description,
      type: "website",
      url: WEBSITE,
      images: props.multimedia,
    },
    twitter: {
      images: props.multimedia,
      title: props.title,
      description: props.description,
    },
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
    ],
  };
};
