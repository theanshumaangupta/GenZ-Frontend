import { useEffect } from 'react'
import './App.css'
import Brand from './components/Brand'
import Hero from './components/Hero'
import TextScroll from './components/TextScroll'
import Tiktok from './components/Tiktok'
import CallUs from './components/CallUs'
import Footer from './components/Footer'
function App() {
  // changing nav color based on section bg color
  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      document.querySelectorAll("[data-nav-bg]").forEach(section => {
        const rect = section.getBoundingClientRect();
        // check if nav (at top=0) is inside this section
        if (rect.top <= 50 && rect.bottom >= 0) {
          if (section.dataset.navBg === "dark") {
            nav.classList.add("be-black");
          } else {
            nav.classList.remove("be-black");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <TextScroll />
      <Tiktok />
      <Brand />
      <CallUs/>
      <Footer/>
    </>
  )
}

export default App