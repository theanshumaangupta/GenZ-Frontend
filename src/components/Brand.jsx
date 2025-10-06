export default function Brand() {
  return (
    <div data-nav-bg="light" className="bg-black md:pb-20 md:pt-40 flex-col flex gap-10 items-center justify-center">
      <div className="w-full flex flex-col items-center py-16 overflow-x-hidden">
        {/* CARD BUNDLE */}
        <div className="relative flex justify-center items-end w-full max-w-[80rem] px-2 sm:px-5">
          {/* Left decorative SVG */}
          <img
            src="assets/m-type.svg"
            alt=""
            className="w-14 sm:w-20 invert absolute -left-4 sm:-left-10 top-10 opacity-70"
          />

          {/* Main stacked cards */}
          <div
            className="
        flex justify-center items-end
        -space-x-[6rem] sm:-space-x-[10rem] md:-space-x-[12rem] lg:-space-x-[15rem]
        scale-[0.85] sm:scale-[1]
      "
          >
            <img
              src="assets/img/brand (1).webp"
              className="-rotate-15 rounded-2xl border-[5px] border-white w-[8rem] sm:w-[13rem] md:w-[18rem] shadow-lg"
            />
            <img
              src="assets/img/brand (2).webp"
              className="-rotate-7 rounded-2xl border-[5px] border-white w-[8rem] sm:w-[13rem] md:w-[18rem] shadow-lg z-10"
            />
            <img
              src="assets/img/brand (3).webp"
              className="rotate-0 rounded-2xl border-[5px] border-white w-[9rem] sm:w-[15rem] md:w-[20rem] shadow-xl z-20"
            />
            <img
              src="assets/img/brand (4).webp"
              className="rotate-7 rounded-2xl border-[5px] border-white w-[8rem] sm:w-[13rem] md:w-[18rem] shadow-lg z-10"
            />
            <img
              src="assets/img/brand (5).webp"
              className="rotate-15 rounded-2xl border-[5px] border-white w-[8rem] sm:w-[13rem] md:w-[18rem] shadow-md"
            />
          </div>

          {/* Right decorative SVG */}
          <img
            src="assets/pencil-camera.svg"
            alt=""
            className="w-14 sm:w-20 invert absolute bottom-0 right-[35%] sm:right-[40%] opacity-70"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center mt-12 text-center space-y-3 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            feestje bouwe?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            app douwe
          </h1>

          <button className="mt-8 text-xl sm:text-2xl font-semibold text-white border-b-2 border-white hover:opacity-80 transition">
            view project
          </button>

          <img
            src="assets/straight-scratch.svg"
            className="invert mt-6 w-32 sm:w-40 md:w-52 opacity-80"
            alt=""
          />
        </div>
      </div>


      <div className=" md:mt-40">
        <h1 className="text-2xl sm:text-4xl  md:text-6xl lg:text-7xl w-[80%] mx-auto font-[1000] text-white text-center max-w-[70rem] md:[letter-spacing:-0.2rem]">
          we are a
          {/* for young */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            <img src="assets/outline-circle.svg" className="absolute bottom-0 left-0  w-full" alt="" />
            &nbsp;
            <h1 className="invert-100 inline ">
              young,
            </h1>
            &nbsp;
          </span>
          future-proof team of 49 digitally native
          {/* for wunderkinder */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            <img src="assets/straight-scratch.svg" className="absolute -bottom-6 md:-bottom-10  left-0 h-full" alt="" />
            &nbsp;
            <h1 className="invert-100 inline ">
              wunderkinder,
            </h1>
            &nbsp;
          </span>

          . not to brag!
        </h1>
      </div>
      <div className="w-full flex items-center relative justify-center py-0 md:py-20 px-10 overflow-hidden">
        <img src="assets/water.svg" className="absolute z-0 w-[20rem] md:w-[30rem] -left-20 md:left-0  top-[95rem] md:top-[55%]" alt="" />
        <div className="min-h-[340vh] md:min-h-[200vh] max-w-[80rem] relative w-full p-40">

          <div className="people-div overflow-hidden absolute left-[5%] md:left-[15%] top-[0] md:top-[0%]  rounded-lg             w-[70%] md:w-[50%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (1).webp" className="w-full" alt="" />
            <img src="assets/gv.svg" className="relative z-50 w-30 md:w-40 bottom-10" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[0%] md:left-[0%]   top-[45rem] md:top-[18%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (2).webp" className="w-full" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[0%]               top-[20rem] md:top-[9%] rounded-lg         w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (3).webp" className="w-full" alt="" />
            <img src="assets/fist-fight.svg" className="relative z-50 w-30 md:w-40 bottom-20" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[15%] md:left-[45%] top-[60rem] md:top-[35%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-[18rem] md:h-auto ">
            <img src="assets/img/people (4).webp" className="w-full" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[5%] md:right-[0%] top-[75rem] md:top-[48%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (5).webp" className="w-full" alt="" />
            <img src="assets/loose-hi.svg" className="relative z-50 w-20 md:w-30 bottom-10" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[0%] md:left-[8%]  top-[100rem] md:top-[55%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (6).webp" className="w-full z-10 relative" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[10%] md:right-[35%] top-[115rem] md:top-[70%] rounded-lg       w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto ">
            <img src="assets/img/people (7).webp" className="w-full" alt="" />
            <img src="assets/lets-go.svg" className="relative z-0 w-40 md:w-50 bottom-20" alt="" />

          </div>

        </div>
      </div>
    </div>
  )
}