import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body as { name: string; email: string; message: string };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4a90e2;">📩 New Contact Message</h2>
        <p style="font-size: 16px;">You have received a new message from your portfolio contact form.</p>
        <div style="margin-top: 20px;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>✉️ Email:</strong> ${email}</p>
          <p><strong>💬 Message:</strong></p>
          <p style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #999;">This email was sent from your portfolio contact form.</p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Email error:', err);

    // Narrow the unknown error to get message safely
    const message =
      err instanceof Error ? err.message : 'Failed to send email';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
