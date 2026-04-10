const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  institution: { type: String, required: true },
  logo:        { type: String },
  link:        { type: String },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Certification', certificationSchema);
