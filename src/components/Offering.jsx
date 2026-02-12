import React from 'react';

const Offering = () => {
  const offerings = [
    {
      icon: 'fas fa-cogs',
      title: 'Automatización práctica',
      description: 'Domina herramientas clave como Power Automate, Outlook y Make con ejemplos reales.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Metodología flexible',
      description: 'Formación 100% online, a tu ritmo. Compatible con tu jornada laboral.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Formación bonificable',
      description: 'A través de FUNDAE. Sin coste para tu empresa.'
    }
  ];

  return (
    <section id="que-ofrecemos" className="offering">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Formación práctica, adaptada a ti</h2>
        </div>
        <div className="formacion-grid">
          {offerings.map((offering, index) => (
            <div key={index} className="formacion-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="formacion-icon">
                <i className={offering.icon}></i>
              </div>
              <h3 className="formacion-title">{offering.title}</h3>
              <p className="formacion-text">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;
