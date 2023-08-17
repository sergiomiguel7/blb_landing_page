import Image from "next/image";
import React from "react";
import HeroCover from "../../../assets/hero_cover.jpeg";
import {
  IconArrowRight,
  IconPlayerPlayFilled,
  IconUserCheck,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HeroSection() {
  const features = [
    {
      name: "Certificado",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 h-5 fill-primary"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "200+ clientes",
      icon: <IconUserCheck width={24} height={24} />,
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 lg:py-28 gap-12 text-gray-600 md:px-8 flex lg:flex-row flex-col items-center">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-x-2 text-gray-500 text-sm"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Lave o Seu Carro com Responsabilidade Ambiental
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Lavagem Ecológica, Sem Uso de Água, Diretamente em Sua Casa
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <Link
              href="?reservation=true"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-primary hover:bg-green-800  duration-150  active:bg-gray-900 rounded-lg md:inline-flex"
            >
              Marque já
              <IconArrowRight width={24} height={24} color="white" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-1 max-w-xl mx-auto xl:mt-0">
          <div className="relative w-fit">
            <Image
              width={420}
              height={90}
              src={HeroCover}
              className="rounded-lg"
              alt=""
            />
            <Link
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-primary hover:bg-green-800  ring-offset-2 focus:ring text-white"
              href={"?video=true"}
            >
              <IconPlayerPlayFilled
                className="m-auto h-full"
                color="white"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
