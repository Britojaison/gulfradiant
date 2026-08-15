import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Send data to Google Sheets via Apps Script Web App
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzEHCyXeGU_YXbA4NCegzCAkigQPsta_5PDc1pw2RDqZ_0WRTK__yfOSoBLr-QCFOIazA/exec';

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (sheetErr) {
      console.error('Error forwarding data to Google Sheets:', sheetErr);
    }

    // 2. If EMAIL_PASS is configured, send email via Microsoft 365 SMTP
    if (process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.office365.com',
          port: 587,
          secure: false, // TLS
          auth: {
            user: process.env.EMAIL_USER || 'info@gulfradiant.com',
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
          },
        });

        await transporter.sendMail({
          from: `"Gulf Radiant Website" <${process.env.EMAIL_USER || 'info@gulfradiant.com'}>`,
          to: 'info@gulfradiant.com',
          replyTo: data.email || undefined,
          subject: `New Website Lead Submission - ${data.fullName || 'Unnamed Lead'}`,
          html: `
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
              <h2 style="color: #e04f35;">New Lead Submission Received</h2>
              <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 15px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Full Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.phone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Industry:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.industry || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Country:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.country || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Details:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.details || 'N/A'}</td></tr>
              </table>
              <p style="margin-top: 20px; font-size: 12px; color: #777;">This record has also been saved to your Google Sheet.</p>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error('Error sending email via Nodemailer:', mailErr);
      }
    }

    return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}

