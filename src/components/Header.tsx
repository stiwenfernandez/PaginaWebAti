import React from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://www.ati.net.co/favicons/apple-touch-icon-160x160.png"
              alt="ATI Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Menú principal (escritorio) */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" isActive={isActive("/")}>
              Inicio
            </NavLink>
            <NavLink href="/quienes-somos" isActive={isActive("/quienes-somos")}>
              Quiénes Somos
            </NavLink>
            <NavLink href="/calidad" isActive={isActive("/calidad")}>
              Calidad
            </NavLink>
            <NavLink href="/trabaje-con-nosotros" isActive={isActive("/trabaje-con-nosotros")}>
              Trabaje con nosotros
            </NavLink>
            <NavLink href="/PQRS" isActive={isActive("/PQRS")}>
              PQRS
            </NavLink>
            <NavLink href="/#contact" isActive={isActive("/#contact")}>
              Contacto
            </NavLink>
          </nav>

          <motion.div
            className="hidden md:flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </a>
          </motion.div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
            <MobileNavLink href="/" isActive={isActive("/")}>
              Inicio
            </MobileNavLink>
            <MobileNavLink href="/quienes-somos" isActive={isActive("/quienes-somos")}>
              Quiénes Somos
            </MobileNavLink>
            <MobileNavLink href="/calidad" isActive={isActive("/calidad")}>
              Calidad
            </MobileNavLink>
            <MobileNavLink href="/trabaje-con-nosotros" isActive={isActive("/trabaje-con-nosotros")}>
              Trabaje con nosotros
            </MobileNavLink>
            <MobileNavLink href="/PQRS" isActive={isActive("/PQRS")}>
              PQRS
            </MobileNavLink>
            <MobileNavLink href="/#contact" isActive={isActive("/#contact")}>
              Contacto
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`${
        isActive ? "text-primary border-b-2 border-primary" : "text-gray-700"
      } hover:text-primary px-3 py-2 text-sm font-medium transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`${
        isActive ? "text-primary font-bold" : "text-gray-700"
      } hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
