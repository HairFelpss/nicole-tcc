"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import Link from "next/link";
import React from "react";

const trainers = [
  { name: "John Doe", phone: "123456789" },
  { name: "Alice Smith", phone: "123456789" },
  { name: "Michael Johnson", phone: "123456789" },
  { name: "Emily Brown", phone: "123456789" },
];

const nutris = [
  { name: "Sophia Williams", phone: "123456789" },
  { name: "Daniel Garcia", phone: "123456789" },
  { name: "Olivia Martinez", phone: "123456789" },
  { name: "Liam Lopez", phone: "123456789" },
];

const ginecos = [
  { name: "Isabella Rodriguez", phone: "123456789" },
  { name: "Alexander Hernandez", phone: "123456789" },
  { name: "Charlotte Gonzalez", phone: "123456789" },
  { name: "Mason Perez", phone: "123456789" },
];

const psis = [
  { name: "Amelia Torres", phone: "123456789" },
  { name: "William Flores", phone: "123456789" },
  { name: "Evelyn Ramirez", phone: "123456789" },
  { name: "James Cruz", phone: "123456789" },
];

const professions = [
  {
    professional_id: "personal",
    list: trainers,
    professional_name: "Personal Trainer",
  },
  {
    professional_id: "ginecologista",
    list: ginecos,
    professional_name: "Ginecologista",
  },
  {
    professional_id: "nutricionista",
    list: nutris,
    professional_name: "Nutricionista",
  },
  { professional_id: "psicologo", list: psis, professional_name: "Psicológo" },
];

const professions_title: Record<string, string> = {
  personal: "Personal Trainer",
  ginecologista: "Ginecologista",
  nutricionista: "Nutricionista",
  psicologo: "Psicológo",
};

export default function Page({
  params,
}: {
  params: { professional_id: string };
}) {
  const [hoveredItem, setHoveredItem] = React.useState<string>("");

  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="z-10 my-10 text-2xl w-full text-center font-bold">
          {professions_title[params.professional_id]}
        </h1>
        <div className="z-10 flex flex-col space-y-10 w-full ml-20 mt-10">
          {professions.map((profession) =>
            profession.professional_id !== params.professional_id
              ? null
              : profession.list.map((trainer, index) => (
                  <div
                    className="bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2 w-full flex items-center justify-center rounded-lg"
                    key={index}
                    onMouseEnter={() => setHoveredItem(trainer.name)}
                    onMouseLeave={() => setHoveredItem("")}
                  >
                    {trainer.name !== hoveredItem ? (
                      <h3
                        className={`${LibreBaskerville.className} text-center text-xl`}
                      >
                        {trainer.name}
                      </h3>
                    ) : (
                      <h3
                        className={`${LibreBaskerville.className} text-center text-sm`}
                      >
                        {trainer.name}, Telefone: {trainer.phone}
                      </h3>
                    )}
                  </div>
                ))
          )}
        </div>
        {/* The background div */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="flex flex-col h-screen items-center justify-items-start px-10">
            <div className="mt-10 ">
              <h1 className="drop-shadow-[0_0.1px_4.5px_#fff] text-8xl leading-normal text-center text-[#887BB0] font-bold opacity-40">
                TRAIN LIKE A GIRL
              </h1>
              <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center lg:static lg:h-auto lg:w-auto sm:static sm:h-auto sm:w-auto">
                <Link href="/menu" className={BPImperialItalic.className}>
                  <p className="text-center text-xs text-black">
                    Desenvolvido por
                  </p>
                  <h2 className="text-center text-xl text-extrabold  text-black">
                    Nicole Federici
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
