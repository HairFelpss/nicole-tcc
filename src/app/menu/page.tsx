import { Button } from "@/components/ui/button";
import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import {
  CalendarSearch,
  Dumbbell,
  Mail,
  Phone,
  PlayCircle,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MenuItem = ({ href, icon, text }: any) => {
  return (
    <Link href={href}>
      <Button className="h-50 w-full flex flex-col items-center bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold">
        {icon && React.createElement(icon, { className: "h-10 w-10" })}
        <h3 className={`${LibreBaskerville.className} mt-6 text-xs`}>{text}</h3>
      </Button>
    </Link>
  );
};

export default function Menu() {
  const menuItems = [
    { href: "/calendar", icon: CalendarSearch, text: "CALENDÁRIO MENSTRUAL" },
    { href: "/daily-training", icon: Dumbbell, text: "DIÁRIO DE TREINAMENTO" },
    { href: "/contact", icon: Phone, text: "CONTATOS PROFISSIONAIS" },
    { href: "/feed", icon: Mail, text: "FEED DE MENSAGENS" },
    { href: "/execution", icon: PlayCircle, text: "EXECUÇÃO" },
    { href: "/profile", icon: UserCircle2, text: "SEU PERFIL" },
  ];

  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10 justify-center relative">
        <div className="grid grid-cols-2 gap-8 content-start z-10">
          {menuItems.map((item, index) => (
            <div key={index}>
              <MenuItem {...item} />
            </div>
          ))}
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
                  <h2 className="text-center text-xl text-extrabold text-black">
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
