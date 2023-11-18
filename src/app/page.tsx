import { Button } from "@/components/ui/button";

import { BPImperialItalic } from "@/styles/fonts";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-start justify-evenly px-10">
      <div
        className={`${BPImperialItalic.className} text-8xl leading-normal text-center drop-shadow-[0_0.1px_4.5px_#fff] text-[#887BB0] font-bold`}
      >
        TRAIN LIKE A GIRL
      </div>

      <Link href="/menu" className="mb-5">
        <Button className="rounded-full h-20 w-20 flex items-center drop-shadow-[0_0.1px_4.5px_#fff] bg-[#887BB0] hover:bg-violet-400 active:bg-violet-500 font-bold">
          <PlayCircle className="h-20 w-20" />
        </Button>
      </Link>

      <div className="fixed bottom-0 left-0 flex h-20 mt-4 w-full items-end justify-center lg:static lg:h-auto lg:w-auto">
        <div className={BPImperialItalic.className}>
          <p className="text-center text-xs">Desenvolvido por</p>
          <h2 className="text-center text-xl text-extrabold">
            Nicole Federici
          </h2>
        </div>
      </div>
    </main>
  );
}
