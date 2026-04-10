const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  images:      [{ type: String }],
  github:      { type: String },
  live:        { type: String },
  video:       { type: String },
  tags:        [{ type: String }],
  order:       { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
