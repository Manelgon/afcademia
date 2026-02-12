import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Si no estamos en la página de inicio, navegar primero a la página de inicio
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      let title;
      
      // Para la sección de clase gratuita, centrar en toda la sección
      if (sectionId === 'clase-gratuita') {
        // Centrar en toda la sección con un offset mayor para mostrar más contenido
        const offset = 150; // Offset mayor para mostrar más de la sección
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return;
      } else {
        // Para otras secciones, buscar cualquier título
        title = element.querySelector('h1, h2, h3');
      }
      
      if (title) {
        // Centrar en el título con un offset para el navbar fijo
        const offset = 100; // Ajusta este valor según la altura de tu navbar
        const elementPosition = title.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Si no encuentra título, usar el comportamiento original
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToLegalPage = (pagePath, titleId) => {
    // Si ya estamos en la página legal correspondiente, hacer scroll directo al título
    if (location.pathname === pagePath) {
      const titleElement = document.getElementById(titleId);
      if (titleElement) {
        const offset = 100; // Offset para el navbar fijo
        const elementPosition = titleElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Si no estamos en la página, navegar normalmente
      navigate(`${pagePath}#${titleId}`);
    }
  };
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">AFCadem<span>IA</span></h3>
            <p>La academia tecnológica para administradores de fincas. Aprende a automatizar procesos reales, optimizar tu tiempo y liderar la era digital en la gestión de comunidades.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="footer-copyright desktop-copyright">
              <p>&copy; 2025 AFCademIA. Todos los derechos reservados.</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Málaga, España</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@afcademia.com">info@afcademia.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+34900000000">+34 900 00 00 00</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Formación</h4>
            <ul className="footer-links">
              <li><a href="#beneficios" onClick={(e) => { e.preventDefault(); scrollToSection('beneficios'); }}>Beneficios</a></li>
              <li><a href="#quienes-somos" onClick={(e) => { e.preventDefault(); scrollToSection('quienes-somos'); }}>Quiénes Somos</a></li>
              <li><a href="#valores" onClick={(e) => { e.preventDefault(); scrollToSection('valores'); }}>Valores AFC</a></li>
              <li><a href="#que-ofrecemos" onClick={(e) => { e.preventDefault(); scrollToSection('que-ofrecemos'); }}>Qué Ofrecemos</a></li>
              <li><a href="#clase-gratuita" onClick={(e) => { e.preventDefault(); scrollToSection('clase-gratuita'); }}>Clase Gratuita</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
              <li><a href="#">FUNDAE</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="/aviso-legal#aviso-legal-title" onClick={(e) => { e.preventDefault(); scrollToLegalPage('/aviso-legal', 'aviso-legal-title'); }}>Aviso Legal</a></li>
              <li><a href="/privacidad#politica-privacidad-title" onClick={(e) => { e.preventDefault(); scrollToLegalPage('/privacidad', 'politica-privacidad-title'); }}>Política de Privacidad</a></li>
              <li><a href="/cookies#politica-cookies-title" onClick={(e) => { e.preventDefault(); scrollToLegalPage('/cookies', 'politica-cookies-title'); }}>Política de Cookies</a></li>
              <li><a href="/accesibilidad#declaracion-accesibilidad-title" onClick={(e) => { e.preventDefault(); scrollToLegalPage('/accesibilidad', 'declaracion-accesibilidad-title'); }}>Declaración de Accesibilidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-copyright mobile-copyright">
          <p>&copy; 2025 AFCademIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
