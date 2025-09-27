import { useEffect, useRef } from "react"

export default function TextScroll() {
    const boxRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (boxRef.current && textRef.current) {
                const rect = boxRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // total scrollable distance
                const totalScroll = rect.height - (windowHeight);
                console.log(rect.height, windowHeight, totalScroll);
                // subtracting 0px becos of the pre start of movement
                const scrolled = Math.min(Math.max(-(rect.top ), 0), totalScroll);

                // creating progress/ratio type for percentage 0 to 1
                const progress = scrolled / totalScroll;

                // calculating progress to text movement
                const moveX = 80 - progress * 150; // start 80% → end -70%

                textRef.current.style.transform = `translateX(${moveX}%)`;
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
        <section ref={boxRef} className="bg-primary h-[500vh] w-full">
            <div className="sticky overflow-hidden top-0 h-screen flex flex-col justify-evenly items-center">
                <div ref={textRef} className="moving-text h1-div overflow-hidden">
                    <h1 className="h1-text whitespace-nowrap text-9xl font-[1000] font-sans z-10 relative">
                        we wanna be where the people are
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
