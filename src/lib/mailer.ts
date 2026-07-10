import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
});

interface ContactEmailData {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}

export async function sendContactNotification(data: ContactEmailData): Promise<boolean> {
  try {
    if (!process.env.MAILERSEND_API_KEY) {
      console.warn("MAILERSEND_API_KEY not configured, skipping email notification");
      return false;
    }

    const sentFrom = new Sender("ventas@facirepuestos.com.co", "FaciRepuestos Web");

    const recipients = [new Recipient("ventas@facirepuestos.com.co", "Ventas FaciRepuestos")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`Nuevo mensaje de contacto - ${data.name}`)
      .setHtml(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #d32f2f; padding: 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; }
            .content { padding: 24px; }
            .field { margin-bottom: 16px; }
            .field-label { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #666; margin-bottom: 4px; }
            .field-value { font-size: 14px; color: #333; background: #f9f9f9; padding: 8px 12px; border-radius: 4px; }
            .footer { background: #1a1a2e; padding: 16px; text-align: center; }
            .footer p { color: #999; font-size: 11px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📩 Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nombre</div>
                <div class="field-value">${escapeHtml(data.name)}</div>
              </div>
              <div class="field">
                <div class="field-label">Correo Electrónico</div>
                <div class="field-value">${escapeHtml(data.email)}</div>
              </div>
              <div class="field">
                <div class="field-label">Teléfono</div>
                <div class="field-value">${escapeHtml(data.phone || "No especificado")}</div>
              </div>
              <div class="field">
                <div class="field-label">Mensaje</div>
                <div class="field-value">${escapeHtml(data.message)}</div>
              </div>
            </div>
            <div class="footer">
              <p>Facirepuestos S.A.S. — Medellín, Colombia</p>
            </div>
          </div>
        </body>
        </html>
      `)
      .setText(
        `Nuevo mensaje de contacto\n\nNombre: ${data.name}\nCorreo: ${data.email}\nTeléfono: ${data.phone || "No especificado"}\nMensaje: ${data.message}\n\nFacirepuestos S.A.S.`
      );

    await mailerSend.email.send(emailParams);
    console.log("Contact notification email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending contact notification email:", error);
    return false;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
