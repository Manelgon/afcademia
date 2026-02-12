import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Offering from "../components/Offering";
import Values from "../components/Values";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll a esa sección después de que se cargue la página
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          let title;
          
          // Para la sección de clase gratuita, centrar en toda la sección
          if (sectionId === 'clase-gratuita') {
            const offset = 150;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // Para otras secciones, buscar cualquier título
            title = element.querySelector('h1, h2, h3');
            
            if (title) {
              const offset = 100;
              const elementPosition = title.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - offset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            } else {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }, 100); // Pequeño delay para asegurar que la página se ha cargado completamente

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <VideoSection />
      <Benefits />
      <About />
      <Values />
      <Offering />
      <Contact />
      <FAQ />
    </main>
  );
}
