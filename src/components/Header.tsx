import React from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img
              src="https://www.ati.net.co/favicons/apple-touch-icon-160x160.png"
              alt="ATI Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Menú principal (escritorio) */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" isActive={isActive("/")}>
              Inicio
            </NavLink>
            <NavLink to="/quienes-somos" isActive={isActive("/quienes-somos")}>
              Quiénes Somos
            </NavLink>

            {/* Calidad con Submenú */}
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Calidad
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/politicas"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Política de no alcohol y drogas
                </Link>
                <Link
                  to="/calidad"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sistema de Gestión
                </Link>
              </div>
            </div>

            <NavLink to="/carreras" isActive={isActive("/carreras")}>
              Trabaje con Nosotros
            </NavLink>
            <NavLink to="/pqrs" isActive={isActive("/pqrs")}>
              PQRS
            </NavLink>
            <NavLink to="/#contact" isActive={isActive("/#contact")}>
              Contacto
            </NavLink>
          </nav>

          {/* Botón de contacto */}
          <motion.div className="hidden md:flex items-center" whileHover={{ scale: 1.05 }}>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </a>
          </motion.div>

          {/* Menú móvil */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" isActive={isActive("/")}>
              Inicio
            </MobileNavLink>
            <MobileNavLink to="/quienes-somos" isActive={isActive("/quienes-somos")}>
              Quiénes Somos
            </MobileNavLink>
            <MobileNavLink to="/politicas" isActive={isActive("/politicas")}>
              Política de no alcohol y drogas
            </MobileNavLink>
            <MobileNavLink to="/calidad" isActive={isActive("/calidad")}>
              Sistema de Gestión
            </MobileNavLink>
            <MobileNavLink to="/carreras" isActive={isActive("/carreras")}>
              Trabaje con Nosotros
            </MobileNavLink>
            <MobileNavLink to="/PQRS" isActive={isActive("/PQRS")}>
              PQRS
            </MobileNavLink>
            <MobileNavLink to="/#contact" isActive={isActive("/#contact")}>
              Contacto
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.div>
      <Link
        to={to}
        className={`${
          isActive ? "text-primary border-b-2 border-primary" : "text-gray-700"
        } hover:text-primary px-3 py-2 text-sm font-medium transition-colors`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function MobileNavLink({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.div>
      <Link
        to={to}
        className={`${
          isActive ? "text-primary font-bold" : "text-gray-700"
        } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
