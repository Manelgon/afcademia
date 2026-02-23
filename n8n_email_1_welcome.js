// Nodo Code para n8n: Email 1 - Bienvenida y Verificación (IA)
const item = $json;

// URL del banner guardado en Supabase Storage
const headerImageUrl = "https://tfwnekfuqxpnezbjcbpj.supabase.co/storage/v1/object/public/public_images/afcademia_header_email.png";

// Lógica para mostrar contenido extra si el lead especificó sus objetivos
const objetivoHtml = item.objetivo_automatizacion
    ? `<p>Además, he visto que te interesa especialmente: <em>"${item.objetivo_automatizacion}"</em>. Te enviaré un recurso extra sobre este punto justo después.</p>`
    : '';

// Generación del HTML para Gmail
const emailHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f7f9; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background-color: #ffffff; text-align: center; overflow: hidden; }
        .header img { width: 100%; max-width: 600px; height: auto; display: block; border: 0; }
        .content { padding: 40px 30px; }
        .highlight-box { background-color: #fef3c7; border-top: 4px solid #f97316; padding: 25px; margin: 25px 0; border-radius: 4px; }
        .footer { padding: 30px; text-align: center; background-color: #f9fafb; font-size: 14px; color: #9ca3af; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="https://afcademia.com" style="text-decoration: none;">
                <img src="${headerImageUrl}" alt="AFCademIA" border="0">
            </a>
        </div>
        <div class="content">
            <h2 style="color: #003865; margin-top: 0;">Hola ${item.nombre || 'Administrador'},</h2>
            <p>Es un placer saludarte. Hemos recibido tu solicitud desde <strong>${item.empresa_nombre || 'tu despacho'}</strong> para acceder a nuestra formación exclusiva sobre IA aplicada a la administración de fincas.</p>
            <p>Queremos asegurarnos de que eres una persona real y que realmente tienes interés en transformar tu despacho (con tus ${item.num_comunidades || 'múltiples'} comunidades) antes de enviarte el acceso directo.</p>
            <div class="highlight-box" style="text-align: center;">
                <p style="font-size: 18px; color: #003865; font-weight: 600; margin-bottom: 10px;">🚀 Para recibir ahora mismo el enlace a la clase gratuita, simplemente <strong>responde a este email</strong> con la palabra:</p>
                <h2 style="font-size: 48px; color: #f97316; margin: 10px 0; padding: 0; letter-spacing: 8px; font-weight: 900;">IA</h2>
            </div>
            <p>En cuanto recibamos tu respuesta, nuestro sistema te enviará automáticamente el vídeo de la sesión y el material adicional.</p>
            ${objetivoHtml}
            <p>Quedo a la espera de tu respuesta para enviarte todo el material.</p>
            <p style="margin-top: 30px;">Un saludo,<br><strong>El equipo de AFCademIA</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 AFCademIA. Todos los derechos reservados.</p>
            <p><a href="https://afcademia.com/privacidad#politica-privacidad-title" style="color: #f97316; text-decoration: none;">Política de Privacidad</a></p>
        </div>
    </div>
</body>
</html>
`;

return { emailHtml };
