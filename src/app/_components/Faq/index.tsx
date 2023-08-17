import React from "react";
import { FaqsCard } from "./utils/FaqCard";

export default function Faq() {
  const faqsList = [
    {
      q: "Como é possível lavar um carro sem usar água?",
      a: "Recorremos a produtos de limpeza especiais e técnicas de polimento que dispensam a necessidade de água. Estes produtos são seguros para o seu carro e para o ambiente, assegurando uma limpeza eficaz sem desperdício de água.",
    },
    {
      q: "A lavagem sem água é tão eficaz como a lavagem tradicional?",
      a: "Sim, os nossos métodos de lavagem ecológica foram concebidos para proporcionar resultados excecionais sem comprometer a qualidade. O seu carro ficará tão limpo e reluzente como após uma lavagem convencional, com a vantagem adicional de ser uma escolha amiga do ambiente.",
    },
    {
      q: "Quanto tempo demora a lavagem de um carro?",
      a: "O tempo necessário para a lavagem varia consoante o tamanho e estado do veículo. No entanto, a nossa equipa experiente é eficiente e rápida, e a maioria das lavagens pode ser concluída em cerca de 1 a 1,5 horas. A vantagem de evitar tempos de espera é um dos benefícios da nossa lavagem ao domicílio.",
    },
    {
      q: "Que produtos de limpeza são utilizados? São seguros?",
      a: "Utilizamos produtos de limpeza de elevada qualidade, formulados especialmente para remover a sujidade e os detritos, mantendo a segurança da pintura e dos materiais do seu carro. Os nossos produtos são cuidadosamente selecionados para minimizar qualquer impacto negativo no ambiente.",
    },
    {
      q: "Como posso agendar uma lavagem ao domicílio?",
      a: "Agendar a lavagem ao domicílio é simples! Aceda ao nosso site ou entre em contacto com a nossa equipa de apoio ao cliente. Escolha a data e hora que lhe sejam mais convenientes, e a nossa equipa estará à sua porta para efetuar a limpeza onde preferir.",
    },
  ];

  return (
    <section
      id="faq"
      className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8"
    >
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Perguntas mais frequentes
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Aqui encontra todas as respostas às perguntas mais frequentes, ainda
          está confuso? Sinta-se livre para nos contactar.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={`faq-question-${idx}`} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
