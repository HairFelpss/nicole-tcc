"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  CalendarSearch,
  Dumbbell,
  Mail,
  Phone,
  PlayCircle,
  UserCircle2,
} from "lucide-react";

export default function Menu() {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10 justify-center">
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-12 content-start">
            <div>
              <Link href="/calendar">
                <Button className="h-full w-full flex flex-col flex-wrap items-center  bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold ">
                  <CalendarSearch className="h-10 w-10" />
                  <h3
                    className={`${LibreBaskerville.className} mt-4 text-sm w-full box-border`}
                  >
                    CALENDÁRIO MENSTRUAL
                  </h3>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/daily-training">
                <Button className="h-50 w-full flex flex-col items-center bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <Dumbbell className="h-10 w-10" />
                  <h3 className={`${LibreBaskerville.className} mt-4`}>
                    DIÁRIO DE TREINAMENTO
                  </h3>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <Button className="h-50 w-full flex flex-col items-center  bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <Phone className="h-10 w-10" />
                  <h3 className={`${LibreBaskerville.className} mt-4`}>
                    CONTATOS PROFISSIONAIS
                  </h3>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/feed">
                <Button className="h-50 w-full flex flex-col items-center bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <Mail className="h-10 w-10" />
                  <h3 className={`${LibreBaskerville.className} mt-4`}>
                    FEED DE MENSAGENS
                  </h3>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/execution">
                <Button className="h-50 w-full flex flex-col items-center  bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <PlayCircle className="h-10 w-10" />
                  <h3 className={`${LibreBaskerville.className} mt-4`}>
                    EXECUÇÃO
                  </h3>
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/profile">
                <Button className="h-50 w-full flex flex-col items-center  bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
                  <UserCircle2 className="h-10 w-10" />
                  <h3 className={`${LibreBaskerville.className} mt-4`}>
                    SEU PERFIL
                  </h3>
                </Button>
              </Link>
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
