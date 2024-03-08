import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_RESEND_SENDER_EMAIL,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });

  return info;
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_RESEND_SENDER_EMAIL,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });

  return info;
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_RESEND_SENDER_EMAIL,
    to: email,
    subject: "OTP verification",
    html: `<p>Your 2FA OTP is ${token}</p>`,
  });

  return info;
};
