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
import Admissions from "./pages/Admissions"
import StudentLife from "./pages/StudentLife";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Admissions" element={<Admissions />} />
        <Route path="/StudentLife" element={<StudentLife />} />
      </Routes>
      <Footer />
    </>
  );
// >>>>>>> 65c8c59be52b41fac2756852c410e3ef1f1a2506
}

export default App;
