import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import QuienesSomos from "./components/QuienesSomos";
import { Calidad } from "./components/calidad";
import { TrabajeConNosotros } from "./components/TrabajeConNosotros";
import { PQRS } from "./components/PQRS";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Gallery />
                  <Clients />
                  <Contact />
                </>
              }
            />
            {/* Otras rutas */}
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/calidad" element={<Calidad />} />
            <Route path="/trabaje-con-nosotros" element={<TrabajeConNosotros/>} />
            <Route path="/PQRS" element={<PQRS/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
