"use client"

import { useRef } from "react"
import { useOnScreen } from "./useOnScreen"
import useFillAnimation from "./fill";

export default function CallUs() {
  // for need animation
  const needRef = useRef();
  const isVisible = useOnScreen(needRef, "0px");
  // for heart animation
  const heaartRef = useRef();
  const isVisible2 = useOnScreen(heaartRef, "0px");
  // For arrow line drawing
  const boxRef2 = useRef(null);
  const { pathStyle } = useFillAnimation(boxRef2, { duration: "1.2s", triggerOffset: 10 });


  return (
    <div data-nav-bg="dark" className="bg-primary w-full min-h-screen ">
      {/* Call us if u need */}
      <h1 className=" text-3xl md:text-7xl font-[1000] text-black text-center max-w-[70rem] mx-auto py-20 lg:pt-20 lg:pb-0">
        call us if you
        <div className="relative inline font-lora font-[40] italic  ">
          <img src="assets/double-underline.svg" className={`absolute -bottom-10 left-0 h-full scale-animation ${isVisible ? "scale-100 " : "scale-0 "}`} style={{ transitionDelay: "0.9s" }} alt="" />
          &nbsp;
          <div ref={needRef} className={`inline-block scale-animation ${isVisible ? "scale-100 " : "scale-0 "}`} style={{ transitionDelay: "0.5s" }}>
            need:
          </div>
          &nbsp;
        </div>
      </h1>
      {/* 5 Cards Section */}
      <div className="flex w-[80%] lg:w-fit flex-col relative flex-wrap md:flex-row items-center justify-center mx-auto gap-10 md:-space-x-10 lg:my-20 md:py-20 lg:px-10 xl:px-10">
        <div className="cards  rotate-10">
          <div className=" bg-[#2d7864] sticky top-40 text-white md:relative md:top-0   min-w-[15rem] min-h-[20rem] md:w-[17rem] lg:w-[15rem] lg:h-[20rem] md:h-[40vw] flex flex-col justify-center items-start gap-4 p-5 rounded-2xl " alt="" >
            <img src="assets/pencil-camera.svg" className="absolute left-[50%] translate-[-50%] top-0 w-30" alt="" />
            <h1 className="text-4xl font-[1000]">brand</h1>
            <div className="h-1 w-full bg-black"></div>
            <ul className="flex flex-col gap-2 text-xl">
              <li>Brand Strategy</li>
              <li>360 creativity</li>
              <li>Art Direction</li>
              <li>Copywriting</li>
              <li>Editing</li>
            </ul>

          </div>
        </div>
        <div className="cards -rotate-10">
          <div className=" bg-[#82a0ff] sticky top-40 text-black md:relative md:top-10  min-w-[15rem] min-h-[20rem] md:w-[17rem] lg:w-[15rem] lg:h-[20rem] md:h-[40vw] flex flex-col justify-center items-start gap-4 p-5 rounded-2xl">
            <img src="assets/phone-in-hand.svg" className="absolute left-[50%] translate-[-50%] top-0 w-30" alt="" />
            <h1 className="text-4xl font-[1000]">social</h1>
            <div className="h-1 w-full bg-black"></div>
            <ul className="flex flex-col gap-2 text-xl">
              <li>Social Media Strategy</li>
              <li>Social Media Creative</li>
              <li>TikTok / Shoots</li>
              <li>Campaigns</li>

            </ul>
          </div>
        </div>

        <div className="cards rotate-10">
          <div className=" bg-[#f5693c] sticky top-40 text-white md:relative md:top-0    min-w-[15rem] min-h-[20rem] md:w-[17rem] lg:w-[15rem] lg:h-[20rem] md:h-[40vw] flex  flex-col justify-center items-start gap-4 p-5 rounded-2xl " alt="" >
            <img src="assets/smile-blue.svg" className="absolute left-[50%] translate-[-50%] top-0 w-30" alt="" />
            <h1 className="text-4xl font-[1000]">activation</h1>
            <div className="h-1 w-full bg-black"></div>
            <ul className="flex flex-col gap-2 text-xl">
              <li>Activation Strategy</li>
              <li>Event Planning</li>
              <li>Art Direction</li>
              <li>Production</li>
            </ul>

          </div>
        </div>
        <div className="cards -rotate-10">
          <div className=" bg-[#a0325a] sticky top-40 text-white md:relative md:top-10  min-w-[15rem] min-h-[20rem] md:w-[17rem] lg:w-[15rem] lg:h-[20rem] md:h-[40vw] flex flex-col justify-center items-start gap-4 p-5 rounded-2xl " alt="" >
            <img src="assets/wrist-watch.svg" className="absolute left-[50%] translate-[-50%] top-0 w-30" alt="" />
            <h1 className="text-4xl font-[1000]">production</h1>
            <div className="h-1 w-full bg-black"></div>
            <ul className="flex flex-col gap-2 text-xl">
              <li>Campaign Video</li>
              <li>Branded Content</li>
              <li>Social Content</li>
              <li>Marketing Materials</li>
            </ul>

          </div>

        </div>
        <div className="cards rotate-0">
          <div className=" bg-[#f0befa] sticky top-40 text-black md:relative md:top-0  min-w-[15rem] min-h-[20rem] md:w-[17rem] lg:w-[15rem] lg:h-[20rem] md:h-[40vw] flex flex-col justify-center items-start gap-4 p-5 rounded-2xl " alt="" >
            <img src="assets/heart.svg" className="absolute left-[50%] translate-[-50%] top-0 w-30" alt="" />
            <h1 className="text-4xl font-[1000]">partners</h1>
            <div className="h-1 w-full bg-black"></div>
            <ul className="flex flex-col gap-2 text-xl">
              <li>Brand Strategy</li>
              <li>360 creativity</li>
              <li>Art Direction</li>
              <li>Copywriting</li>
              <li>Editing</li>
            </ul>

          </div>
        </div>
      </div>
      {/* Proud to have worked section */}
      <div ref={boxRef2} className="w-full  min-h-screen lg:px-10 py-10 flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-10 overflow-x-hidden ">
        <div className="w-full lg:w-[50%] h-full lg:h-screen py-40 lg:py-0 px-10 flex justify-center items-center relative">
          <img src="assets/loose-water.svg" className="absolute w-[80%] max-w-[20rem] left-0 top-0 lg:top-20" alt="" />
          <img src="assets/heart.svg" ref={heaartRef} className={`z-50 absolute w-20 lg:w-40 left-[50] md:left-[30%] lg:left-[40%] bottom-25 lg:bottom-20 scale-animation ${isVisible2 ? "scale-100" : "scale-0"}`} style={{ transitionDelay: "0.2s" }} alt="" />

          {/* Double parabola with arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 386 127"
            fill="none"
            data-scroll-animation-target="draw"
            className="scratch lg:-scale-x-100 clients__arrow-svg absolute w-40 lg:w-80 left-[55%] bottom-10 lg:bottom-20 rotate-50 lg:-rotate-180"
          >
            <path
              d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L356.5 105.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={pathStyle}
              data-svg-origin="2 2"

            ></path>
            <path
              d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118L384 97"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={pathStyle}
              data-svg-origin="2 2"
            ></path>
          </svg>

          <h1 className="text-4xl md:text-7xl z-50 font-[1000] text-black text-center w-[90%] max-w-[70rem] mx-auto">
            proud to have worked
            <span className="relative  font-lora font-[40] italic  ">
              <img src="assets/double-underline.svg" className="absolute -bottom-10 left-0 h-full" alt="" />
              &nbsp;
              <h1 className=" inline ">
                with:
              </h1>
              &nbsp;
            </span>
          </h1>
        </div>

        <div className="w-full lg:w-fit z-50 flex flex-col lg:flex-row h-full gap-4">
          {/* === Left Bar (STANDARD Direction: Left/Up) === */}
          <div className="left-bar h-[20vh] lg:h-screen w-full lg:w-60 overflow-hidden">
            <div className="flex flex-row lg:flex-col gap-4 w-max lg:w-full h-full animate-scroll-x lg:animate-scroll-y"> {/* Applied standard animations */}

              {/* Set A + Set B (8 divs total) */}
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#A0325A] flex justify-center items-center rounded-lg"> <img src="assets/zero-x.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#2D7864] flex justify-center items-center rounded-lg"> <img src="assets/getir.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#F5693C] flex justify-center items-center rounded-lg"> <img src="assets/ace-tate.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#82A0FF] flex justify-center items-center rounded-lg"> <img src="assets/kfc.svg" className="w-full" alt="" /> </div>
              {/* Duplicates */}
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#A0325A] flex justify-center items-center rounded-lg"> <img src="assets/zero-x.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#2D7864] flex justify-center items-center rounded-lg"> <img src="assets/getir.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#F5693C] flex justify-center items-center rounded-lg"> <img src="assets/ace-tate.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#82A0FF] flex justify-center items-center rounded-lg"> <img src="assets/kfc.svg" className="w-full" alt="" /> </div>

            </div>
          </div>

          {/* === Right Bar (REVERSE Direction: Right/Down) === */}
          <div className="right-bar h-[20vh] lg:h-screen w-full lg:w-60 overflow-hidden">
            <div className="flex flex-row lg:flex-col gap-4  w-max lg:w-full h-full  animate-scroll-x-reverse lg:animate-scroll-y-reverse"> {/* Applied reverse animations */}
              {/* Set A + Set B (8 divs total) - Content is identical to the left bar */}
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#82A0FF] flex justify-center items-center rounded-lg"> <img src="assets/anwb.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#E6FAB9] flex justify-center items-center rounded-lg"> <img src="assets/hema.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#F0BEFA] flex justify-center items-center rounded-lg"> <img src="assets/swapfiets.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#A0325A] flex justify-center items-center rounded-lg"> <img src="assets/netflix.svg" className="w-full" alt="" /> </div>
              {/* Duplicates */}
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#82A0FF] flex justify-center items-center rounded-lg"> <img src="assets/anwb.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#E6FAB9] flex justify-center items-center rounded-lg"> <img src="assets/hema.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#F0BEFA] flex justify-center items-center rounded-lg"> <img src="assets/swapfiets.svg" className="w-full" alt="" /> </div>
              <div className="slide p-10 min-w-[15rem] md:w-full aspect-square bg-[#A0325A] flex justify-center items-center rounded-lg"> <img src="assets/netflix.svg" className="w-full" alt="" /> </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}