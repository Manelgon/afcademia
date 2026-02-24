import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    despacho: '',
    comunidades: '',
    automatizar: '',
    acepto: false,
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormLocked, setIsFormLocked] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({
    email: null,
    telefono: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6789]\d{8}$/;

    // Validación en tiempo real (solo si hay contenido)
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value.trim() === '' ? null : (emailRegex.test(value) ? null : 'El email no es válido')
      }));
    }

    if (name === 'telefono') {
      // Limpiar teléfono para validación
      const cleanedPhone = value.replace(/\s|-|\(|\)|\+/g, '').replace(/^34/, '');
      setErrors(prev => ({
        ...prev,
        telefono: cleanedPhone === '' ? null : (phoneRegex.test(cleanedPhone) ? null : 'Debe ser un número español de 9 dígitos')
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // ---- HONEYPOT (anti bots) ----
    if (formData.website && formData.website.trim() !== '') {
      setSubmitStatus('bot-detected');
      setIsSubmitting(false);
      return;
    }

    // ---- LÍMITE POR IP ----
    const attempts = Number(localStorage.getItem('afc_attempts') || 0);
    const lastAttempt = Number(localStorage.getItem('afc_last_attempt') || 0);

    if (attempts >= 3 && Date.now() - lastAttempt < 60000) {
      setSubmitStatus('too-many');
      setIsSubmitting(false);
      return;
    }

    // actualizar intentos
    localStorage.setItem('afc_attempts', attempts + 1);
    localStorage.setItem('afc_last_attempt', Date.now());

    // ---- VALIDACIÓN EMAIL Y TELÉFONO ----
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6789]\d{8}$/;

    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('invalid-email');
      setIsSubmitting(false);
      return;
    }

    // Limpiar teléfono: quitar espacios, guiones y prefijo +34
    const cleanedPhone = formData.telefono.replace(/\s|-|\(|\)|\+/g, '').replace(/^34/, '');

    if (!phoneRegex.test(cleanedPhone)) {
      setSubmitStatus('invalid-phone');
      setIsSubmitting(false);
      return;
    }

    // ---- ENVÍO A SUPABASE (3 Tablas) ----
    try {
      // 1. Insertar en 'leads'
      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .insert([{
          nombre: formData.nombre,
          email: formData.email,
          whatsapp: cleanedPhone,
          empresa_nombre: formData.despacho,
          source: 'AFC Landing Page'
        }])
        .select()
        .single();

      if (leadError) {
        // Si el error es por email duplicado, intentamos obtener el lead existente
        if (leadError.code === '23505') {
          const { data: existingLead } = await supabase
            .from('leads')
            .select('id')
            .eq('email', formData.email)
            .single();

          if (!existingLead) throw leadError;
          var leadId = existingLead.id;
        } else {
          throw leadError;
        }
      } else {
        var leadId = lead.id;
      }

      // 2. Insertar en 'segmentacion_despacho'
      const { error: segError } = await supabase
        .from('segmentacion_despacho')
        .upsert([{
          lead_id: leadId,
          num_comunidades: formData.comunidades,
          objetivo_automatizacion: formData.automatizar
        }], { onConflict: 'lead_id' });

      if (segError) console.error('Error en segmentación:', segError);

      // 3. Insertar en 'flujos_embudo'
      const { error: flujoError } = await supabase
        .from('flujos_embudo')
        .insert([{
          lead_id: leadId,
          nombre_flujo: 'formulario web',
          status_actual: 'nuevo',
          actividad: 'lead_inactivo',
          tags_proceso: ['nuevo']
        }]);

      if (flujoError) console.error('Error en flujo:', flujoError);

      // éxito total
      setSubmitStatus('success');
      setIsFormLocked(true);
      localStorage.setItem('afc_attempts', 0);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        despacho: '',
        comunidades: '',
        automatizar: '',
        acepto: false,
        website: ''
      });

    } catch (err) {
      console.error('Error al procesar el registro:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        /* Resetear estilos que interfieren desde CSS global */
        .afc-form-container * {
          box-sizing: border-box;
        }
        .afc-form-container input,
        .afc-form-container select,
        .afc-form-container button {
          font-family: inherit;
          font-size: inherit;
          border: none;
          margin: 0;
          padding: 0;
        }
        .afc-main-grid {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
          align-items: center !important;
        }
        @media (min-width: 1024px) {
          .afc-main-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .afc-text-section {
          text-align: center !important;
        }
        @media (min-width: 1024px) {
          .afc-text-section {
            text-align: left !important;
          }
        }
        .afc-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem) !important;
          font-weight: bold !important;
          margin-bottom: 2rem !important;
          line-height: 1.2 !important;
        }
        @media (min-width: 1024px) {
          .afc-title {
            font-size: 2.75rem !important;
          }
        }
        .afc-benefits-list {
          list-style: none !important;
          margin: 0 auto !important;
          max-width: 600px !important;
        }
        @media (min-width: 1024px) {
          .afc-benefits-list {
            margin: 0 !important;
            max-width: none !important;
          }
        }
        .afc-benefit-item {
          display: flex !important;
          align-items: flex-start !important;
          gap: 1rem !important;
          margin-bottom: 1.5rem !important;
          text-align: left !important;
          justify-content: center !important;
        }
        @media (min-width: 1024px) {
          .afc-benefit-item {
            justify-content: flex-start !important;
          }
        }
        .afc-benefit-text {
          font-size: 1.125rem !important;
        }
        .afc-form-wrapper {
          max-width: 500px !important;
          margin: 0 auto !important;
          background: white !important;
          border-radius: 16px !important;
          padding: 2rem !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.25) !important;
        }
        @media (min-width: 1024px) {
          .afc-form-wrapper {
            max-width: none !important;
            margin: 0 !important;
          }
        }
        .afc-form-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 1rem !important;
        }
        @media (max-width: 640px) {
          .afc-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .afc-form-full-width {
          grid-column: 1 / -1 !important;
        }
        .afc-input {
          width: 100% !important;
          padding: 12px 16px !important;
          border: 2px solid #d1d5db !important;
          border-radius: 8px !important;
          background: white !important;
          color: #111827 !important;
          font-size: 14px !important;
          transition: all 0.2s ease !important;
        }
        .afc-input:focus {
          outline: none !important;
          border-color: #f97316 !important;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1) !important;
        }
        .afc-input::placeholder {
          color: #6b7280 !important;
        }
        .afc-button {
          width: 100% !important;
          padding: 16px 24px !important;
          background: #f97316 !important;
          color: white !important;
          border: none !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
        }
        .afc-button:hover {
          background: #ea580c !important;
        }
        .afc-button:disabled {
          background: #fed7aa !important;
          cursor: not-allowed !important;
        }
      `}</style>

      <section
        id="clase-gratuita"
        className="py-16 lg:py-20"
        style={{
          background: 'linear-gradient(135deg, #003865 0%, #2C6DA4 100%)',
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div className="afc-main-grid">

            {/* Texto y beneficios */}
            <div className="afc-text-section">
              <h2 className="afc-title">
                Descubre <span style={{ color: '#f97316' }}>AFCacademIA</span> sin compromiso
              </h2>
              <ul className="afc-benefits-list">
                <li className="afc-benefit-item">
                  <span style={{ color: '#fb923c', fontSize: '1.5rem', flexShrink: '0' }}>
                    <i className="fas fa-video"></i>
                  </span>
                  <span className="afc-benefit-text">
                    <strong>Demo en vivo</strong> con ejemplos reales adaptados a tu sector.
                  </span>
                </li>
                <li className="afc-benefit-item">
                  <span style={{ color: '#fb923c', fontSize: '1.5rem', flexShrink: '0' }}>
                    <i className="fas fa-chart-bar"></i>
                  </span>
                  <span className="afc-benefit-text">
                    <strong>Evaluación personalizada</strong> de oportunidades de mejora.
                  </span>
                </li>
                <li className="afc-benefit-item">
                  <span style={{ color: '#fb923c', fontSize: '1.5rem', flexShrink: '0' }}>
                    <i className="fas fa-handshake"></i>
                  </span>
                  <span className="afc-benefit-text">
                    <strong>Sin presión comercial</strong>: información clara y sin compromiso.
                  </span>
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <div className="afc-form-wrapper">
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                textAlign: 'center',
                color: '#1e3a8a'
              }}>
                Solicita tu clase gratuita
              </h3>

              <div className="afc-form-container">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Honeypot - campo oculto anti-bots */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website || ''}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="afc-form-grid">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo *"
                      className="afc-input"
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={isSubmitting || isFormLocked}
                      required
                    />

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        className="afc-input"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting || isFormLocked}
                        required
                        style={{
                          borderColor: errors.email ? '#dc2626' : undefined
                        }}
                      />
                      {errors.email && (
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#dc2626',
                          marginTop: '0.25rem',
                          marginBottom: 0
                        }}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono *"
                        className="afc-input"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={isSubmitting || isFormLocked}
                        required
                        style={{
                          borderColor: errors.telefono ? '#dc2626' : undefined
                        }}
                      />
                      {errors.telefono && (
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#dc2626',
                          marginTop: '0.25rem',
                          marginBottom: 0
                        }}>
                          {errors.telefono}
                        </p>
                      )}
                    </div>

                    <input
                      type="text"
                      name="despacho"
                      placeholder="Nombre del despacho"
                      className="afc-input"
                      value={formData.despacho}
                      onChange={handleChange}
                      disabled={isSubmitting || isFormLocked}
                    />

                    <select
                      name="comunidades"
                      className="afc-input afc-form-full-width"
                      value={formData.comunidades}
                      onChange={handleChange}
                      disabled={isSubmitting || isFormLocked}
                    >
                      <option value="">¿Cuántas comunidades gestionas?</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="50+">50+</option>
                    </select>

                    <input
                      type="text"
                      name="automatizar"
                      placeholder="¿Qué te gustaría automatizar primero?"
                      className="afc-input afc-form-full-width"
                      value={formData.automatizar}
                      onChange={handleChange}
                      disabled={isSubmitting || isFormLocked}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <input
                      type="checkbox"
                      name="acepto"
                      checked={formData.acepto}
                      onChange={handleChange}
                      disabled={isSubmitting || isFormLocked}
                      required
                      style={{
                        marginTop: '4px',
                        width: '16px',
                        height: '16px',
                        accentColor: '#f97316'
                      }}
                    />
                    <label style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.4' }}>
                      Acepto la <a href="/privacidad" style={{ color: '#f97316', textDecoration: 'underline' }}>política de privacidad</a> *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isFormLocked}
                    className="afc-button"
                    style={{ marginTop: '1rem' }}
                  >
                    {isSubmitting ? 'Enviando...' : isFormLocked ? 'Enviado' : 'Solicitar Clase Gratuita'}
                  </button>

                  <p style={{
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    color: '#9ca3af',
                    marginTop: '0.5rem'
                  }}>
                    Respuesta en menos de 24h. Sin compromiso.
                  </p>

                  {submitStatus === 'success' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#059669',
                      fontWeight: '600',
                      background: '#d1fae5',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      ¡Gracias! Te contactaremos pronto.
                    </div>
                  )}

                  {submitStatus === 'invalid-email' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#dc2626',
                      fontWeight: '600',
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      Por favor introduce un email válido.
                    </div>
                  )}

                  {submitStatus === 'invalid-phone' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#dc2626',
                      fontWeight: '600',
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      El teléfono debe ser español y tener 9 dígitos.
                    </div>
                  )}

                  {submitStatus === 'bot-detected' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#dc2626',
                      fontWeight: '600',
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      No se pudo procesar la solicitud. (Código B01)
                    </div>
                  )}

                  {submitStatus === 'too-many' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#dc2626',
                      fontWeight: '600',
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      Has enviado demasiadas solicitudes. Espera 1 minuto.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div style={{
                      textAlign: 'center',
                      color: '#dc2626',
                      fontWeight: '600',
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}>
                      Ha ocurrido un error. Por favor, inténtalo de nuevo.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
