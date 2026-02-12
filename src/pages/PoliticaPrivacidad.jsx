import { useEffect } from 'react';
import './PoliticaPrivacidad.css';

export default function PoliticaPrivacidad() {
  useEffect(() => {
    // Hacer scroll al título cuando se carga la página
    const titleElement = document.getElementById('politica-privacidad-title');
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
      <section className="privacy-hero">
        <div>
          <h1 id="politica-privacidad-title">Derechos de Protección de Datos</h1>
          <p>Información sobre los derechos de los usuarios en materia de protección de datos</p>
          <div className="privacy-badge">
            <span>Última actualización: Enero 2025</span>
          </div>
        </div>
      </section>

      <main className="privacy-main">
        <div className="privacy-container">
          <div className="privacy-content">
              <div className="privacy-section">
                <p className="privacy-text">
                  La normativa de protección de datos recoge una serie de derechos a los que pueden acogerse todas las personas. 
                  AFCacademia, para facilitar su ejercicio, le informa de los diferentes derechos, su contenido, procedimientos, 
                  plazos y le aporta los modelos que podrá utilizar en su ejercicio.
                </p>
              </div>

              <div className="privacy-table-container">
                <h3>¡IMPORTANTE! INFORMACIÓN A LOS PROPIETARIOS DE LAS COMUNIDADES QUE ADMINISTRAMOS</h3>
                <table className="privacy-table text-table">
                  <tbody>
                    <tr>
                      <td><strong>Responsable del tratamiento</strong></td>
                      <td>La condición de responsable del tratamiento recae sobre la comunidad de propietarios</td>
                    </tr>
                    <tr>
                      <td><strong>Administrador de fincas</strong></td>
                      <td>El administrador de fincas de una determinada comunidad de propietarios, desarrolla únicamente las actividades que le atribuye la LPH, en concepto de encargado de tratamiento</td>
                    </tr>
                    <tr>
                      <td><strong>Ejercicio de derechos</strong></td>
                      <td>Por lo que cualquier derecho ejercido por los propietarios, deberá dirigirse a la comunidad. Si lo ejercen ante el administrador le daremos traslado a la comunidad, que es a quien corresponde responder</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">
                  Es común a todos los derechos:
                </h2>
                <div className="privacy-table-container">
                  <table className="privacy-table text-table">
                    <tbody>
                      <tr>
                        <td><strong>Ejercicio gratuito</strong></td>
                        <td>Su ejercicio es gratuito, salvo si las solicitudes son manifiestamente infundadas o excesivas</td>
                      </tr>
                      <tr>
                        <td><strong>Plazo de respuesta</strong></td>
                        <td>Las solicitudes deben responderse en el plazo de un mes, aunque, si se tiene en cuenta la complejidad y número de solicitudes, se puede prorrogar el plazo otros dos meses más</td>
                      </tr>
                      <tr>
                        <td><strong>Medio de ejercicio</strong></td>
                        <td>En todas nuestras cláusulas y Registros de Actividades recogemos el medio para ejercer los derechos</td>
                      </tr>
                      <tr>
                        <td><strong>Ejercicio directo</strong></td>
                        <td>Puedes ejercer los derechos directamente o por medio de tu representante legal o voluntario</td>
                      </tr>
                      <tr>
                        <td><strong>Edad requerida</strong></td>
                        <td>La edad como norma general, para el ejercicio de los derechos son los catorce años, aunque en cuestiones como la salud serán los dieciséis años (salvo que una ley exija otra edad)</td>
                      </tr>
                      <tr>
                        <td><strong>Personas fallecidas</strong></td>
                        <td>Respecto a las personas fallecidas, aquéllas vinculadas al fallecido por razones familiares o, de hecho, así como sus herederos podrán ejercer sus derechos de acceso, rectificación y supresión, salvo que el fallecido lo hubiera prohibido expresamente o una ley lo establezca</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">
                  ¿Cómo ejerzo los derechos de protección de datos cuando AFCacademia sea Responsable del Tratamiento?
                </h2>
                <div className="privacy-table-container">
                  <table className="privacy-table text-table">
                    <tbody>
                      <tr>
                        <td><strong>Petición por escrito</strong></td>
                        <td>Petición por escrito a AFCacademia, por cualquiera de los medios admitidos en derecho</td>
                      </tr>
                      <tr>
                        <td><strong>Identificación</strong></td>
                        <td>Identificación (fotocopia del DNI o pasaporte u otro documento válido para identificar a la persona, cuando existan dudas razonables)</td>
                      </tr>
                      <tr>
                        <td><strong>Representación</strong></td>
                        <td>Si actúa representado, copia de la representación e identificación del representante (fotocopia del DNI o pasaporte u otro documento válido para identificar a la persona, cuando existan dudas razonables)</td>
                      </tr>
                      <tr>
                        <td><strong>Derecho ejercitado</strong></td>
                        <td>Derecho que ejercita, y en la medida de lo posible concreción en su petición</td>
                      </tr>
                      <tr>
                        <td><strong>Datos de contacto</strong></td>
                        <td>Dirección a efectos de notificaciones, fecha y firma</td>
                      </tr>
                      <tr>
                        <td><strong>Documentación</strong></td>
                        <td>Documentos (si es necesario) que justifiquen el ejercicio de derechos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">
                  Contenido de los Derechos para cuando AFCacademia sea Responsable del Tratamiento:
                </h2>
                
                <div className="privacy-table-container">
                  <table className="privacy-table text-table">
                    <tbody>
                      <tr>
                        <td><strong>Derecho de Acceso</strong></td>
                        <td>Supone que cualquier persona tenga derecho a dirigirse al Responsable, para conocer en primer lugar si estamos tratando o no sus datos personales y, de hacerlo, a obtener información sobre los fines, destinatarios, plazo de conservación y la existencia de otros derechos.</td>
                      </tr>
                      <tr>
                        <td><strong>Derecho de Rectificación</strong></td>
                        <td>Supone que cualquier persona de las que el Responsable realiza un tratamiento de datos, pueda obtener la rectificación de sus datos. En la petición que realice deberá indicar los datos que quiere que sean rectificados, debiendo acompañarse, cuando sea necesario, la documentación que justifique la inexactitud de los mismos o el carácter incompleto.</td>
                      </tr>
                      <tr>
                        <td><strong>Derecho de Supresión</strong></td>
                        <td>Cualquier persona de la que el Responsable realiza un tratamiento de datos, puede ejercer este derecho siempre que se den determinadas circunstancias como que los datos ya no sean necesarios, se retire el consentimiento, o el tratamiento sea ilícito. (Derecho al olvido)</td>
                      </tr>
                      <tr>
                        <td><strong>Derecho de Oposición</strong></td>
                        <td>Supone que aquellas personas de las que el Responsable trata datos personales, puedan oponerse a dicho tratamiento, especialmente cuando sea para mercadotecnia directa o se base en interés legítimo.</td>
                      </tr>
                      <tr>
                        <td><strong>Derecho a la Portabilidad</strong></td>
                        <td>Permite recibir los datos en un formato estructurado y de uso común, así como transmitirlos a otro responsable del tratamiento, cuando el tratamiento se base en el consentimiento o en un contrato.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="privacy-footer">
                <div className="privacy-footer-badge">
                  <p className="privacy-footer-text">
                    <strong>Fuente:</strong> Agencia Española de Protección de Datos
                  </p>
                </div>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
