const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  category: { type: String, required: true }, // 'Data Science', 'Frontend', 'Backend'
  order:    { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
