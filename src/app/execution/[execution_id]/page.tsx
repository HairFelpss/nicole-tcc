"use client";

import { BPImperialItalic } from "@/styles/fonts";
import Link from "next/link";

export default function Page({ params }: { params: { execution_id: string } }) {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="z-10 my-10 text-2xl w-full  text-center font-bold">
          {params.execution_id.toLocaleUpperCase()}
        </h1>

        {params.execution_id === "biceps" && (
          <div className="z-10 flex flex-col space-y-6 w-full mx-20 mt-5 justify-center items-center">
            <iframe
              width="250"
              height="400"
              src="https://www.youtube.com/embed/x6JCKfdzPJE"
              title="Rosca Direta em Pé Polia baixa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
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
