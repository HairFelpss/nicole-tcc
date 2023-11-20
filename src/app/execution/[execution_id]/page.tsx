"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import { Label, Select } from "flowbite-react";

const options = ["Muito Baixo", "Baixo", "Moderado", "Alto", "Muito Alto"]; // Replace this with your own array of options
const id = "avaliacao";

export default function Page({ params }: { params: { execution_id: string } }) {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10 ">
        <h1
          className={`${LibreBaskerville.className} my-10 text-2xl w-full  text-center font-bold z-40`}
        >
          {params.execution_id}
        </h1>
        <div className="z-10 flex flex-col space-y-4 w-full h-[60vh] overflow-auto">
          <div className="bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2 w-full flex items-center justify-center rounded-lg">
            <h3 className={`${LibreBaskerville.className} text-center text-xl`}>
              Exercícios
            </h3>
          </div>
          <div className="bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2 w-full flex items-center justify-center rounded-lg">
            <div className="w-full flex flex-col flex-wrap items-center rounded-lg bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2">
              <div className="mb-2 block">
                <Label
                  htmlFor="avaliacao"
                  value="Auto Avaliação de Desempenho"
                  className={`${LibreBaskerville.className} text-sm w-full`}
                />
              </div>
              <Select
                id={id}
                required
                className={`${LibreBaskerville.className} w-full`}
              >
                {options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        {/* The background div */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex flex-col h-screen items-center justify-items-start px-10">
            <div className="mt-10 ">
              <h1 className="drop-shadow-[0_0.1px_4.5px_#fff] text-8xl leading-normal text-center text-[#887BB0] font-bold opacity-40">
                TRAIN LIKE A GIRL
              </h1>
              <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center lg:static lg:h-auto lg:w-auto sm:static sm:h-auto sm:w-auto">
                <div className={BPImperialItalic.className}>
                  <p className="text-center text-xs text-black">
                    Desenvolvido por
                  </p>
                  <h2 className="text-center text-xl text-extrabold  text-black">
                    Nicole Federici
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
