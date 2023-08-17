"use client";
import React, { useState } from "react";

export default function Pricing() {
  const checkIcon = (
    <svg
      className="w-5 h-5 mx-auto text-indigo-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
    </svg>
  );
  const minusIcon = (
    <svg
      className="w-5 h-5 mx-auto text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
    </svg>
  );

  const plans = [
    {
      name: "Lavagem Simples",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "15",
    },
    {
      name: "Lavagem Completa",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "20",
    },
    {
      name: "Lavagem Completa + Estofos",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "55",
    },
  ];

  const tables = [
    {
      label: "Serviços Principais",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      items: [
        {
          name: "Lavagem Exterior",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Aspiração",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Estofos",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  return (
    <section className="py-14 text-gray-600">
      <div className="">
        <div className="relative max-w-xl mx-auto space-y-3 px-4 sm:text-center md:px-0">
          <h3 className="text-indigo-600 font-semibold">Preçário</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Verifica os nossos planos principais
          </p>
          <div className="max-w-xl">
            <p></p>
          </div>
        </div>
        <div className="mt-16">
          <div className="sticky top-0 py-6 border-b bg-white">
            <div className="max-w-screen-xl mx-auto">
              <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
                {plans.map((item, idx) => (
                  <li
                    key={idx}
                    className={`space-y-4 w-full ${
                      item.name != selectedPlan ? "hidden lg:block" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      <div className="relative lg:hidden">
                        <svg
                          className="w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <select
                          value="Switch plan"
                          className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                          onChange={(e) => setSelectedPlan(e.target.value)}
                        >
                          <option disabled selected>
                            Switch plan
                          </option>
                          {plans.map((option, idx) => (
                            <option key={idx}>{option.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="text-gray-800 text-3xl font-semibold">
                      {item.price} €
                      <span className="text-xl text-gray-600 font-normal">
                        /mo
                      </span>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                    <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                      Get Started
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
            {tables.map((table, idx) => (
              <table key={idx} className="w-full table-auto text-sm text-left">
                <thead className="text-gray-600 font-medium border-b">
                  <tr>
                    <th className="z-20 top-12 py-6 lg:sticky">
                      <div className="flex items-center gap-x-3">
                        <div className="w-12 h-12 text-indigo-600 rounded-full border flex items-center justify-center">
                          {table.label_icon}
                        </div>
                        <h4 className="text-gray-800 text-xl font-medium">
                          {table.label}
                        </h4>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {table.items.map((item: any, idx) => (
                    <>
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        {/* For large devices */}
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.basic}
                        </td>
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.business}
                        </td>
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                          {item.enterprise}
                        </td>
                        {/* For small devices */}
                        <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
                          {item[selectedPlan.toLowerCase()]}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
