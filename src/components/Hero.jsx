export default function Hero() {
    return (
        <section data-nav-bg="light" className="hero-sec  text-white hero bg-center w-full h-screen relative bg-red-500  flex flex-col justify-center bg-no-repeat bg-cover items-center  text-center"

            style={
                {
                    backgroundImage: "url('https://cdn.prod.website-files.com/683703490bc01e1b8c052e06/686f6ace62e3e07623327aca_thumb-p-800.avif')",

                }}
        >
            <nav className="fixed z-1000  top-0 p-5 md:px-15 md:py-10  flex justify-between items-center w-full">
                <div className="relative filter">
                    <h1 className="text-[25px] md:text-[35px] font-[1000] font-sans z-10 relative">
                        work
                        <img src="assets/poster-crack.svg" className="-z-10  invert-80 -top-5 -left-5 w-[100%] max-w-[10rem] absolute" alt="" />
                    </h1>
                </div>
                <img src="assets/logo.svg" className="w-[25%] max-w-[10rem] invert-100" alt="" />
                <img src="assets/wp-logo.svg" className="w-[8%] max-w-[3rem] invert-100" alt="" />
            </nav>
            <div className=" hero-content top-40 relative z-10 max-w-4xl w-[80%] font-sans text-5xl font-[1000] font text-center">
                <h1 className="" >we
                    <span className="">
                        <img src="assets/blue-smile.svg" className="absolute w-20 left-[50%] -top-15 -translate-x-[50%]" alt="" />
                        &nbsp; make &nbsp;
                    </span>
                    advertising for the new</h1>
                <div className="relative">
                    <img src="assets/main-circle.svg" className=" absolute h-full w-full invert-100 inset-0" alt="" />
                    <h1 className="">mainstream</h1>
                </div>
            </div>
        </section>
    )
}