function Star({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 0c5 35 15 45 50 50-35 5-45 15-50 50-5-35-15-45-50-50 35-5 45-15 50-50z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-1 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10 md:mb-0">
        <div className="order-2 md:order-1 flex flex-col justify-center gap-2 md:gap-5">
          <span className="flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9a7a23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-minus preview-icon"
            >
              <path d="M5 12h14" />
            </svg>
            <h1 className="text-sm md:text-base">
              Website Developer, Data, & Design Enthusiast
            </h1>
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-center md:text-left">
            Andhika Pradana Byantara Ferdiananda
          </h2>

          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-3xl font-serif text-[#ff6846] text-center md:text-left">
              Every steps, proving yourself.
            </span>
            <p className="text-center md:text-left text-sm md:text-base">
              Hello! I’m Dhika from Nganjuk, with a keen interest in exploring
              the fields of web development, data, and design. I believe that
              every step along the way is a valuable experience.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="overflow-hidden aspect-square md:aspect-auto rounded-full md:rounded-b-4xl md:rounded-t-full ml-0 md:ml-10 my-5">
              <img
                src="/fotoku.jpg"
                alt="foto"
                className="w-full h-full md:h-160 object-cover rounded-b-4xl "
              />
            </div>
            <span className="absolute left-3 top-8 -rotate-6 rounded-full bg-[#f5d547] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2b2416] shadow-sm md:left-8">
              AVAILABLE FOR PROJECTS
            </span>
            <Star className="absolute bottom-1 md:-bottom-5 right-10 md:-right-5 h-16 w-16 text-[#ff6846]" />
          </div>
        </div>
      </div>
    </div>
  );
}
