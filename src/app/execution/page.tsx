"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const buttonsData = [
  { href: "/execution/biceps", text: "Bíceps" },
  { href: "/execution/triceps", text: "Tríceps" },
  { href: "/execution/abdomem", text: "Abdômen" },
  { href: "/execution/aerobico", text: "Aeróbico" },
  { href: "/execution/posterior", text: "Posterior" },
  { href: "/execution/quadriceps", text: "Quadríceps" },
];

export default function ExecutionPage() {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10">
        <h1
          className={`${LibreBaskerville.className} z-10 my-10 text-2xl w-full text-center font-bold`}
        >
          Execuções
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center z-10">
          {buttonsData.map((button, index) => (
            <div key={index} className="w-full h-full">
              <Link href={button.href}>
                <Button className="w-full h-full flex items-center justify-center bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <h3 className={`${LibreBaskerville.className} my-6 text-sm`}>
                    {button.text}
                  </h3>
                </Button>
              </Link>
            </div>
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
