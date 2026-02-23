# Tareas Pendientes: Optimización de Formulario y CRM

- [ ] **Añadir campo 'Ciudad'**: Incluir un input en `Contact.jsx` para capturar la ubicación del despacho y guardarlo en `leads.ciudad`.
- [ ] **Añadir ID de 'Interés Fundae'**: Implementar un checkbox para saber si el lead está interesado en formación bonificada (tabla `segmentacion_despacho`).
- [ ] **Integrar Webhook con Schema**: Asegurar que la automatización (Make/Zapier) mapea los nuevos campos y estados (`status_actual: nuevo`, `nombre_flujo: formulario web`).
- [ ] **Automatizar Etiquetas (Tags)**: Configurar Make para añadir etiquetas al array `tags_proceso` según el evento:
    *   `email_enviado`: Al disparar el primer correo.
    *   `respondido`: Si detecta respuesta al email/keyword.
    *   `no_responde`: Después de X días sin interacción.
- [ ] **Validación de Schema**: Verificar que el archivo `schema.sql` se ha ejecutado correctamente en el SQL Editor de Supabase.
