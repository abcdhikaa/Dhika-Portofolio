import { useState, useEffect } from "react";
import { Menu, X, MoveUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = ["Skills", "Project", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-7xl mx-auto px-4 py-3 md:py-4 rounded-full transition-colors duration-300 ${
          isScrolled ? "bg-[#142621] shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="relative flex justify-between items-center">
          <a href="#hero" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-astroid preview-icon text-[#ff5a2b]"
            >
              <path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203" />
            </svg>
            <span
              className={`text-sm md:text-base ${isScrolled ? "text-white" : ""}`}
            >
              DHIKA
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-dot preview-icon text-[#ff5a2b]"
            >
              <circle cx="12" cy="12" r="1" />
            </svg>
          </a>
          <ul
            className={`hidden md:flex gap-10 text-sm ${
              isScrolled ? "text-white" : " text-gray-700"
            }`}
          >
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-[#ff5a2b]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:abcdhikaaa@gmail.com"
            className={`hidden md:flex items-center gap-2 rounded-2xl text-sm  ${
              isScrolled
                ? "border border-white py-2 px-4 hover:bg-[#ff5a2b] hover:border-[#ff5a2b] text-white"
                : "border py-2 px-4 hover:bg-[#ff5a2b] hover:border-[#ff5a2b] hover:text-white"
            }`}
          >
            Let's talk
            <MoveUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden rounded-lg ${
              isScrolled ? "border border-white p-1 text-white" : "border p-1.5"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          {open && (
            <div
              className={`absolute -inset-x-4 top-full mt-4 h-fit rounded-3xl ${
                isScrolled
                  ? "shadow-xl text-white bg-[#142621]"
                  : "shadow-xl bg-[#f4f0e8]"
              }`}
            >
              <ul className="md:hidden flex flex-col p-4 gap-4">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      onClick={() => setOpen(false)}
                      href={`#${l.toLowerCase()}`}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
