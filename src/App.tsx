import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import AcademicsPage from "./pages/academicsPage/AcademicsPage";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      animateLoaderExit();
    });

    window.onload = () => {
      animateLoaderExit();
    };

    return () => {
      document.removeEventListener("DOMContentLoaded", () => {});
      window.onload = null;
    };
  }, []);

  const animateLoaderExit = () => {
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        y: 50,
        scale: 1.5,
        duration: 1,
        ease: "power2.in",
        onComplete: () => setIsLoading(false),
      });
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isLoading && (
        <div ref={loaderRef}>
          <Loader />
        </div>
      )}
      <>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/StudentLife" element={<StudentLife />} />
          <Route path="/Academics" element={<AcademicsPage />} />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
