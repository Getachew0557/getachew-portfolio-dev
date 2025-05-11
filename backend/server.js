require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const sanitizeHtml = require('sanitize-html');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ 
  origin: process.env.CLIENT_URL,
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Rate limiting (5 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests from this IP, please try again later'
});
app.use('/api/contact', limiter);

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Only for development, remove in production
  }
});

// Validation middleware
const validateContactInput = (req, res, next) => {
  const { email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (message.length < 10 || message.length > 1000) {
    return res.status(400).json({ error: 'Message must be between 10 and 1000 characters' });
  }

  next();
};

// Contact endpoint
app.post('/api/contact', validateContactInput, async (req, res) => {
  try {
    const { email, message } = req.body;

    // Sanitize input
    const cleanMessage = sanitizeHtml(message, {
      allowedTags: [],
      allowedAttributes: {}
    });

    const mailOptions = {
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Message from Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <p><strong style="color: #374151;">From:</strong> ${sanitizeHtml(email)}</p>
          <p><strong style="color: #374151;">Message:</strong></p>
          <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;">
            ${cleanMessage}
          </div>
          <p style="margin-top: 1rem; color: #6b7280; font-size: 0.875rem;">
            Sent from your portfolio website
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});