import React from 'react';
import Header from "./modules/header/Header"
import Home from "./modules/Home"
import Contactus from "./modules/Contactus";
import AboutUs from "./modules/AboutUs";
import Faqs from "./modules/Faqs";
import Homepage from "./modules/Homepage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="faqs" element={<Faqs />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/homepage" element={<Homepage />} />
        </Routes>
    </div>
  )
}

export default App