const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  company:  { type: String, required: true },
  date:     { type: String, required: true },
  location: { type: String },
  tasks:    [{ type: String }],
  order:    { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
