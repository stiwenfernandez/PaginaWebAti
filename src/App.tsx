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
import { PQRS } from "./components/PQRS";
import { PoliticasPage } from "./pages/PoliticasPage";
import { CarrerasPage } from "./pages/CarrerasPage";
import { PQRSPage } from "./pages/PQRSPage";
import { WhatsAppButton } from "./components/common/WhatsAppButton";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-16">
                  <Hero />
                  <Services />
                  <Gallery />
                  <Clients />
                  <Contact />
                </div>
              }
            />
            <Route 
              path="/quienes-somos" 
              element={
                <div className="container mx-auto px-4">
                  <QuienesSomos />
                </div>
              } 
            />
            <Route 
              path="/calidad" 
              element={
                <div className="container mx-auto px-4">
                  <Calidad />
                </div>
              } 
            />
            <Route 
              path="/politicas" 
              element={
                <div className="container mx-auto px-4">
                  <PoliticasPage />
                </div>
              } 
            />
            <Route 
              path="/carreras" 
              element={
                <div className="container mx-auto px-4">
                  <CarrerasPage />
                </div>
              } 
            />
            <Route 
              path="/pqrs" 
              element={
                <div className="container mx-auto px-4">
                  <PQRSPage />
                </div>
              } 
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
