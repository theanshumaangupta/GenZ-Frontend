"use client"



// how to use
// firstly import
// import { useRef } from "react"
// import useFillAnimation from "./fill";

// add this in ur component 
// const boxRef2 = useRef(null);
// const { pathStyle } = useFillAnimation(boxRef2, { duration: "1.2s", triggerOffset: 10 });

// and add a scratch class in svg 
// add pathstyle in path style tag
// and add ref={boxRef2} in ur section div to analyze its posn on screen




import { useEffect, useState } from "react";
export default function useFillAnimation(boxRef2, options = {}) {
    const { triggerOffset = 4, duration = "0.6s", easing = "ease-in-out" } = options;
    const [animate, setAnimate] = useState(false);
    const [totalLength, setTotalLength] = useState(0);
    useEffect(() => {
        if (boxRef2.current) {
            const scratch = boxRef2.current.querySelector(".scratch path");
            if (scratch) setTotalLength(scratch.getTotalLength());
        }
    }, [boxRef2])

    useEffect(() => {
        function handleScroll() {
            if (!boxRef2.current) return;
            const box = boxRef2.current;
            // for debuing purpose only
            // box.style.border = "1px solid red";
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < (window.innerHeight / triggerOffset)) {
                setAnimate(true);
            }
            else {
                setAnimate(false);
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [boxRef2])
    const pathStyle = {
        transformOrigin: "0px 0px",
        strokeDashoffset: "0",
        transition: `stroke-dasharray ${duration} ${easing}`,
        strokeDasharray: `${animate ? totalLength : 0}px, ${totalLength}px`,
    };

    return { animate, totalLength, pathStyle };
}   