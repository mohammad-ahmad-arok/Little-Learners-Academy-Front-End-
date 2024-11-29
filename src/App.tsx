import AcademicsPage from "./pages/academicsPage/AcademicsPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/Academics" element={<AcademicsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
