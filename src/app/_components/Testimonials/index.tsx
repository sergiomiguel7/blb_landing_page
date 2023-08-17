import Image from "next/image";
import React from "react";
import Image1 from "../../../assets/faces/1.jpeg";
import Image2 from "../../../assets/faces/2.jpeg";
import Image3 from "../../../assets/faces/3.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      avatar: Image1,
      name: "Bernardete Fernandes",
      title: "Founder of meta",
      quote:
        "Serviço à porta, eficiente, ecológico e de confiança. Tenho animais e ficou bem limpo. Recomendo e fiquei cliente.",
    },
    {
      avatar: Image2,
      name: "Anita Marques",
      title: "Product designer",
      quote:
        "Empresa altamente qualificada para lavagem de automóvel. Pormenorizados, empenhados e competentes. Melhor serviço que já usufri. O carro fica impecavelmente novo.",
    },
    {
      avatar: Image3,
      name: "Sérgio Carvalho",
      title: "DevOp engineer",
      quote: "Serviço personalizado e com muita qualidade. Recomendo.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            O Que Dizem Os Nossos Clientes
          </h3>
          <p className="mt-3 text-gray-600">
            Descubra as experiências de quem já confiou nos nossos serviços. A
            sua satisfação é a nossa maior recompensa.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.avatar}
                      width={64}
                      height={64}
                      className=" rounded-full"
                      alt={""}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
