import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";
import React from "react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <IconLocation color="white" />,
      contact: "R. da Vista Alegre, 4835-257 Guimarães",
      title: "A nossa sede",
    },
    {
      icon: <IconPhone color="white" />,
      contact: "+351 911 829 518",
      title: "Telemóvel",
    },
  ];

  return (
    <section id="contacts" className="">
      <div className="max-w-screen-xl mx-auto text-gray-200">
        <div className="max-w-xl space-y-3">
          <h3 className="text-primary font-semibold">Contactos</h3>
          <p className="text-gray-200 text-3xl font-semibold sm:text-4xl">
            Diga-nos como podemos ajudar
          </p>
          {/* <p>
            Estamos aqui para ajudar e responder a qualquer pergunta que possa
            ter.
          </p> */}
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
              <li key={idx}>
                <h4 className="text-slate-300 text-lg font-medium">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-x-3">
                  <div className="flex-none text-gray-400">{item.icon}</div>
                  <p>{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
