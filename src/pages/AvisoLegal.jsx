import { useEffect } from 'react';
import './AvisoLegal.css';

export default function AvisoLegal() {
  useEffect(() => {
    // Hacer scroll al título cuando se carga la página
    const titleElement = document.getElementById('aviso-legal-title');
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
      <section className="legal-hero">
        <div>
          <h1 id="aviso-legal-title">Aviso Legal</h1>
          <p>Información legal y condiciones de uso del sitio web</p>
          <div className="legal-badge">
            <span>Última actualización: Enero 2025</span>
          </div>
        </div>
      </section>

      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-content">
            
            {/* Información Legal y Aceptación */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                1. Información legal y aceptación
              </h2>
              <p className="legal-text-intro">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
                de la Información y Comercio Electrónico, a continuación se exponen los datos identificativos de la empresa:
              </p>
              
              <div className="legal-table-container">
                <table className="legal-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Denominación Social</strong></td>
                      <td>AFCacademia, S.L</td>
                    </tr>
                    <tr>
                      <td><strong>C.I.F.</strong></td>
                      <td>B09915075</td>
                    </tr>
                    <tr>
                      <td><strong>Domicilio Social</strong></td>
                      <td>Pasaje Pezuela, 1, 1º A Derecha, 29010 Málaga</td>
                    </tr>
                    <tr>
                      <td><strong>Teléfono</strong></td>
                      <td>951 44 71 53</td>
                    </tr>
                    <tr>
                      <td><strong>Email</strong></td>
                      <td>info@afcademia.com</td>
                    </tr>
                    <tr>
                      <td><strong>Datos registrales</strong></td>
                      <td>Registro Mercantil de Málaga, Tomo 6153, Libro 5060, Folio 141, Sección 8, Hoja MA166508, Inscripción 1ª (30.03.22)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="legal-text">
                El presente aviso legal recoge las condiciones generales que rigen el acceso y el uso de este sitio web. 
                El uso del sitio web implica la expresa y plena aceptación de estas condiciones generales en la versión 
                publicada en el momento en que el usuario acceda al mismo.
              </p>
            </div>

            {/* Propiedad Intelectual e Industrial */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                2. Propiedad intelectual e industrial
              </h2>
              <p className="legal-text-intro">
                Este sitio web y los contenidos que alberga se encuentran protegidos por la legislación vigente 
                en materia de propiedad intelectual.
              </p>
              
              <div className="legal-table-container">
                <table className="legal-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Derechos Protegidos</strong></td>
                      <td>AFCacademia, S.L es titular o licenciatario de todos los derechos de propiedad intelectual e industrial de su web, así como de los elementos contenidos en la misma. Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos de esta web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Condiciones de Uso */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                3. Condiciones de uso del portal
              </h2>
              
              <div className="legal-table-container">
                <table className="legal-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>3.1 General</strong></td>
                      <td>El Usuario se obliga a hacer un uso correcto del Portal de conformidad con la Ley y el presente Aviso Legal. El Usuario responderá frente a AFCacademia, S.L o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.</td>
                    </tr>
                    <tr>
                      <td><strong>3.2 Contenidos</strong></td>
                      <td>El Usuario se compromete a utilizar los Contenidos de conformidad con la Ley y el presente Aviso Legal, así como con las demás condiciones, reglamentos e instrucciones que en su caso pudieran ser de aplicación.</td>
                    </tr>
                    <tr>
                      <td><strong>Prohibiciones</strong></td>
                      <td>Reproducir, copiar, distribuir, poner a disposición, comunicar públicamente, transformar o modificar los Contenidos salvo en los casos autorizados en la ley.</td>
                    </tr>
                    <tr>
                      <td><strong>Bases de datos</strong></td>
                      <td>Extraer y/o reutilizar la totalidad o una parte sustancial de los Contenidos integrantes del Portal así como de las bases de datos que AFCacademia, S.L ponga a disposición de los Usuarios.</td>
                    </tr>
                    <tr>
                      <td><strong>3.3 Enlaces al Portal</strong></td>
                      <td>El usuario de Internet que quiera introducir enlaces desde sus propias páginas web al Portal deberá cumplir con las condiciones específicas establecidas en este documento.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exclusión de Responsabilidad */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                4. Exclusión de responsabilidad
              </h2>
              
              <div className="legal-table-container">
                <table className="legal-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>4.1 De la Información</strong></td>
                      <td>AFCacademia, S.L no se responsabiliza de las decisiones tomadas a partir de la información suministrada en el Portal ni de los daños y perjuicios producidos en el Usuario o terceros con motivo de actuaciones que tengan como único fundamento la información obtenida en el Portal.</td>
                    </tr>
                    <tr>
                      <td><strong>4.2 Calidad del servicio</strong></td>
                      <td>El acceso al Portal no implica la obligación por parte de AFCacademia, S.L de controlar la ausencia de virus, gusanos o cualquier otro elemento informático dañino. Corresponde al Usuario, en todo caso, la disponibilidad de herramientas adecuadas para la detección y desinfección de programas informáticos dañinos.</td>
                    </tr>
                    <tr>
                      <td><strong>4.3 Disponibilidad del Servicio</strong></td>
                      <td>Los servicios proveídos a través del Portal pueden ser suspendidos, cancelados o resultar inaccesibles, con carácter previo o simultáneo a la prestación del servicio del Portal, debido a servicios y suministros de terceros necesarios para su funcionamiento.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comunicación de Actividades Ilícitas */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                5. Comunicación de actividades de carácter ilícito e inadecuado
              </h2>
              <p className="legal-text">
                En el caso de que el Usuario o cualquier otro usuario de Internet tuvieran conocimiento de que los Sitios 
                Enlazados remiten a páginas cuyos contenidos o servicios son ilícitos, nocivos, denigrantes, violentos 
                o contrarios a la moral podrá ponerse en contacto con AFCacademia, S.L.
              </p>
            </div>

            {/* Modificaciones */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                7. Modificaciones
              </h2>
              <p className="legal-text">
                AFCacademia, S.L se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
                oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten 
                a través de la misma como la forma en la que éstos aparezcan presentados.
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                8. Redes Sociales
              </h2>
              <p className="legal-text">
                AFCacademia, S.L está presente en diversas redes sociales y plataformas, por lo tanto, cuando se accede 
                a cualquiera de estas u otras redes, habrá que tener en cuenta que las condiciones de uso aplicables 
                son las que cada plataforma tiene establecidas.
              </p>
            </div>

            {/* Legislación */}
            <div className="legal-section">
              <h2 className="legal-section-title">
                9. Legislación
              </h2>
              <p className="legal-text">
                El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española. Siempre y cuando 
                la Ley aplicable permita la renuncia al fuero legal establecido, se designa como fuero para dirimir posibles 
                disputas, los juzgados de Málaga, renunciando expresamente el usuario a cualquier otro fuero que pudiera corresponder.
              </p>
            </div>

            <div className="legal-footer">
              <div className="legal-footer-badge">
                <p className="legal-footer-text">
                  <strong>AFCacademia, S.L</strong> - Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}