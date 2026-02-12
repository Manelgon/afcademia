import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: 'fas fa-clock',
      title: 'Ahorra 4–10h por semana',
      description: 'Automatiza tareas repetitivas y enfócate en lo que realmente importa.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Reduce errores y organiza',
      description: 'Evita fallos diarios y mejora la gestión de tus comunidades.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Comunicación clara',
      description: 'Gestiona incidencias con mayor agilidad y claridad profesional.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Transformación digital',
      description: 'Moderniza tu despacho y sé pionero en eficiencia automatizada.'
    }
  ];

  return (
    <section id="beneficios" className="offering">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué <span className="text-orange">AFCademIA</span>?</h2>
        </div>
        <div className="formacion-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="formacion-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="formacion-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3 className="formacion-title">{benefit.title}</h3>
              <p className="formacion-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
