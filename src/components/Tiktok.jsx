"use client"
import { useEffect, useRef, useState } from "react"
import { useOnScreen } from "./useOnScreen";
export default function Tiktok() {
    const boxRef2 = useRef(null);
    const [animate, setAnimate] = useState();
    const [totalLength, setTotalLength] = useState();

    const svgRef = useRef();
    const isVisible = useOnScreen(svgRef, "0px");

    useEffect(() => {
        if (boxRef2.current) {
            const scratch = document.querySelector(".scratch path");
            setTotalLength(scratch.getTotalLength());
        }
    }, [boxRef2])

    useEffect(() => {
        function handleScroll() {
            if (!boxRef2.current) return;
            const box = boxRef2.current;
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < (window.innerHeight / 4)) {
                setAnimate(true);
            }
            else {
                setAnimate(false);
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className="w-full bg-primary py-20 overflow-x-hidden" data-nav-bg="dark" ref={boxRef2}>
            <div className=" flex flex-col relative m-auto max-w-fit justify-center items-center text-center ">
                <h1 className="text-black text-3xl md:text-4xl lg:text-[7rem] lg:leading-[7rem] font-[1000] font-sans w-[80%] lg:w-[100%] max-w-4xl">
                    an agency built for the future.
                </h1>
                <h1 className="font-lora text-3xl md:text-4xl lg:text-[7rem] italic font-light max-w-5xl">from TV to TikTok</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 634 28"
                    fill="none"
                    data-scroll-animation-target="draw"
                    className="scratch w-[80%] lg:max-w-5xl"
                >
                    <path
                        className="stroke-current text"
                        d="M2 26C41.0237 23.1556 79.9927 19.9419 118.634 15.5521C169.106 9.98633 227.314 2.42393 275.206 2C280.46 2.57436 264.768 4.99488 262.462 5.55556C257.837 6.43078 252.529 7.47009 247.317 8.59146C239.594 10.3556 212.496 15.8393 226.932 19.8051C239.594 22.6359 263.663 21.9521 280.978 21.3504C314.817 19.9829 349.311 16.7419 383.204 14.7863C465.931 9.5077 549.191 10.547 632 14.1436"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transformOrigin: "0px 0px",
                            strokeDashoffset: "0",
                            transition: "0.6s ease-in-out",
                            strokeDasharray: `${animate ? totalLength : 0}px, ${totalLength}px`,
                        }}
                        data-svg-origin="2 2"

                    />
                </svg>

                <img src="assets/pencil-hand-heart.svg" ref={svgRef} className={`scale-animation absolute w-20 bottom-0 right-0 lg:w-40 lg:-right-20 lg:bottom-25 ${isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-40"}`} alt="" />
            </div>
            <div className="flex max-w-fit mx-auto relative -space-x-10 my-20 md:py-20 md:px-40">
                <img src="assets/loose-water-1.svg" className="h-full absolute left-0 top-0" alt="" />
                <img className="relative top-0 -rotate-10 w-[8rem] md:w-[15rem] rounded-2xl" src="assets/img/tiktok (1).webp" alt="" />
                <img className="relative top-10 rotate-10 w-[8rem] md:w-[15rem] rounded-2xl" src="assets/img/tiktok (2).webp" alt="" />
                <img className="relative top-0 -rotate-10 w-[8rem] md:w-[15rem] rounded-2xl" src="assets/img/tiktok (3).webp" alt="" />
                <img className="relative hidden lg:block top-10 rotate-10 w-[8rem] md:w-[15rem] rounded-2xl" src="assets/img/tiktok (4).avif" alt="" />
            </div>
            <p className=" max-w-xl w-[80%] mx-auto text-center text-xl md:text-2xl ">
                To reach the new generation you need to know where they are. We are a true 360° agency, working the whole spectrum from TikTok content to TVC and from influencer collabs to out of home spectaculars.
            </p>
        </div>
    )
}