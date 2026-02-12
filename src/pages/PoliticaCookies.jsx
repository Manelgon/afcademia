import { useEffect } from 'react';
import './PoliticaCookies.css';

export default function PoliticaCookies() {
  useEffect(() => {
    // Hacer scroll al título cuando se carga la página
    const titleElement = document.getElementById('politica-cookies-title');
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
      <section className="cookies-hero">
        <div>
          <h1 id="politica-cookies-title">Política de Cookies</h1>
          <p>Información sobre el uso de cookies en nuestro sitio web</p>
          <div className="cookies-badge">
            <span>Última actualización: Enero 2025</span>
          </div>
        </div>
      </section>

      <main className="cookies-main">
        <div className="cookies-container">
          <div className="cookies-content">
            
            {/* Sección 1: ¿QUÉ SON LAS COOKIES? */}
            <div className="cookies-section">
              <h2 className="cookies-section-title">
                1. ¿QUÉ SON LAS COOKIES?
              </h2>
              <p className="cookies-text">
                AFCacademia, S.L es responsable de la página web https://www.afcademia.com, y utiliza cookies y/u otros archivos de funcionalidad similar (en adelante "Cookies").
              </p>
              <p className="cookies-text">
                Las Cookies son pequeños archivos de datos que se envían al ordenador del usuario, teléfono móvil u otro dispositivo de acceso cuando visita una página web y que permiten obtener información relativa a su navegación o un código que permite identificar inequívocamente al usuario.
              </p>
            </div>

            {/* Sección 2: TIPOLOGÍA DE COOKIES */}
            <div className="cookies-section">
              <h2 className="cookies-section-title">
                2. TIPOLOGÍA DE COOKIES Y FINALIDADES DE USO
              </h2>
              <p className="cookies-text-intro">
                La página web https://www.afcademia.com utiliza Cookies de sesión y/o Cookies persistentes que, a su vez, pueden ser Cookies propias y/o de terceros.
              </p>

              <div className="cookies-table-container">
                <table className="cookies-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Cookies de sesión</strong></td>
                      <td>Son cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.</td>
                    </tr>
                    <tr>
                      <td><strong>Cookies persistentes</strong></td>
                      <td>Son un tipo de cookies en el que los datos siguen almacenados en el terminal y a los que se puede acceder y tratar durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</td>
                    </tr>
                    <tr>
                      <td><strong>Cookies propias</strong></td>
                      <td>Las creadas o gestionadas por el responsable de la página web AFCacademia, S.L. La página web https://www.afcademia.com, utiliza Cookies propias con las siguientes finalidades.</td>
                    </tr>
                    <tr>
                      <td><strong>Técnicas</strong></td>
                      <td>Permiten al usuario la navegación la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, utilizar elementos de seguridad durante la navegación, almacenar contenidos.</td>
                    </tr>
                    <tr>
                      <td><strong>Personalización</strong></td>
                      <td>Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como, por ejemplo, recordar preferencias de reproducción de vídeos.</td>
                    </tr>
                    <tr>
                      <td><strong>Cookies de terceros</strong></td>
                      <td>Las administradas por prestadores de servicios ajenos a AFCacademia, S.L. A continuación, se detallan tanto los terceros que pueden configurar y acceder a Cookies de su equipo, como las finalidades con las que se utiliza la información que almacenan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tabla de cookies */}
              <div style={{ overflowX: 'auto', marginTop: '2rem', marginBottom: '2rem' }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  border: '1px solid #e5e7eb',
                  backgroundColor: 'white',
                  borderRadius: '0.5rem'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <th style={{ 
                        padding: '1rem', 
                        textAlign: 'left', 
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold',
                        color: '#374151'
                      }}>Nombre</th>
                      <th style={{ 
                        padding: '1rem', 
                        textAlign: 'left', 
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold',
                        color: '#374151'
                      }}>Finalidad</th>
                      <th style={{ 
                        padding: '1rem', 
                        textAlign: 'left', 
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold',
                        color: '#374151'
                      }}>Tipo</th>
                      <th style={{ 
                        padding: '1rem', 
                        textAlign: 'left', 
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold',
                        color: '#374151'
                      }}>Duración</th>
                      <th style={{ 
                        padding: '1rem', 
                        textAlign: 'left', 
                        borderBottom: '1px solid #e5e7eb',
                        fontWeight: 'bold',
                        color: '#374151'
                      }}>Proveedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151',
                        fontFamily: 'monospace'
                      }}>__ga</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>Almacena preferencias de usuario</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>Persistente<br/>Analítica</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>1 año</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>Google</td>
                    </tr>
                    <tr>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151',
                        fontFamily: 'monospace'
                      }}>_ga_C0JPV68SJW</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>Almacena preferencias de usuario</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>De sesión<br/>Analítica</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>1 año</td>
                      <td style={{ 
                        padding: '1rem', 
                        borderBottom: '1px solid #e5e7eb',
                        color: '#374151'
                      }}>Google</td>
                    </tr>
                    <tr>
                      <td style={{ 
                        padding: '1rem', 
                        color: '#374151',
                        fontFamily: 'monospace'
                      }}>cookieyes-consent</td>
                      <td style={{ 
                        padding: '1rem', 
                        color: '#374151'
                      }}>Registra la aceptación de cookies</td>
                      <td style={{ 
                        padding: '1rem', 
                        color: '#374151'
                      }}>Persistente<br/>Técnica</td>
                      <td style={{ 
                        padding: '1rem', 
                        color: '#374151'
                      }}>1 año</td>
                      <td style={{ 
                        padding: '1rem', 
                        color: '#374151'
                      }}>AFCacademia</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cookies-table-container">
                <h3>También puedes: RECHAZAR TODAS LAS COOKIES</h3>
                <table className="cookies-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Información adicional</strong></td>
                      <td>El usuario puede obtener más información sobre las transferencias a terceros países que, en su caso, realizan los terceros identificados en esta política de cookies en sus correspondientes políticas</td>
                    </tr>
                    <tr>
                      <td><strong>Más información</strong></td>
                      <td>Ver los enlaces facilitados en el apartado "Más información"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sección 3: DESACTIVACIÓN */}
            <div className="cookies-section">
              <h2 className="cookies-section-title">
                3. DESACTIVACIÓN O ELIMINACIÓN DE LAS COOKIES
              </h2>
              <p className="cookies-text">
                La mayoría de navegadores web permite gestionar, en cualquier momento, las preferencias del usuario sobre el uso de las Cookies. El usuario puede ajustar su navegador para que rechace Cookies o elimine determinadas Cookies según su criterio.
              </p>
              
              <div className="cookies-table-container">
                <h3>Configuración por navegador</h3>
                <table className="cookies-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Google Chrome</strong></td>
                      <td>Configuración de cookies en el navegador Google Chrome</td>
                    </tr>
                    <tr>
                      <td><strong>Mozilla Firefox</strong></td>
                      <td>Configuración de cookies en el navegador Mozilla Firefox</td>
                    </tr>
                    <tr>
                      <td><strong>Internet Explorer</strong></td>
                      <td>Configuración de cookies en el navegador Internet Explorer</td>
                    </tr>
                    <tr>
                      <td><strong>Microsoft Edge</strong></td>
                      <td>Configuración de cookies en el navegador Microsoft Edge</td>
                    </tr>
                    <tr>
                      <td><strong>Safari</strong></td>
                      <td>Configuración de cookies en el navegador Safari</td>
                    </tr>
                    <tr>
                      <td><strong>Opera</strong></td>
                      <td>Configuración de cookies en el navegador Opera</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="cookies-text">
                El usuario puede revocar su consentimiento para el uso de Cookies en su navegador a través de las indicaciones anteriores o a través de la instalación de un sistema de rechazo, ("opt-out") en su navegador web.
              </p>
              
              <p className="cookies-text">
                En el caso de las Cookies de Google Analytics, el opt-out puede realizarse a través del siguiente enlace.
              </p>

              <div className="cookies-table-container">
                <h3>Importante</h3>
                <table className="cookies-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Bloqueo de cookies</strong></td>
                      <td>El usuario debe tener en cuenta que algunas características de los contenidos de la Página Web https://www.afcademia.com solo están disponibles si se permite la instalación de Cookies en su navegador</td>
                    </tr>
                    <tr>
                      <td><strong>Consecuencias</strong></td>
                      <td>Si decide no aceptar o bloquear determinadas Cookies (en función de su finalidad), puede que esto afecte, total o parcialmente, al funcionamiento normal de la Página Web o que impida el acceso a algunos servicios de la misma</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sección 4: ACTUALIZACIONES */}
            <div className="cookies-section">
              <h2 className="cookies-section-title">
                4. ACTUALIZACIONES Y CAMBIOS EN LA POLÍTICA DE COOKIES
              </h2>
              <p className="cookies-text">
                AFCacademia, S.L puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
              </p>
              <p className="cookies-text">
                Si desea más información sobre qué uso hacemos de las Cookies, puede enviarnos un e-mail a: <strong>info@afcademia.com</strong>
              </p>
            </div>

            <div className="cookies-footer">
              <div className="cookies-footer-badge">
                <p className="cookies-footer-text">
                  <strong>AFCacademia, S.L</strong> - Política de Cookies
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}