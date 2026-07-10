import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendContactNotification } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const contact = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      },
    });

    // Send email notification (non-blocking - doesn't fail if email fails)
    sendContactNotification({ name, email, phone: phone || null, message })
      .then((sent) => {
        if (sent) console.log('Email notification sent for contact:', contact.id);
      })
      .catch((err) => console.error('Email notification failed:', err));

    return NextResponse.json(
      { success: true, message: 'Mensaje recibido correctamente', id: contact.id },
      { status: 201 }
    );
  } catch (e) {
    console.error('Contact API Error:', e);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
