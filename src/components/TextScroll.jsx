import { useEffect, useRef } from "react"

export default function TextScroll() {
    const boxRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function wobble(progress) {
            const MoveY = 250; // how much to move up initially
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

                const MoveYSpeed = 2
                document.getElementsByClassName("up")[0].style.setProperty('--progress', `${wobble(Math.min(progress * MoveYSpeed, 1))}px`);
                const rotateSpeed = 4
                const rotateDegree = 90;
                document.getElementsByClassName("up")[0].style.setProperty('--progressTurn', `${Math.max((rotateDegree - (progress * rotateSpeed * rotateDegree)), 0)}deg`);
                const scaleSpeed = 4
                const startScale = 0.9
                document.getElementsByClassName("up")[0].style.setProperty('--ratio', `${Math.min(Math.max(progress * scaleSpeed, startScale), 1)}`);
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
                <div ref={textRef} className="moving-text h1-div">
                    <h1 className="h1-text whitespace-nowrap text-[10rem] font-[1000] font-sans z-10 relative">
                        we wan<div className="up inline-block">n</div>a be where the people are
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
