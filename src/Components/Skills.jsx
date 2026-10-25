import { skills } from "../Data/data";
import { useState } from "react";

export default function Skills() {
  const [dataSkills, setDataSkills] = useState(skills);

  return (
    <div className=" bg-[#142621]">
      <div className=" max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="flex flex-col items-center mb-8 md:mb-15">
          <span className="text-white text-xl">SKILLS</span>
          <p className="text-[#ff5a2b] text-sm md:text-lg">
            some of the things I am currently learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dataSkills.map((s) => (
            <div key={s.id} className="rounded-xl bg-[#f4f0e8] border border-[#9e978a] p-4 md:p-6 flex flex-col gap-3">
              <span className="font-semibold  text-base md:text-lg text-[#ff6846]">{s.title}</span>
              <div className="flex flex-wrap w-full gap-2">
                {s.content.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg  bg-[#142621] text-xs md:text-sm text-white px-2 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
