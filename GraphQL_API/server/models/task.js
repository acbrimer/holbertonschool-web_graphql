const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  description: String,
});

module.exports = mongoose.model('Task', taskSchema);
