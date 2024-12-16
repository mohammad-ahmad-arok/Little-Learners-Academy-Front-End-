
// <<<<<<< HEAD
// import Values from "./components/valuesandmisson/Values";
// import About from "./pages/about/About";
// import styles from "./styles";

// function App() {
//   return (
//     <div>
//       <About/>
//     </div>
//   )
// =======
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Admissions" element={<Admissions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
