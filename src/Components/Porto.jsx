import { useState } from "react";
import { project } from "../Data/data";
import DetailPorto from "./DetailPorto";
import { Info } from "lucide-react";

export default function Porto() {
  const [capsproject, setCapsproject] = useState(project);
  const [viewDetail, setViewDetail] = useState(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-20">
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">CAPSTONE PROJECT</h1>
            <p className="text-center text-sm md:text-lg text-[#ff6846]">
              projects that have been worked on and are currently underway
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {capsproject.map((c) => (
              <div
                key={c.id}
                className="h-full mt-auto shadow-xl bg-white flex flex-col border border-[#142621] rounded-2xl p-1 md:p-4 gap-2 md:gap-4"
              >
                <div className="w-full border border-gray-300 aspect-square md:aspect-video overflow-hidden rounded-xl">
                  <img
                    src={c.image[0]}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between px-2 md:px-0 pb-2 md:pb-0">
                  <div className="flex flex-col gap-0 md:gap-1">
                    <span className="text-[#ff5a2b] text-[10px] md:text-sm">
                      {c.category}
                    </span>
                    <h2 className="font-semibold text-sm md:text-xl line-clamp-2">
                      {c.title}
                    </h2>
                    <p className="text-[11px] md:text-sm line-clamp-2 ">
                      {c.desc}
                    </p>
                    <div className="hidden md:flex flex-wrap w-full gap-1 md:gap-2 mt-2">
                      {c.tag.map((i) => (
                        <span
                          key={i}
                          className="rounded-lg  bg-[#142621] text-white text-[10px] md:text-xs px-1.5 md:px-2 py-1"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-start md:justify-between mt-2 md:mt-3 items-start md:items-center gap-1 md:gap-4">
                    {c.link && (
                      <a
                        href={c.link}
                        className="pb-0 md:pb-1 border-b-2 border-transparent hidden md:flex items-center gap-1 text-[#142621] transition-colors duration-300 ease-in-out hover:border-[#ff5a2b]"
                      >
                        <img
                          src="GitHub_Invertocat_Black.png"
                          alt="github"
                          className="h-4 md:h-5 w-4 md:w-5 group-hover:hidden"
                        />
                        <img
                          src="GitHub_Invertocat_White.png"
                          alt="github"
                          className="h-4 md:h-5 w-4 md:w-5 hidden group-hover:block"
                        />
                        <p className="text-xs">GitHub</p>
                      </a>
                    )}

                    <button
                      onClick={() => setViewDetail(c)}
                      className="ml-0 md:ml-auto pb-0 md:pb-1 border-b-2 border-transparent flex items-center gap-1 text-[#142621] transition-colors duration-300 ease-in-out hover:border-[#ff5a2b]"
                    >
                      <Info className="h-4 md:h-5 w-4 md:w-5" />
                      <p className="text-xs">View detail</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {viewDetail && (
        <DetailPorto data={viewDetail} onClose={() => setViewDetail(false)} />
      )}
    </>
  );
}
