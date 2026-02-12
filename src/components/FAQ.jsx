import React, { useState } from 'react';

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "¿Necesito experiencia previa en automatización?",
      answer: "No, AFCademIA está pensado específicamente para usuarios sin conocimientos técnicos. Todo viene preconfigurado con tutoriales paso a paso y soporte personalizado. Si sabes usar tu software actual de gestión, podrás usar las herramientas que enseñamos sin problemas."
    },
    {
      question: "¿Los cursos están bonificados por FUNDAE?",
      answer: "Sí, todos nuestros cursos son bonificables a través de FUNDAE (Fundación Estatal para la Formación en el Empleo). Esto significa que tu empresa puede recuperar el coste de la formación a través de los créditos de formación disponibles. Te ayudamos con todo el proceso de gestión."
    },
    {
      question: "¿La demo tiene algún coste?",
      answer: "No, la clase gratuita de 30 minutos es completamente gratuita y sin compromiso. Es una oportunidad para conocer AFCademIA, ver ejemplos prácticos y resolver tus dudas antes de tomar cualquier decisión."
    },
    {
      question: "¿Cómo puedo empezar si no tengo conocimientos técnicos?",
      answer: "Nuestra metodología está diseñada específicamente para administradores de fincas sin conocimientos técnicos previos. Empezamos desde cero, con explicaciones claras y ejemplos prácticos de tu sector. Además, cuentas con soporte personalizado 1:1 durante todo el proceso de aprendizaje."
    },
    {
      question: "¿Cuánto tiempo necesito dedicar a la formación?",
      answer: "La formación es 100% flexible y a tu ritmo. Puedes dedicar el tiempo que mejor se adapte a tu agenda, desde 30 minutos al día hasta bloques más largos los fines de semana. El contenido está disponible 24/7 y puedes acceder cuando quieras desde cualquier dispositivo."
    },
    {
      question: "¿Qué herramientas aprenderé a usar?",
      answer: "Aprenderás a usar Power Automate, Make (Integromat), Excel avanzado, Outlook, Microsoft Teams, y herramientas de IA como ChatGPT aplicadas específicamente a la administración de fincas. Todo enfocado en automatizar tareas reales de tu día a día: gestión de incidencias, comunicaciones, cobros, documentación legal, etc."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Tienes dudas?</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
