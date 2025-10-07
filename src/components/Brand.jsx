"use client"

import { useRef } from "react"
import { useOnScreen } from "./useOnScreen"
import useFillAnimation from "./fill";

export default function Brand() {

  // for line animation 
  const sectionRef = useRef(null);
  const pathStyle = useFillAnimation(sectionRef, { duration: "0.5s", triggerOffset: 2 }).pathStyle;
  const doubleUnderline = useFillAnimation(sectionRef, { duration: "0.8s", triggerOffset: 100 }).pathStyle;

  const textDivRef = useRef(null);
  const wunderkinder = useFillAnimation(textDivRef, { duration: "0.5s", triggerOffset: 1.5 }).pathStyle;
  const young = useFillAnimation(textDivRef, { duration: "0.5s", triggerOffset: 1 }).pathStyle;
  // for scale animation on brand images of people
  const svgRef = useRef();
  const svgRef1 = useRef();
  const svgRef2 = useRef();
  const svgRef3 = useRef();
  const isVisible = useOnScreen(svgRef, "0px");
  const isVisible1 = useOnScreen(svgRef1, "0px");
  const isVisible2 = useOnScreen(svgRef2, "0px");
  const isVisible3 = useOnScreen(svgRef3, "0px");
  return (
    <div data-nav-bg="light" className="bg-black md:pb-20 md:pt-40 flex-col flex gap-10 items-center justify-center">
      <div className="w-full flex flex-col items-center py-16 overflow-x-hidden">
        {/* CARD BUNDLE */}
        <div ref={sectionRef} className="relative flex justify-center items-end w-full max-w-[80rem] px-2 sm:px-5">

          {/* Left decorative SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 80 109"
            fill="none"
            data-scroll-animation="draw"
            className="scratch w-14 sm:w-30 invert absolute -left-4 sm:-left-10 top-10 opacity-70 "
          >
            <path
              d="M11.1056 107.429C11.1056 107.429 41.3921 75.9563 1.85536 45.3846C39.6893 67.1983 37.5729 21.5813 34.6647 13.925C40.0573 22.0799 72.2872 32.0642 78.2717 2.44878"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={pathStyle}
              data-svg-origin="1.8553600311279297 2.448780059814453"
            ></path>
          </svg>


          {/* Main stacked cards */}
          <div

            className="flex justify-center items-end -space-x-[6rem] sm:-space-x-[10rem] md:-space-x-[12rem] lg:-space-x-[15rem] scale-[0.85] sm:scale-[1]"
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

          <button className="mt-8 text-xl sm:text-2xl font-semibold text-white border-white hover:opacity-80 transition">
            view project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60%"
              viewBox="0 0 169 10"
              fill="none"
              className="m-auto"
            >
              <path
                d="M1 6.5661C56.3941 3.06082 112.187 1.20095 168 0.999878"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                style={doubleUnderline}
              ></path>
              <path
                d="M32.1313 8.63371C68.2147 6.92799 104.462 6.13378 140.695 6.25107"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                style={doubleUnderline}
              ></path>
            </svg>

          </button>
        </div>
      </div>


      <div ref={textDivRef} className=" md:mt-40">
        <h1 className="text-2xl sm:text-4xl  md:text-6xl lg:text-7xl w-[80%] mx-auto font-[1000] text-white text-center max-w-[70rem] md:[letter-spacing:-0.2rem]">
          we are a
          {/* for young */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            {/* <img src="assets/outline-circle.svg" className="absolute bottom-0 left-0  w-full" alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 201 86"
              fill="none"
              data-scroll-animation="draw"
              className="absolute bottom-0 left-0  w-full invert-100"
            >
              <path
                d="M94.2928 1.00027C123.974 0.963816 154.146 4.60865 181.273 16.5546C189.974 20.3907 199.369 26.6143 199.971 36.0452C200.401 42.8702 195.929 49.03 190.946 53.75C180.208 63.9191 166.386 70.3066 152.306 74.9538C125.258 83.8745 96.2711 86.9179 67.9394 83.8289C50.4851 81.9245 33.011 77.6054 17.9651 68.6209C9.40333 63.509 1.07316 55.618 1.00038 45.7041C0.960683 39.7721 4.01088 34.1226 8.27852 29.9767C12.5461 25.8307 17.9452 23.015 23.4369 20.6915C48.2553 10.2126 75.8527 8.8093 102.795 7.54272"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={young}
                data-svg-origin="0.9999970197677612 0.9999998211860657"
              />
            </svg>

            &nbsp;
            <h1 className="invert-100 inline ">
              young,
            </h1>
            &nbsp;
          </span>
          future-proof team of 49 digitally native
          {/* for wunderkinder */}
          <span className="relative  font-lora font-[40] italic invert-100 ">
            {/* <img src="assets/straight-scratch.svg" className="absolute -bottom-6 md:-bottom-10  left-0 h-full" alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 403 17"
              fill="none"
              data-scroll-animation="draw"
              className="scratch absolute -bottom-6 md:-bottom-10  left-0 h-full invert-100"
            >
              <path
                d="M1 16C25.8389 14.2222 50.643 12.2137 75.2387 9.47009C107.364 5.99145 144.414 1.26496 174.898 1C178.242 1.35897 168.254 2.8718 166.786 3.22223C163.842 3.76924 160.464 4.41881 157.146 5.11966C152.23 6.22223 134.982 9.64957 144.171 12.1282C152.23 13.8974 167.551 13.4701 178.572 13.094C200.11 12.2393 222.066 10.2137 243.639 8.99146C296.296 5.69231 349.291 6.34188 402 8.58975"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={wunderkinder}
                data-svg-origin="1 1"
              />
            </svg>

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
        <div className="min-h-[340vh] md:min-h-[300vh] max-w-[80rem] relative w-full p-40">

          <div className="people-div overflow-hidden absolute left-[5%] md:left-[15%] top-[0] md:top-[0%]  rounded-lg             w-[70%] md:w-[50%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (1).webp" className="w-full" alt="" />
            <img src="assets/gv.svg" ref={svgRef} className={`relative z-50 w-30 md:w-40 bottom-10 scale-animation  ${isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-40"}`} alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[0%] md:left-[0%]   top-[45rem] md:top-[18%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (2).webp" className="w-full" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[0%]               top-[20rem] md:top-[9%] rounded-lg         w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (3).webp" className="w-full" alt="" />
            <img src="assets/fist-fight.svg" ref={svgRef1} className={`relative z-50 w-30 md:w-40 bottom-20 scale-animation  ${isVisible1 ? "scale-100 rotate-0" : "scale-0 -rotate-0"}`} style={{ transitionDelay: "0.5s" }} alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[15%] md:left-[45%] top-[60rem] md:top-[35%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-[18rem] md:h-auto ">
            <img src="assets/img/people (4).webp" className="w-full" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[5%] md:right-[0%] top-[75rem] md:top-[48%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (5).webp" className="w-full" alt="" />
            <img src="assets/loose-hi.svg" ref={svgRef2} className={`relative z-50 w-20 md:w-30 bottom-20 left-5 scale-animation  ${isVisible2 ? "scale-100 rotate-0" : "scale-0 -rotate-0"}`} style={{ transitionDelay: "0.2s" }} alt="" />
          </div>
          <div className="people-div overflow-hidden absolute left-[0%] md:left-[8%]  top-[100rem] md:top-[55%] rounded-lg        w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto">
            <img src="assets/img/people (6).webp" className="w-full z-10 relative" alt="" />
          </div>
          <div className="people-div overflow-hidden absolute right-[10%] md:right-[35%] top-[115rem] md:top-[80%] rounded-lg       w-[70%] md:w-[40%]     max-w-[20rem]      object-left-top h-auto ">
            <img src="assets/img/people (7).webp" className="w-full" alt="" />
            <img src="assets/lets-go.svg" ref={svgRef3} className={`relative z-0 w-40 md:w-50 bottom-20 left-5 scale-animation  ${isVisible3 ? "scale-100 rotate-0" : "scale-0 -rotate-0"}`} style={{ transitionDelay: "0.5s" }} alt="" />

          </div>

        </div>
      </div>
    </div>
  )
}