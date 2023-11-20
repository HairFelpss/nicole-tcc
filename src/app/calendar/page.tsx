"use client";
import { BPImperialItalic, LibreBaskerville } from "@/styles/fonts";
import { Datepicker } from "flowbite-react";
import { useRouter } from "next/navigation";

const CalendarPage = () => {
  const router = useRouter();

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      router.push(`/calendar/${formattedDate}`);
    }
  };

  return (
    <main className={BPImperialItalic.className}>
      <div className="flex flex-col min-h-screen items-center px-10 justify-center relative z-10">
        <Datepicker
          inline
          title="Calendário Menstrual"
          language="pt-BR"
          showClearButton={false}
          showTodayButton={false}
          onSelectedDateChanged={handleDateChange}
          className={`${LibreBaskerville.className} z-[1000] bg-[#BCBEFA] hover:bg-[#A9AAC7] active:bg-[#606294]`}
          theme={{
            root: {
              base: "relative",
            },
            popup: {
              root: {
                base: "absolute top-10 z-50 block pt-2",
                inline: "relative top-0 z-auto",
                inner: "inline-block rounded-lg bg-white p-4 shadow-lg",
              },
              header: {
                base: "",
                title: "px-2 py-3 text-center font-semibold text-gray-900",
                selectors: {
                  base: "flex justify-between mb-2",
                  button: {
                    base: "text-sm rounded-lg text-gray-900 font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                    prev: "",
                    next: "",
                    view: "",
                  },
                },
              },
              view: {
                base: "p-1",
              },
              footer: {
                base: "flex mt-2 space-x-2",
                button: {
                  base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-[#BCBEFA]",
                  today: "bg-[#BCBEFA] text-white hover:bg-[#887BB0]",
                  clear:
                    "border border-[#BCBEFA] bg-white text-gray-900 hover:bg-gray-100 ",
                },
              },
            },
            views: {
              days: {
                header: {
                  base: "grid grid-cols-7 mb-1",
                  title:
                    "dow h-6 text-center text-sm font-medium leading-6 text-gray-500",
                },
                items: {
                  base: "grid w-64 grid-cols-7",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
                    selected: "bg-[#BCBEFA] text-white hover:bg-[#887BB0]",
                    disabled: "text-gray-500",
                  },
                },
              },
              months: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
                    selected: "bg-[#BCBEFA] text-white hover:bg-[#887BB0]",
                    disabled: "text-gray-500",
                  },
                },
              },
              years: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 text-gray-900",
                    selected: "bg-[#BCBEFA] text-white hover:bg-[#887BB0]",
                    disabled: "text-gray-500",
                  },
                },
              },
              decades: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 text-gray-900",
                    selected: "bg-[#BCBEFA] text-white hover:bg-[#887BB0]",
                    disabled: "text-gray-500",
                  },
                },
              },
            },
          }}
        ></Datepicker>

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
};

export default CalendarPage;
