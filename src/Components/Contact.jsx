function Star({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 0c5 35 15 45 50 50-35 5-45 15-50 50-5-35-15-45-50-50 35-5 45-15 50-50z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-[#ff6846] p-5 md:p-10 rounded-3xl">
        <div className="relative border-b border-black/20 pb-6 md:pb-12">
          <span className="flex text-white gap-1 items-center text-base md:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-minus preview-icon"
            >
              <path d="M5 12h14" />
            </svg>
            let's collaborate
          </span>
          <Star className="absolute -right-10 rotate-13 -top-10 h-20 md:h-35 w-20 md:w-35 text-[#fcaa58]" />
          <span className="flex flex-col md:flex-row gap-2 md:gap-0">
            <h2 className="text-xl md:text-6xl font-serif ">
              Have a project idea that you want to realize?
            </h2>
            <a
              href="mailto:abcdhikaaa@gmail.com"
              className="self-start md:self-end flex items-center gap-1 bg-[#142621] rounded-full px-4 py-1.5 text-white hover:border hover:border-[#142621] hover:bg-[#fcaa58] hover:text-[#142621]"
            >
              Email
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send preview-icon"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </a>
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-0 md:py-4">
          <div className="flex-1 w-full">
            <span className="text-xs md:text-sm">
              <span className="md:hidden flex flex-col">
                <span>©2026 Andhika Pradana Byantara Ferdiananda.</span>
                <span>Created with good intentions.</span>
              </span>
              <span className="hidden md:inline">
                ©2026 Andhika Pradana Byantara Ferdiananda. Created with good
                intentions.
              </span>
            </span>
          </div>

          <div className="text-sm md:text-base text-[#142621] flex gap-2 md:gap-4 justify-between w-full md:w-auto pt-2 md:pt-0">
            <a href="https://www.instagram.com/abcdhikaa/" className="pb-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-[#fcaa58]">
              Instagram
            </a>
            <a href="https://linkedin.com/in/andhika-pradana-byantara-ferdiananda" className="pb-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-[#fcaa58]">
              Linkedin
            </a>
            <a href="https://github.com/abcdhikaa" className="pb-1 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-[#fcaa58]">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
