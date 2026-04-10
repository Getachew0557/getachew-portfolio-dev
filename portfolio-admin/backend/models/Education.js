const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  institution: { type: String, required: true },
  date:        { type: String, required: true },
  description: { type: String },
  type:        { type: String, enum: ['education', 'certification'], default: 'education' },
  logo:        { type: String },
  link:        { type: String },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
