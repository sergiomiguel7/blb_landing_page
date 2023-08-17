import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import React from "react";
import Logo from "../Hero/Logo";
import Contact from "../Contact";

export default function Footer() {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Blog",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "Team",
    },
    {
      href: "javascript:void()",
      name: "Careers",
    },

    {
      href: "javascript:void()",
      name: "Suuport",
    },
  ];

  return (
    <footer className="bg-primary px-4 py-8 mt-20 md:px-8 flex flex-col gap-16">
      <Contact />
      {/* <div className="max-w-lg sm:mx-auto sm:text-center">
        <Logo className="mx-auto" />

                <p className="leading-relaxed mt-2 text-[15px]">
          Somos uma empresa dedicada a revolucionar a forma como os automóveis
          são lavados, adotando uma abordagem ecologicamente consciente e
          altamente eficaz. A nossa paixão pela sustentabilidade impulsiona-nos
          a fornecer serviços de lavagem automóvel que não só proporcionam
          resultados excecionais, como também contribuem para a preservação do
          ambiente.
        </p> 
      </div>
           <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li key={idx} className=" hover:text-gray-800">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>  */}
      <div className="w-full text-gray-200 items-center justify-between max-w-screen-xl mx-auto sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Blb Lavagem Ecológica
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.instagram.com/blblavagemecologica/"
                target="_blank"
              >
                <IconBrandInstagram width={24} height={24} />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.facebook.com/blb.lavagemecologica"
                target="_blank"
              >
                <IconBrandFacebook width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
