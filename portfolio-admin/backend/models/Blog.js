const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  link:        { type: String },
  tag:         { type: String },
  date:        { type: String },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
