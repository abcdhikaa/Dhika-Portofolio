import { useState } from "react";
import { X, ChevronsRight, ChevronsLeft, CirclePlay } from "lucide-react";

export default function DetailPorto({ data, onClose }) {
  const [i, setI] = useState(0);
  const total = data.image.length;
  const go = (n) => setI((n + total) % total);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 md:p-10 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md md:max-w-3xl bg-white p-4 md:p-6 rounded-2xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="z-50 absolute rounded-full p-1 bg-red-400 text-white right-3 md:right-4 top-3 md:top-4"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative w-full rounded-2xl aspect-video overflow-hidden shadow-xl">
          <img src={data.image[i]} className="object-cover h-full w-full" />
          {total > 1 && (
            <>
              <button
                onClick={() => go(i - 1)}
                aria-label="Sebelumnya"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-1 md:px-3 py-1 text-white"
              >
                <ChevronsLeft />
              </button>
              <button
                onClick={() => go(i + 1)}
                aria-label="Berikutnya"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-1 md:px-3 py-1 text-white"
              >
                <ChevronsRight />
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-0 md:gap-1">
          <span className="text-[#ff5a2b] text-[11px] md:text-sm">
            {data.category}
          </span>
          <h2 className="font-semibold text-lg md:text-2xl">{data.title}</h2>
          <p className="text-xs md:text-sm">{data.desc}</p>
          <div className="flex flex-wrap w-full gap-2 mt-2">
            {data.tag.map((i) => (
              <span
                key={i}
                className="rounded-lg  bg-[#142621] text-white text-[10px] px-2 py-1"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {data.link && (
            <a
              href={data.link}
              className=" w-fit py-1 border-b-2 border-transparent flex items-center gap-1 text-[#142621] transition-colors duration-300 ease-in-out hover:border-[#ff5a2b]"
            >
              <img
                src="GitHub_Invertocat_Black.png"
                alt="github"
                className="h-4 md:h-5 w-4 md:w-5"
              />
              <p className="text-sm md:text-base">GitHub</p>
            </a>
          )}
          {data.demo && (
            <a
              href={data.demo}
              className=" w-fit py-1 border-b-2 border-transparent flex items-center gap-1 text-[#142621] transition-colors duration-300 ease-in-out hover:border-[#ff5a2b]"
            >
              <CirclePlay className="h-4 md:h-5 w-4 md:w-5"/>
              <p className="text-sm md:text-base">Demo</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
