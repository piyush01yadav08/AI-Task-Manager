
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'todo' },
  priority: String,
  deadline: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = mongoose.model('Task', schema);
