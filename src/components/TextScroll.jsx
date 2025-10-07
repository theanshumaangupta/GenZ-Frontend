import { useEffect, useRef } from "react"

export default function TextScroll() {
    const boxRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // for wobble effect
        function wobble(progress, yPosn) {
            const MoveY = yPosn; // how much to move up initially
            if (progress < 0.6) {
                // -200 → 0 in 60%
                return -MoveY + (progress / 0.6) * MoveY;
            } else if (progress < 0.8) {
                // 0 → 40 in next 20%
                return ((progress - 0.6) / 0.2) * 40;
            } else {
                // 40 → 0 in last 20%
                return 40 - ((progress - 0.8) / 0.2) * 40;
            }
        }

        function handleScroll() {
            if (boxRef.current && textRef.current) {
                const rect = boxRef.current.getBoundingClientRect();


                const windowHeight = window.innerHeight;
                // total scrollable distance
                const totalScroll = rect.height - (windowHeight - 500);
                // subtracting 5000px becos of the pre start of movement
                const scrolled = Math.min(Math.max(-(rect.top - 500), 0), totalScroll);

                // creating progress/ratio type for percentage 0 to 1
                const progress = scrolled / totalScroll;

                // calculating progress to text movement
                const moveX = 80 - progress * 135; // start 80% → end -70%

                textRef.current.style.transform = `translateX(${moveX}%)`;

                // setting default values for text animations
                const default_MoveYSpeed = 2;
                const default_rotateSpeed = 4;
                const default_rotateDegree = 0;
                const default_scaleSpeed = 8;
                const default_startScale = 1;
                const default_yPosn = 0;
                const default_dir = -1

                // setting svgs
                const first_arrow = document.querySelector(".arrow-svg");
                const first_arrow_path = first_arrow.querySelector("path");
                const first_fullLength = first_arrow_path.getTotalLength();
                first_arrow_path.style.strokeDasharray = `${(progress * 2.5) * first_fullLength}px, ${first_fullLength}px`;

                const sec_arrow = document.querySelector(".second-arrow");
                const sec_arrow_path = sec_arrow.querySelector("path");
                const sec_fullLength = sec_arrow_path.getTotalLength();

                let start = 0.5
                let end = 1.0
                let res = progress > start ? ((progress - start) / (end - start)) : 0;

                sec_arrow_path.style.strokeDasharray = `${res * sec_fullLength / 2}px, ${sec_fullLength / 2}px`;

                // adding animations to each character of heading
                const chars = textRef.current.querySelectorAll(".h1-text > *");
                chars.forEach((el, idx) => {
                    // getting custom attrib data
                    const dir = parseInt(el.getAttribute("dir")) || default_dir;
                    const rotateDegree = parseInt(el.getAttribute("degrotate")) || default_rotateDegree;
                    const rotateSpeed = parseFloat(el.getAttribute("rotatespeed")) || default_rotateSpeed;
                    const startPosY = parseInt(el.getAttribute("startposny")) || default_yPosn;
                    const ySpeed = parseFloat(el.getAttribute("yspeed")) || default_MoveYSpeed;
                    const delay = parseFloat(el.getAttribute("delay")) || 0;
                    const scaleStart = parseFloat(el.getAttribute("scalestart")) || default_startScale;
                    const scalespeed = parseFloat(el.getAttribute("scalespeed")) || default_scaleSpeed;

                    //  a per-character delay (0.05 means 5% later for next char)
                    const charDelay = idx * 0.02 + delay;
                    const delayedProgress = Math.min(Math.max(progress - charDelay, 0), 1);


                    // Setting the posn nmapped with scroll progress
                    el.style.setProperty('--progress', `${dir * wobble(Math.min(delayedProgress * ySpeed, 1), startPosY)}px`);
                    // Setting the rotate nmapped with scroll progress
                    el.style.setProperty('--progressTurn', `${dir * Math.max(rotateDegree - (delayedProgress * rotateSpeed * rotateDegree), 0)}deg`);
                    // Setting the scale nmapped with scroll progress
                    el.style.setProperty('--ratio', `${Math.min(Math.max(progress * scalespeed, scaleStart), 1)}`);
                })

            }
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <section ref={boxRef} data-nav-bg="dark" className="bg-primary h-[300vh] w-full">
            <div className="sticky overflow-hidden top-0 pt-20 h-screen flex flex-col justify-evenly items-center">
                <div ref={textRef} className="moving-text h1-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378 127" fill="none" data-scroll-animation="draw" className="absolute left-[20%] -top-20 w-[20rem] team-grid__line-1-svg arrow-svg"><path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="753.06 9.08" style={{ transformOrigin: "0px 0px", strokeDashoffset: "0", strokeDasharray: "739.567px, 10000px" }} data-svg-origin="2 2"></path></svg>
                    <h1 className="h1-text whitespace-nowrap text-[10rem] font-[1000] font-sans z-10 relative">

                        <img src="assets/thumb.svg" dir="-1" degrotate="0" rotatespeed="4" startposny="300px" yspeed="5" delay="0.2" scalestart="0.1" scalespeed="2" className="char absolute w-40 inline  -top-30 left-[10%] z-50" alt="" />
                        <img src="assets/arrow-star.svg" dir="-1" degrotate="0" rotatespeed="4" startposny="300px" yspeed="5" delay="0.2" scalestart="0.1" scalespeed="2" className="char absolute w-30 inline  -bottom-20 left-[50%] z-50" alt="" />
                        <img src="assets/smartphone-hand.svg" dir="+1" degrotate="0" rotatespeed="4" startposny="40px" yspeed="5" delay="0.2" scalestart="0.1" scalespeed="2" className="char absolute w-30 inline  -top-0 left-[70%] z-50" alt="" />



                        <div dir="+1" degrotate="0" rotatespeed="4" startposny="10px" yspeed="5" delay="0" scalestart="1" className="char">w</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="200px" yspeed="5" delay="0" scalestart="1" className="char">e</div>&nbsp;

                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="0px" yspeed="10" delay="0.9" scalestart="1" className="char">w</div>
                        <div dir="+1" degrotate="10" rotatespeed="5" startposny="200px" yspeed="5" delay="0" scalestart="0.9" className="char">a</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="4" delay="0" scalestart="0.5" className="char">n</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="3" delay="0" scalestart="0.5" className="char">n</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="2" delay="0" scalestart="0.9" className="char">a</div>&nbsp;

                        <div dir="-1" degrotate="180" rotatespeed="4" startposny="40px" yspeed="4" delay="0" scalestart="0.9" className="char">b</div>
                        <div dir="-1" degrotate="145" rotatespeed="4" startposny="50px" yspeed="5" delay="0.1" scalestart="0.9" className="char">e</div>&nbsp;

                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="200px" yspeed="8" delay="0.15" scalestart="0.7" className="char">w</div>
                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="200px" yspeed="6" delay="0.19" scalestart="0.7" className="char">h</div>

                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="20px" yspeed="4" delay="0.25" scalestart="0.5" className="char">e</div>

                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="220px" yspeed="6" delay="0.2" scalestart="0.8" className="char">r</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="150px" yspeed="6" delay="0.22" scalestart="0.7" className="char">e</div>&nbsp;

                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="100px" yspeed="6" delay="0.22" scalestart="0.8" className="char">t</div>
                        <div dir="1" degrotate="0" rotatespeed="4" startposny="100px" yspeed="6" delay="0.23" scalestart="1" className="char">h</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="200px" yspeed="6" delay="0.24" scalestart="1" className="char">e</div>&nbsp;

                        <div dir="1" degrotate="-10" rotatespeed="8" startposny="150px" yspeed="6" delay="0.1" scalestart="1" className="char">p</div>
                        <div dir="1" degrotate="-10" rotatespeed="6" startposny="130px" yspeed="5" delay="0.1" scalestart="1" className="char">e</div>
                        <div dir="1" degrotate="10" rotatespeed="6" startposny="110px" yspeed="4" delay="0.1" scalestart="1" className="char">o</div>
                        <div dir="-1" degrotate="40" rotatespeed="4" startposny="200px" yspeed="6" delay="0.15" scalestart="1" className="char">p</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="180px" yspeed="5" delay="0.16" scalestart="1" className="char">l</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="160px" yspeed="4" delay="0.18" scalestart="1" className="char">e</div>&nbsp;

                        <div dir="-1" degrotate="20" rotatespeed="4" startposny="200px" yspeed="2" delay="0" scalestart="0.5" className="char">a</div>
                        <div dir="+1" degrotate="20" rotatespeed="4" startposny="50px" yspeed="2" delay="0" scalestart="0.5" className="char">r</div>
                        <div dir="-1" degrotate="20" rotatespeed="4" startposny="200px" yspeed="2" delay="0" scalestart="0.5" className="char">e</div>


                    </h1>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 140 127"
                        fill="none"
                        className="horizontal-words__arrow-end-svg second-arrow absolute right-[0%] translate-x-[110%] translate-y-[115%] -top-20 w-[12rem] team-grid__line-1-svg arrow-svg"
                        width="100%"
                    >
                        <path
                            d="M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.437 125.078L99.6875 107.891
           M2.03125 2.42188C100.469 2.42188 130.156 52.4219 118.438 125.078L137.969 110.234"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <p className="text-xl max-w-xl w-[80%] text-center font-semibold">
                    Audiences are more scattered and more reachable than ever. We help brands
                    become leaders on the channels of the new mainstream.
                </p>
            </div>
        </section>
    );
}
