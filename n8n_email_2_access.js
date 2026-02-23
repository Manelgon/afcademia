// Nodo Code para n8n: Email 2 - Acceso a la Clase (Video)
const item = $json;

// URLs de recursos en Supabase Storage
const videoUrl = "https://tfwnekfuqxpnezbjcbpj.supabase.co/storage/v1/object/public/public_images/AFCADEMIA_MOTION.mp4";
const headerImageUrl = "https://tfwnekfuqxpnezbjcbpj.supabase.co/storage/v1/object/public/public_images/afcademia_header_email.png";

// Generación del HTML para el envío de la clase
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
        .cta-box { background-color: #f8fafc; border: 2px dashed #cbd5e1; padding: 30px; margin: 25px 0; text-align: center; border-radius: 12px; }
        .button { 
            display: inline-block; 
            padding: 18px 36px; 
            background-color: #f97316; 
            color: #ffffff !important; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: bold; 
            font-size: 18px;
            box-shadow: 0 4px 6px rgba(249, 115, 22, 0.2);
        }
        .footer { padding: 30px; text-align: center; background-color: #f9fafb; font-size: 14px; color: #9ca3af; }
        .footer a { color: #f97316; text-decoration: none; }
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
            <h2 style="color: #003865; margin-top: 0;">¡Acceso Concedido!</h2>
            <p>Hola ${item.nombre}, gracias por verificar tu interés. Tal y como prometimos, aquí tienes tu pase para la sesión exclusiva sobre Inteligencia Artificial aplicada a la administración de fincas.</p>
            <p>En esta clase veremos cómo casos reales de despachos con un volumen similar al de <strong>${item.empresa_nombre}</strong> (${item.num_comunidades} comunidades) están ahorrando horas de trabajo administrativo cada día.</p>
            <div class="cta-box">
                <p style="margin-top: 0; font-weight: 600; color: #475569;">Haz clic debajo para ver la clase ahora:</p>
                <a href="${videoUrl}" class="button">Ver Clase Gratuita 🎥</a>
            </div>
            <p><strong>Lo que aprenderás en este video:</strong></p>
            <ul style="color: #4b5563;">
                <li>Automatización de comunicaciones con propietarios.</li>
                <li>Gestión inteligente de incidencias mediante IA.</li>
                <li>Reducción del estrés operativo en juntas y actas.</li>
            </ul>
            <p>Después de ver el video, si crees que esto puede escalar tu despacho, estaré encantado de que hablemos sobre cómo implementarlo específicamente para ti.</p>
            <p style="margin-top: 30px;">Disfruta de la sesión,<br><strong>El equipo de AFCademIA</strong></p>
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
