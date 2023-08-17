import { IconHome, IconLeaf, IconSpray } from "@tabler/icons-react";
import React from "react";

export default function Features() {
  const features = [
    {
      icon: <IconLeaf width={24} height={24} />,
      title: "Poupança de Água e Cuidado com o Ambiente",
      desc: "Utilizamos métodos inovadores que dispensam o uso de água, contribuindo para a poupança deste recurso precioso e para a preservação do ambiente. A nossa abordagem garante um carro limpo e brilhante, enquanto faz a sua parte na proteção do planeta.",
    },
    {
      icon: <IconSpray width={24} height={24} />,
      title: "Resultados Impecáveis, Sem Água",
      desc: "A nossa técnica ecológica não compromete a qualidade do resultado. Com produtos avançados e técnicas de limpeza especializadas, o seu carro ficará imaculado, sem uma única gota de água. A sua satisfação e o bem-estar do nosso planeta são a nossa prioridade.",
    },
    {
      icon: <IconHome width={24} height={24} />,
      title: "Comodidade no Conforto da Sua Casa",
      desc: "Oferecemos a conveniência da lavagem de carros ao domicílio. Evite filas e esperas. Os nossos profissionais qualificados deslocam-se até si, levando a limpeza diretamente à sua porta. É simples, rápido e ecologicamente responsável.",
    },
  ];

  return (
    <section id="features" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-primary font-semibold">Características</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            As Nossas Soluções de Lavagem
          </p>
          <p>Porquê escolher o nosso serviço?</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-primary rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
