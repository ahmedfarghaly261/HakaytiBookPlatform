const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../models/User');

// Configure your email transport (use your real credentials in production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'a.farghaly2621@gmail.com',
    pass: 'bpir duyv zeoh qrqm'
  }
});



async function sendResetEmail(email, token) {
  const resetUrl = `http://localhost:5173/reset-password/${token}`; // Adjust frontend URL as needed
  await transporter.sendMail({
    to: email,
    subject: 'Password Reset',
    html: `<p>You requested a password reset.</p><p>Click <a href="${resetUrl}">here</a> to reset your password. This link is valid for 1 hour.</p>`
  });
}

async function handleForgotPassword(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    // Always respond with success to prevent email enumeration
    return res.json({ message: 'If this email exists, a reset link has been sent.' });
  }
  const token = crypto.randomBytes(32).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();
  await sendResetEmail(email, token);
  res.json({ message: 'If this email exists, a reset link has been sent.' });
}

async function handleResetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });
  if (!user) {
    return res.status(400).json({ error: 'Invalid or expired token.' });
  }
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  res.json({ message: 'Password has been reset.' });
}

module.exports = { handleForgotPassword, handleResetPassword };
