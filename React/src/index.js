import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Specialties from "./pages/Specialties";
import Specialty from "./pages/Specialty";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Contact from "./pages/Contact";
import Procedures from "./pages/Procedures";
import InfraEquipment from "./pages/InfraEquipment";
import SMCInstitute from "./pages/SMCInstitute";
import Patients from "./pages/Patients";
import ScrollToHashElement from "./components/ScrollToHashElement";
import InPatients from "./components/InPatients";
import BlogPage from "./components/BlogSection";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/:name" element={<Doctor />} />

          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/:name" element={<Specialty />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<Blog />} />

          <Route path="/procedures" element={<Procedures />} />
          <Route path="/infra-equipment" element={<InfraEquipment />} />
          <Route path="/SMC-institute" element={<SMCInstitute />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/international-patients" element={<InPatients />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
