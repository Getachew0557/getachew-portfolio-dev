const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Single admin login — credentials from .env
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email !== process.env.ADMIN_EMAIL)
    return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || '') ||
                password === process.env.ADMIN_PASSWORD;
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
  res.json({ token });
});

module.exports = router;
