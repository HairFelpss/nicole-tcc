"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import Image from "next/image";

import Link from "next/link";
import profilePic from "../../assets/logo/profile.jpeg";

const userProfile = {
  nome: "Nicole Federici",
  email: "nicnic@nicnic.com",
  telefone: "31-33342525",
  genero: "Feminino",
  peso: "55 KG",
  altura: "1.70",
  idade: "15",
};

export default function Contact() {
  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="z-10 my-10 text-2xl w-full  text-center font-bold">
          Perfil
        </h1>

        <Image
          alt="Bonnie image"
          height="100"
          src={profilePic}
          width="150"
          className="mb-3 rounded-full shadow-lg z-10"
        />

        <div className="z-10 flex flex-col space-y-6 w-full h-[30vh] overflow-auto mr-20 mt-5">
          {Object.entries(userProfile).map((value, key) => (
            <div
              className="bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2 w-full flex items-center justify-center rounded-lg"
              key={key}
            >
              <h3
                className={`${LibreBaskerville.className} text-center text-xl`}
              >
                {value[0].charAt(0).toUpperCase() + value[0].slice(1)}:{" "}
                {value[1]}
              </h3>
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
              <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center z-50">
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
