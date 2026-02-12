import React from 'react';

const Values = () => {
  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovación',
      description: 'Usamos tecnologías avanzadas aplicadas a la administración de fincas para que siempre estés un paso adelante en tu sector.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Practicidad',
      description: 'Todo lo que aprendes lo aplicas desde el primer día. Sin teoría de más, solo herramientas útiles y resultados.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Cercanía',
      description: 'Somos administradores como tú. Hablamos tu idioma, entendemos tus retos, y te damos soluciones reales.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Profesionalidad',
      description: 'Formación clara, actualizada y eficaz, creada e impartida por expertos con experiencia real en el sector.'
    }
  ];

  return (
    <section id="valores" className="values">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lo que nos diferencia</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <div className="value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
