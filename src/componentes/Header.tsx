import image from "../assets/Gemini.png";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router";
import Button from "./Button";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled 
        ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md" 
        : "bg-white dark:bg-black shadow-lg"}
      border-b border-gray-200 dark:border-gray-700`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img src={image} alt="Nexus Tech" className="w-10 h-10  rounded-md" />
            <span className="font-bold text-acento-light dark:text-acento-dark">
              Nexus Tech
            </span>
          </div>

     
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link dark:text-white border-b-4 border-transparent hover:border-purple-500">Home</Link>
            <span className="nav-link dark:text-white border-b-4 border-transparent hover:border-purple-500">Servicios</span>
            <span className="nav-link dark:text-white border-b-4 border-transparent hover:border-purple-500">Nosotros</span>
            <span className="nav-link dark:text-white border-b-4 border-transparent hover:border-purple-500">Contacto</span>
          </div>

     
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <span className="cursor-pointer hover:text-acento-light dark:text-white">
              Iniciar Sesión
            </span>
            <Button text="Registrarme" variant="primary" />
          </div>

   
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl dark:text-white"
          >
            ☰
          </button>
        </div>

      
        {isOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-6 text-center ">
            <Link to="/" className="nav-link dark:text-white  ">Home</Link>
            <span className="nav-link dark:text-white ">Servicios</span>
            <span className="nav-link dark:text-white">Nosotros</span>
            <span className="nav-link dark:text-white">Contacto</span>

            <div className="flex justify-center items-center gap-4 pt-4 border-t dark:border-gray-700">
              <ThemeToggle />
              <span className="cursor-pointer dark:text-white">
                Iniciar Sesión
              </span>
            </div>

            <Button text="Registrarme" variant="primary" />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
