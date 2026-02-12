import React from 'react';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('clase-gratuita');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quienes-somos" className="about">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-image" data-aos="fade-right">
            <div className="about-visual">
              <img src="/logo.webp" alt="AFCademIA Logo" className="about-img" loading="eager" width="200" height="200" />
              <div className="about-badge">
                <i className="fas fa-graduation-cap"></i>
                <span>Expertos en tu sector</span>
              </div>
            </div>
          </div>
          <div className="about-content" data-aos="fade-left">
            <h2 className="about-title">
              <span className="title-line">Cercanos,</span>
              <span className="title-line">prácticos y expertos</span>
              <span className="title-line">en tu día a día</span>
            </h2>
            <p className="about-text">
              En AFCademIA ayudamos a administradores de fincas y a sus equipos a dar el salto a la era digital. Nuestra misión es clara: ayudarte a automatizar tareas y adoptar nuevas tecnologías para que tu despacho sea más eficiente, competitivo y moderno.
            </p>
            <p className="about-text">
              Somos administradores como tú. Conocemos los retos del día a día, y por eso te ofrecemos soluciones reales, prácticas y aplicables desde el primer día.
            </p>
            <a href="#clase-gratuita" className="btn btn-primary about-cta" onClick={scrollToContact}>
              <i className="fas fa-search"></i>
              Descubre cómo podemos ayudarte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
