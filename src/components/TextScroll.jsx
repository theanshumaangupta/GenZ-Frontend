import { useEffect, useRef } from "react"

export default function TextScroll() {
    const boxRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
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
                const moveX = 80 - progress * 150; // start 80% → end -70%

                textRef.current.style.transform = `translateX(${moveX}%)`;

                const default_MoveYSpeed = 2;
                const default_rotateSpeed = 4;
                const default_rotateDegree = 0;
                const default_scaleSpeed = 4;
                const default_startScale = 1;
                const default_yPosn = 0;
                const default_dir = -1



                const chars = textRef.current.querySelectorAll("h1 > div");
                chars.forEach((el, idx) => {
                    const dir = parseInt(el.getAttribute("dir")) || default_dir;
                    const rotateDegree = parseInt(el.getAttribute("degrotate")) || default_rotateDegree;
                    const rotateSpeed = parseFloat(el.getAttribute("rotatespeed")) || default_rotateSpeed;
                    const startPosY = parseInt(el.getAttribute("startposny")) || default_yPosn;
                    const ySpeed = parseFloat(el.getAttribute("yspeed")) || default_MoveYSpeed;
                    const delay = parseFloat(el.getAttribute("delay")) || 0;
                    const scaleStart = parseFloat(el.getAttribute("scalestart")) || default_startScale;

                    //  a per-character delay (0.05 means 5% later for next char)
                    const charDelay = idx * 0.02 + delay;
                    const delayedProgress = Math.min(Math.max(progress - charDelay, 0), 1);

                    el.style.setProperty('--progress', `${dir * wobble(Math.min(delayedProgress * ySpeed, 1), startPosY)}px`);
                    el.style.setProperty('--progressTurn', `${dir * Math.max(rotateDegree - (delayedProgress * rotateSpeed * rotateDegree), 0)}deg`);
                    el.style.setProperty('--ratio', `${Math.min(Math.max(progress * default_scaleSpeed, scaleStart), 1)}`);
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
        <section ref={boxRef} className="bg-primary h-[300vh] w-full">
            <div className="sticky overflow-hidden top-0 h-screen flex flex-col justify-evenly items-center">
                <div ref={textRef} className="moving-text h1-div">
                    <h1 className="h1-text whitespace-nowrap text-[10rem] font-[1000] font-sans z-10 relative">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378 127" fill="none" data-scroll-animation="draw" className="w-[20rem] team-grid__line-1-svg"><path d="M2 123C9 35.9999 84.5 17 124 25.9999C217.764 47.3635 207 115 177.5 123C105.777 142.45 110.737 1.99991 232.5 2C310.5 2.00006 366.5 79 376 118" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="753.06 9.08" style={{transformOrigin: "0px 0px", strokeDashoffset: "0", strokeDasharray: "739.567px, 0.1px"}} data-svg-origin="2 2"></path></svg>
                        <div dir="+1" degrotate="0" rotatespeed="4" startposny="10px" yspeed="5" delay="0" scalestart="1" className="down">w</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="200px" yspeed="5" delay="0" scalestart="1" className="up">e</div>&nbsp;

                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="0px" yspeed="10" delay="0.9" scalestart="1" className="up">w</div>
                        <div dir="+1" degrotate="10" rotatespeed="5" startposny="400px" yspeed="5" delay="0" scalestart="0.9" className="down">a</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="4" delay="0" scalestart="0.5" className="up">n</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="3" delay="0" scalestart="0.5" className="down">n</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="400px" yspeed="2" delay="0" scalestart="0.9" className="up">a</div>&nbsp;

                        <div dir="-1" degrotate="180" rotatespeed="4" startposny="40px" yspeed="4" delay="0" scalestart="0.9" className="down">b</div>
                        <div dir="-1" degrotate="145" rotatespeed="4" startposny="50px" yspeed="5" delay="0.1" scalestart="0.9" className="up">e</div>&nbsp;

                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="200px" yspeed="8" delay="0.15" scalestart="0.5" className="down">w</div>
                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="200px" yspeed="6" delay="0.19" scalestart="0.5" className="down">h</div>
                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="20px" yspeed="4" delay="0.25" scalestart="0.5" className="up">e</div>
                        <div dir="-1" degrotate="10" rotatespeed="4" startposny="220px" yspeed="6" delay="0.2" scalestart="0.8" className="up">r</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="150px" yspeed="6" delay="0.22" scalestart="0.5" className="down">e</div>&nbsp;
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="100px" yspeed="6" delay="0.22" scalestart="0.5" className="down">t</div>
                        <div dir="1" degrotate="0" rotatespeed="4" startposny="100px" yspeed="6" delay="0.23" scalestart="1" className="up">h</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="200px" yspeed="6" delay="0.24" scalestart="1" className="down">e</div>&nbsp;

                        <div dir="1" degrotate="-10" rotatespeed="8" startposny="150px" yspeed="6" delay="0.1" scalestart="1" className="up">p</div>
                        <div dir="1" degrotate="-10" rotatespeed="6" startposny="130px" yspeed="5" delay="0.1" scalestart="1" className="down">e</div>
                        <div dir="1" degrotate="10" rotatespeed="6" startposny="110px" yspeed="4" delay="0.1" scalestart="1" className="down">o</div>
                        <div dir="-1" degrotate="40" rotatespeed="4" startposny="200px" yspeed="6" delay="0.15" scalestart="1" className="up">p</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="180px" yspeed="5" delay="0.16" scalestart="1" className="up">l</div>
                        <div dir="-1" degrotate="0" rotatespeed="4" startposny="160px" yspeed="4" delay="0.18" scalestart="1" className="down">e</div>&nbsp;

                        <div dir="-1" degrotate="20" rotatespeed="4" startposny="200px" yspeed="2" delay="0" scalestart="0.5" className="down">a</div>
                        <div dir="+1" degrotate="20" rotatespeed="4" startposny="50px" yspeed="2" delay="0" scalestart="0.5" className="up">r</div>
                        <div dir="-1" degrotate="20" rotatespeed="4" startposny="200px" yspeed="2" delay="0" scalestart="0.5" className="down">e</div>


                    </h1>
                </div>
                <p>
                    Audiences are more scattered and more reachable than ever. We help brands
                    become leaders on the channels of the new mainstream.
                </p>
            </div>
        </section>
    );
}
