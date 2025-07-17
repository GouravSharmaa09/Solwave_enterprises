import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import ProjectDetail from "./pages/ProjectDetail";
import EPC from './pages/EPC';
import OMService from './pages/OMService';
import ProjectDevelopment from './pages/ProjectDevelopment';
import HR from './pages/HR';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/epc" element={<EPC />} />
          <Route path="/om-service" element={<OMService />} />
          <Route path="/project-development" element={<ProjectDevelopment />} />
          <Route path="/hr" element={<HR />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
