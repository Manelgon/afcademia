import { useEffect } from 'react';
import './DeclaracionAccesibilidad.css';

export default function DeclaracionAccesibilidad() {
  useEffect(() => {
    // Hacer scroll al título cuando se carga la página
    const titleElement = document.getElementById('declaracion-accesibilidad-title');
    if (titleElement) {
      const offset = 100; // Offset para el navbar fijo
      const elementPosition = titleElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="accessibility-hero">
        <div>
          <h1 id="declaracion-accesibilidad-title">Declaración de Accesibilidad</h1>
          <p>Compromiso con la accesibilidad web y la inclusión digital</p>
          <div className="accessibility-badge">
            <span>Conforme a WCAG 2.1 AA - UNE-EN 301 549:2022</span>
          </div>
        </div>
      </section>

      <main className="accessibility-main">
        <div className="accessibility-container">
          <div className="accessibility-content">
            
            {/* Compromiso de Accesibilidad */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                1. Compromiso con la Accesibilidad
              </h2>
              <p className="accessibility-text-intro">
                Esta web se ha comprometido a hacer accesible su contenido de conformidad con el criterio de 
                accesibilidad del Programa Kit Digital, conforme a los anexos de la norma UNE-EN 301 549:2022.
              </p>
              
              <div className="accessibility-table-container">
                <h3>Pautas de Accesibilidad</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>WCAG 2.1 AA</strong></td>
                      <td>En la construcción de la página web de AFCacademia se ha adoptado la guía informativa proporcionada por las pautas WCAG 2.1 AA</td>
                    </tr>
                    <tr>
                      <td><strong>Mejora continua</strong></td>
                      <td>En este esfuerzo continuo en la eliminación de barreras seguirán mejorando este sitio hasta alcanzar una accesibilidad y usabilidad óptimas para todos los usuarios</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Aspectos Implementados */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                2. Aspectos de Accesibilidad Implementados
              </h2>
              <p className="accessibility-text-intro">
                En la confección del portal se han tenido en cuenta los siguientes aspectos:
              </p>
              
              <div className="accessibility-table-container">
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Presentación Visual</strong></td>
                      <td>Uso de CSS para la presentación de la información y etiquetas de marcaje apropiadas.</td>
                    </tr>
                    <tr>
                      <td><strong>Navegación Usable</strong></td>
                      <td>Sistemas de navegación usables, intuitivos y alternativos para diferentes usuarios.</td>
                    </tr>
                    <tr>
                      <td><strong>Imágenes Accesibles</strong></td>
                      <td>Descripciones alternativas en las imágenes para usuarios con discapacidad visual.</td>
                    </tr>
                    <tr>
                      <td><strong>Compatibilidad</strong></td>
                      <td>Verificaciones en la visualización con diferentes navegadores y dispositivos.</td>
                    </tr>
                    <tr>
                      <td><strong>Formatos Universales</strong></td>
                      <td>Utilización de formatos universales y alternativos para el contenido.</td>
                    </tr>
                    <tr>
                      <td><strong>Enlaces Descriptivos</strong></td>
                      <td>Los enlaces ofrecen detalles de la función o destino del hipervínculo.</td>
                    </tr>
                    <tr>
                      <td><strong>Estándares W3C</strong></td>
                      <td>Uso de los estándares del W3C para garantizar la compatibilidad.</td>
                    </tr>
                    <tr>
                      <td><strong>Navegación por Teclado</strong></td>
                      <td>Acceso mediante atajos de teclado a las principales opciones del sitio.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Atajos de Teclado */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                3. Atajos de Teclado
              </h2>
              <div className="accessibility-table-container">
                <h3>Navegación con Teclado</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Tecla Tab</strong></td>
                      <td>En esta web puede hacer saltos ordenados en el contenido para navegar entre elementos interactivos de forma secuencial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Barra de Herramientas */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                4. Herramientas de Accesibilidad
              </h2>
              <p className="accessibility-text-intro">
                El sitio web incluye herramientas de accesibilidad para mejorar la experiencia de todos los usuarios:
              </p>
              
              <div className="accessibility-table-container">
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Tamaño de fuentes</strong></td>
                      <td>Ajustar el tamaño del texto para mejorar la legibilidad</td>
                    </tr>
                    <tr>
                      <td><strong>Espacio entre fuentes</strong></td>
                      <td>Controlar el espacio entre caracteres e interlineado</td>
                    </tr>
                    <tr>
                      <td><strong>Contraste</strong></td>
                      <td>Modificar el contraste y saturación de colores</td>
                    </tr>
                    <tr>
                      <td><strong>Alineación</strong></td>
                      <td>Cambiar la alineación del texto para facilitar la lectura</td>
                    </tr>
                    <tr>
                      <td><strong>Enlaces</strong></td>
                      <td>Subrayar enlaces para identificarlos claramente</td>
                    </tr>
                    <tr>
                      <td><strong>Fuente legible</strong></td>
                      <td>Activar fuente especial para usuarios con dislexia</td>
                    </tr>
                    <tr>
                      <td><strong>Cursor y guías</strong></td>
                      <td>Personalizar tamaño de cursor, máscara y guía de lectura</td>
                    </tr>
                    <tr>
                      <td><strong>Animaciones</strong></td>
                      <td>Detener animaciones que puedan causar molestias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tamaño del Texto */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                5. Ajuste del Tamaño de Texto
              </h2>
              <p className="accessibility-text-intro">
                El diseño accesible permite que el usuario pueda ajustar las fuentes al tamaño que le convenga. 
                Esta acción puede llevarse a cabo de diferentes maneras según el navegador web que se utilice:
              </p>
              
              <div className="accessibility-table-container">
                <h3>Navegadores Compatibles</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Mozilla Firefox</strong></td>
                      <td>Ver → Tamaño de texto → Incrementar</td>
                    </tr>
                    <tr>
                      <td><strong>Internet Explorer</strong></td>
                      <td>Ver → Tamaño de texto → Más grande</td>
                    </tr>
                    <tr>
                      <td><strong>Opera</strong></td>
                      <td>View → Zoom → %</td>
                    </tr>
                    <tr>
                      <td><strong>Safari</strong></td>
                      <td>View → Make text bigger</td>
                    </tr>
                    <tr>
                      <td><strong>Google Chrome</strong></td>
                      <td>Herramientas → Zoom</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="accessibility-table-container">
                <h3>Atajos de Teclado Universales</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Ctrl + +</strong></td>
                      <td>Aumentar tamaño</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + -</strong></td>
                      <td>Disminuir tamaño</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + 0</strong></td>
                      <td>Restaurar tamaño original</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Configuración Técnica */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                6. Configuración Técnica
              </h2>
              <div className="accessibility-table-container">
                <h3>Tecnologías Utilizadas</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Tecnologías modernas</strong></td>
                      <td>Las páginas web están creadas con tecnologías modernas y accesibles</td>
                    </tr>
                    <tr>
                      <td><strong>Compatibilidad</strong></td>
                      <td>Garantizan la compatibilidad con tecnologías de asistencia y diferentes dispositivos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recursos de Accesibilidad */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                7. Información Útil sobre Accesibilidad
              </h2>
              <p className="accessibility-text-intro">
                Enlaces organizados para obtener más información sobre accesibilidad web:
              </p>
              
              <div className="accessibility-table-container">
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>W3C - World Wide Web Consortium</strong></td>
                      <td>Grupo de trabajo internacional que dicta líneas generales relacionadas con la web. <a href="http://www.w3c.org/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--azul-medio)', textDecoration: 'underline'}}>Visitar sitio web</a></td>
                    </tr>
                    <tr>
                      <td><strong>WAI - Iniciativa de Accesibilidad Web</strong></td>
                      <td>Iniciativa de Accesibilidad Web del W3C con recursos y guías específicas. <a href="http://www.w3c.org/wai/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--azul-medio)', textDecoration: 'underline'}}>Visitar sitio web</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contacto */}
            <div className="accessibility-section">
              <h2 className="accessibility-section-title">
                8. Observaciones y Contacto
              </h2>
              <div className="accessibility-table-container">
                <h3>¿Encontraste alguna barrera de accesibilidad?</h3>
                <table className="accessibility-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Problema de acceso</strong></td>
                      <td>Si encuentra barreras de acceso o problemas con alguna página o función de este sitio web que pueda suponer un obstáculo para los visitantes</td>
                    </tr>
                    <tr>
                      <td><strong>Contacto</strong></td>
                      <td>Puede ponerse en contacto en cualquier momento en: <strong>info@afcacademia.com</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="accessibility-footer">
              <div className="accessibility-footer-badge">
                <p className="accessibility-footer-text">
                  <strong>AFCacademia, S.L</strong> - Comprometidos con la accesibilidad universal
                </p>
                <p className="accessibility-standards">
                  Conforme a WCAG 2.1 AA • UNE-EN 301 549:2022 • Programa Kit Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
