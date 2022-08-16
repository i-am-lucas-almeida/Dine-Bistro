import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

import Footer from "./components/Footer";

function App() {

  return (

    <div>

      <Router>

        <ScrollToTop />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/reservas" element={<Reservations />} />

        </Routes>

        <Footer />

      </Router>

    </div>

  );

}

export default App;
