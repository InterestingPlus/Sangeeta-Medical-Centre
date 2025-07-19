import "./App.css";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header Start */}
      <Navbar />
      {/* Header End */}

      <Outlet />

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}

export default App;
