// api/sendMail.js
const nodemailer = require('nodemailer');

export default async function (req, res) {
  const { name, email, message } = req.body;

  // Configurar o transportador de email (você pode usar o Gmail, SendGrid, etc.)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro serviço SMTP
    auth: {
      user: 'galudisson.gl@gmail.com',
      pass: 'Naosei_87#', // ou uma senha de app
    },
  });

  // Configurar o conteúdo do email
  let mailOptions = {
    from: email,
    to: 'm.vinicius.sr11@gmail.com',
    subject: `Nova mensagem de ${name}`,
    text: `Nome: ${name}; email: ${email}; <br> "${message}"`,
  };

  try {
    // Enviar o email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
}
