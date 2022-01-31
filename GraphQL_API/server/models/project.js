const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  description: String,
  tasks: Array,
});

module.exports = mongoose.model('Project', projectSchema);
