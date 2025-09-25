import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUS/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="servicos" element={<Services />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  );
}
