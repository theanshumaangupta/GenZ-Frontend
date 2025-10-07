"use client"

import { useRef } from "react"
import { useOnScreen } from "./useOnScreen"

export default function Hero() {
    const smileRef = useRef();
    const isVisible = useOnScreen(smileRef, "0px");

    return (
        <div className="md:p-[10px] w-full h-screen">
            <section
                data-nav-bg="light"
                className="hero-sec overflow-hidden text-white hero bg-center w-full h-full md:rounded-3xl relative bg-red-500 flex flex-col justify-center bg-no-repeat bg-cover items-center text-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686f6ace62e3e07623327aca_thumb-p-800.avif')",
                }}
            >
                <nav className="fixed z-1000 top-0 p-5 md:px-15 md:py-5 flex justify-between items-center w-full">
                    <div className="relative filter">
                        <h1 className="text-[25px] md:text-[35px] font-[1000] font-sans z-10 relative">
                            work
                            <img
                                src="assets/poster-crack.svg"
                                className="-z-10 invert-80 -top-5 -left-5 w-[100%] max-w-[10rem] absolute"
                                alt=""
                            />
                        </h1>
                    </div>
                    <img src="assets/logo.svg" className="w-[25%] max-w-[10rem] invert-100" alt="" />
                    <img src="assets/wp-logo.svg" className="w-[8%] max-w-[3rem] invert-100" alt="" />
                </nav>

                <div className="hero-content top-40 relative z-10 max-w-6xl w-[90%] font-sans text-5xl font-[1000] text-center">
                    <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl">
                        <span
                            className={`scale-animation inline-block ${isVisible ? "scale-100" : "scale-0"
                                }`}
                            style={{ transitionDelay: "0s" }}
                        >
                            we make
                        </span>
                        <span className="  inline-block relative">

                            {/* Smile icon */}
                            <img
                                src="assets/blue-smile.svg"
                                ref={smileRef}
                                className={`scale-animation absolute w-20 md:w-25 -top-30 -rotate-20 md:-top-35 translate-x-[50%] ${isVisible ? "scale-100 right-[50%] md:right-[50%]" : "scale-0 right-[0%]"
                                    }`}
                                style={{ transitionDelay: `0s` }}
                                alt=""
                            />

                            {/* Words with delay */}
                            <span
                                className={`scale-animation mx-3 font-lora font-[40] italic relative inline-block ${isVisible ? "scale-100 left-0" : "scale-0 left-50 md:left-100"
                                    }`}
                                style={{ transitionDelay: "0.2s" }}
                            >
                                advertising
                            </span>&nbsp;

                            <span
                                className={`scale-animation relative inline-block ${isVisible ? "scale-100 left-0" : "scale-0 left-50 md:left-100"
                                    }`}
                                style={{ transitionDelay: "0.3s" }}
                            >
                                for
                            </span>&nbsp;

                            <span
                                className={`scale-animation relative inline-block ${isVisible ? "scale-100 left-0" : "scale-0 left-50 md:left-100"
                                    }`}
                                style={{ transitionDelay: "0.5s" }}
                            >
                                the
                            </span>&nbsp;

                            <span
                                className={`scale-animation relative inline-block ${isVisible ? "scale-100 left-0" : "scale-0 left-50 md:left-100"
                                    }`}
                                style={{ transitionDelay: "0.7s" }}
                            >
                                new
                            </span>&nbsp;

                        </span>

                        <div className="relative mt-4">
                            <img
                                src="assets/main-circle.svg"
                                className="absolute h-full w-full invert-100 inset-0"
                                alt=""
                            />
                            <h1
                                className={`text-4xl md:text-7xl scale-animation inline-block ${isVisible ? "scale-100" : "scale-0"
                                    }`}
                                style={{ transitionDelay: "1s" }}
                            >
                                mainstream
                            </h1>
                        </div>

                    </h1>
                </div>
            </section>
        </div>
    )
}
