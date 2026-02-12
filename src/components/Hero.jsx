import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('clase-gratuita');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line-1">Automatiza tu despacho de</span>
              <span className="title-line-2">administración de fincas con <span className="highlight-ia">IA</span></span>
            </h1>
            <p className="hero-subtitle">
              Ahorra hasta 10 horas por semana con formación práctica, online y bonificable.<br />
              Domina Power Automate, Outlook, Make y más… sin conocimientos técnicos.
            </p>
            <div className="hero-ctas">
              <a href="#clase-gratuita" className="btn btn-primary btn-large hero-cta" onClick={scrollToContact}>
                <i className="fas fa-calendar-check"></i>
                Solicita tu clase gratuita
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <i className="fas fa-clock"></i>
                <span>Ahorra 4-10h/semana</span>
              </div>
              <div className="floating-card card-2">
                <i className="fas fa-chart-line"></i>
                <span>Reduce Errores</span>
              </div>
              <div className="floating-card card-3">
                <i className="fas fa-rocket"></i>
                <span>Lidera el Cambio</span>
              </div>
              <div className="center-illustration">
                <img src="/logo2.webp" alt="AFCademIA" className="hero-logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
