import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'beneficios', 'quienes-somos', 'valores', 'que-ofrecemos', 'clase-gratuita', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && navbarRef.current) {
        // Verificar si el clic fue fuera del menú y del navbar
        const isClickInsideMenu = menuRef.current.contains(event.target);
        const isClickInsideNavbar = navbarRef.current.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideNavbar) {
          setIsMenuOpen(false);
        }
      }
    };

    // Prevenir scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
        setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Overlay oscuro cuando el menú está abierto */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <nav className="navbar" id="navbar" ref={navbarRef}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <img src="/logo.webp" alt="AFCademIA Logo" className="logo-img" loading="eager" width="40" height="40" />
              <span className="logo-text">AFCadem<span className="logo-accent">IA</span></span>
            </a>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
              id="menuToggle" 
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'} 
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul 
              className={`nav-menu ${isMenuOpen ? 'active' : ''}`} 
              id="navMenu"
              ref={menuRef}
            >
              <li><a href="#beneficios" className={`nav-link ${activeSection === 'beneficios' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('beneficios'); }}>Beneficios</a></li>
              <li><a href="#quienes-somos" className={`nav-link ${activeSection === 'quienes-somos' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('quienes-somos'); }}>Quiénes Somos</a></li>
              <li><a href="#valores" className={`nav-link ${activeSection === 'valores' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('valores'); }}>Valores AFC</a></li>
              <li><a href="#que-ofrecemos" className={`nav-link ${activeSection === 'que-ofrecemos' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('que-ofrecemos'); }}>Qué Ofrecemos</a></li>
              <li><a href="#clase-gratuita" className={`nav-link cta-nav ${activeSection === 'clase-gratuita' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('clase-gratuita'); }}>Clase Gratuita</a></li>
              <li><a href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
