"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import Link from "next/link";

const training = [
  { execution_id: "01", execution_name: "Rosca Direta em Pé Polia baixa" },
  { execution_id: "02", execution_name: "Rosca Direta com Halteres" },
  { execution_id: "03", execution_name: "Rosca Martelo" },
  { execution_id: "04", execution_name: "Rosca no banco Scott" },
  { execution_id: "05", execution_name: "Rosca Direta no banco inclinado" },
  { execution_id: "06", execution_name: "Rosca Direta concentrada unilateral" },
];

export default function Page({ params }: { params: { execution_id: string } }) {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10 ">
        <h1 className="z-10 my-10 text-2xl w-full  text-center font-bold">
          Exercicios
        </h1>
        <div className="z-10 flex flex-col space-y-4 w-full h-[60vh] overflow-auto">
          {training.map((training, index) => (
            <Link
              className="bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2 w-full flex items-center justify-center rounded-lg"
              key={index}
              href={`/execution/biceps/${training.execution_id}`}
            >
              <h3
                className={`${LibreBaskerville.className} text-center text-xl`}
              >
                {training.execution_name}
              </h3>
            </Link>
          ))}
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
