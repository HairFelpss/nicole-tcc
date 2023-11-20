"use client";

import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import { Label, Select } from "flowbite-react";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { date: string } }) => {
  const router = useRouter();

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      weekday: "long",
    };
    const formatter = new Intl.DateTimeFormat("pt-BR", options);
    return formatter.format(date).toUpperCase();
  };

  const formattedDate = formatDate(new Date());

  const renderSelect = (label: string, id: string, options: string[]) => (
    <div className="z-40">
      <div className="w-full flex flex-col flex-wrap items-center rounded-lg bg-[#BCBEFA] hover:bg-violet-400 active:bg-violet-500 font-bold pt-2">
        <div className="mb-2 block">
          <Label
            htmlFor={id}
            value={label}
            className={`${LibreBaskerville.className} text-sm w-full`}
          />
        </div>
        <Select
          multiple={label === "Dores" ? true : false}
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
  );

  const selectOptions = [
    ["Menstruação"],
    ["Temp. Corporal"],
    ["Disposição"],
    ["Sentimentos"],
    ["Sono"],
    ["Dores"],
  ];

  const selectValues = [
    ["Ausente", "Leve", "Moderada", "Intensa"],
    ["< 36º", "> 36º < 37.5º", "> 37.5º"],
    ["Exaustão", "Cansaço", "Energia", "Muita Energia"],
    ["Alterações de Humor", "Ansiosa", "Irritável", "Tranquila"],
    ["Sem dor", "Cólica Menstrual", "Ovulação", "Dor de cabeça", "Dor Lombar"],
    ["Ausente", "Leve", "Moderada", "Intensa"],
  ];

  return (
    <main>
      <div className="flex flex-col min-h-screen items-center px-5">
        <h1 className="my-10 text-2xl w-full text-center font-bold">
          {formattedDate}
        </h1>
        <div className="relative">
          <div
            className={`${LibreBaskerville.className} grid grid-cols-2 gap-2 content-start`}
          >
            {selectOptions.map((options, index) =>
              renderSelect(options[0], `select-${index}`, selectValues[index])
            )}
          </div>

          {/* The background div */}
          <div
            className={`${BPImperialItalic.className} absolute inset-0 z-0 pointer-events-none`}
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
      </div>
    </main>
  );
};

export default Page;
