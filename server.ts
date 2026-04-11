import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if email credentials are provided
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("Email credentials not configured. Logging message to console:");
      console.log(`From: ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`);
      return res.status(200).json({ 
        success: true, 
        message: "Message logged (Email service not configured).",
        debug: true 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_RECEIVER || "gunateja070@gmail.com",
        subject: `Portfolio Contact: ${subject || "New Message"}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
