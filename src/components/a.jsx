export default function Brand() {
  return (
    <div data-nav-bg="light" className="bg-black pb-20 pt-40 flex-col flex gap-10 items-center justify-center">
      <div>
        <div className="flex -space-x-[15rem] items-baseline relative max-w-80 -translate-x-[40%] justify-center p-5">
          <img src="assets/m-type.svg" className="w-25 invert-100 z-60 absolute -left-40" alt="" />
          <img src="assets/img/brand (1).webp" className="-rotate-20 rounded-2xl border-5  border-white w-[20rem]" />
          <img src="assets/img/brand (2).webp" className="-rotate-10 rounded-2xl border-5  border-white w-[20rem] z-20" />
          <img src="assets/img/brand (3).webp" className="rotate-0 rounded-2xl border-5  border-white w-[22rem] z-30" />
          <img src="assets/img/brand (4).webp" className="rotate-10 rounded-2xl border-5 border-white w-[20rem] z-20" />
          <img src="assets/img/brand (5).webp" className="rotate-20 rounded-2xl border-5 border-white w-[20rem]" />
          <img src="assets/pencil-camera.svg" className="w-25 invert-100 z-60 absolute bottom-20 left-[50%]" alt="" />
        </div>
        <div className="flex flex-col m-10">
          <h1 className="text-4xl font-[1000] text-white text-center">feestje bouwe?</h1>
          <h1 className="text-4xl font-[1000] text-white text-center">app douwe</h1>
          <h1 className="text-2xl font-[500] text-white text-center mt-10">view project</h1>
          <img src="assets/straight-scratch.svg" className="invert-100" alt="" />

        </div>
      </div>
      <div className="mt-40">
        <h1 className="text-7xl font-[1000] text-white text-center max-w-[70rem] [letter-spacing:-0.2rem]">
          we are a
          {/* for young */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            <img src="assets/outline-circle.svg" className="absolute bottom-0 left-0 w-full" alt="" />
            &nbsp;
            <h1 className="invert-100 inline ">
              young,
            </h1>
            &nbsp;
          </span>
          future-proof team of 49 digitally native
          {/* for wunderkinder */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            <img src="assets/straight-scratch.svg" className="absolute -bottom-10 left-0 h-full" alt="" />
            &nbsp;
            <h1 className="invert-100 inline ">
              wunderkinder,
            </h1>
            &nbsp;
          </span>

          . not to brag!
        </h1>
      </div>
      <div className="w-full flex items-center justify-center py-40">
        <div className="min-h-[200vh] max-w-[80rem] relative w-full p-40">
        <div className="people-div overflow-hidden absolute left-[15%] top-[0%]  rounded-lg w-[20rem] max-w-[33%] object-left-top h-auto">
          <img src="assets/img/people (1).webp" className="w-full" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute left-[0%] top-[18%] rounded-lg w-[20rem] object-left-top h-[20rem]">
          <img src="assets/img/people (2).webp" className="w-full" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute right-[0%] top-[9%] rounded-lg w-[20rem] object-left-top h-[20rem]">
          <img src="assets/img/people (3).webp" className="w-fulls" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute left-[45%] top-[35%] rounded-lg w-[20rem] object-left-top h-[20rem]">
          <img src="assets/img/people (4).webp" className="w-full" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute left-[65%] top-[48%] rounded-lg w-[20rem] object-left-top h-[20rem]">
          <img src="assets/img/people (5).webp" className="w-full" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute left-[8%] top-[55%] rounded-lg w-[20rem] object-left-top h-[20rem]">
          <img src="assets/img/people (6).webp" className="w-full" alt="" />
        </div>
        <div className="people-div overflow-hidden absolute left-[54%] top-[80%] rounded-lg w-[20rem] object-left-top h-auto">
          <img src="assets/img/people (7).webp" className="w-full" alt="" />
        </div>

        </div>
      </div>
    </div>
  )
}