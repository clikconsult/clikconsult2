import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.clikconsult.com.ng',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Clikconsult Website" <contact@clikconsult.com.ng>`,
      to: 'contact@clikconsult.com.ng',
      subject: `New newsletter signup: ${email}`,
      text: `New newsletter subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return res.status(500).json({ error: 'Failed to submit' });
  }
}