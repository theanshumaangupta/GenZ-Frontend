"use client"

import { useRef } from "react"
import { FaShareAlt, FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { useOnScreen } from "./useOnScreen"

export default function Footer() {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "0px");
    return (
        <div data-nav-bg="light" className="w-full min-h-screen bg-white md:p-4 text-white">
            <div className="w-full h-full min-h-screen md:rounded-2xl relative flex flex-col gap-10 md:gap-0 md:flex-row bg-[#4B69F0] pb-[40vh] md:pb-0 py-5 md:py-20 px-5 md:px-10 overflow-hidden">
                <img ref={ref} src="assets/logo.svg" className="absolute bottom-0 left-0 invert-100 w-full " alt="" />
                <img src="assets/smile-blue.svg" className={`absolute w-[20%] md:w-40 bottom-30  left-[15%] -rotate-20 z-50 scale-animation ${isVisible ? "scale-100":"scale-0"}`} style={{transitionDelay:"0.1s"}} alt="" />

                <img src="assets/heart.svg" className={`absolute w-[20%] md:w-40 bottom-20  left-[35%] -rotate-20 z-50 scale-animation ${isVisible ? "scale-100":"scale-0"}`} style={{transitionDelay:"0.3s"}} alt="" />
                <img src="assets/pencil-hand-heart.svg" className={`absolute w-[20%] md:w-45 bottom-10  left-[46%]  rotate-20 z-50 scale-animation ${isVisible ? "scale-100":"scale-0"}`} style={{transitionDelay:"0.1s"}} alt="" />
                <img src="assets/thumb.svg" className={ `absolute w-[20%] md:w-28 bottom-40  left-[60%] +rotate-0 z-50 scale-animation ${isVisible ? "scale-100":"scale-0"}`} style={{transitionDelay:"0.6s"}} alt="" />

                <img src="assets/pencil-camera.svg" className={`absolute w-[20%] md:w-40 bottom-50  left-[80%] -rotate-20 z-50 scale-animation ${isVisible ? "scale-100":"scale-0"}`} style={{transitionDelay:"0.2s"}} alt="" />

                <div className="p-2 flex flex-col gap-4 text-xl md:text-4xl font-[1000] flex-1 ">
                    <div className="h-10 w-40 bg-primary  text-black text-[15px] md:text-xl font-normal md:font-[600] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[0px]"> Our Services</div>
                    <h1>experienced Web Dev</h1>
                </div>
                <div className="p-2 flex flex-col gap-4 text-xl md:text-4xl font-[1000] flex-1 ">
                    <div className="h-10 w-40 bg-primary  text-black text-[15px] md:text-xl font-normal md:font-[600] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[0px]"> Our Services</div>

                    4 Years +
                    <br />
                    Experience
                    <div>
                        <h1 className="">Google Maps</h1>
                    </div>
                </div>
                <div className="p-2 flex flex-col gap-4 text-xl md:text-4xl font-[1000] flex-1 ">
                    <div className="h-10 w-40 bg-primary  text-black text-[15px] md:text-xl font-normal md:font-[600] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[0px]"> Our Services</div>

                    +918858684812
                    <br />
                    Contact Us
                    <p className="text-lg font-[400] italic">*we’re millennials and gen-z: so u can also find us on-</p>
                    <div className="flex gap-4 mt-2 text-white text-xl">
                        <a href="https://www.linkedin.com/in/findanshumaangupta/"> <FaLinkedin /></a>
                        <a href="https://wa.me/918858684812"><FaWhatsapp /></a>
                        <a href="https://github.com/theanshumaangupta"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}