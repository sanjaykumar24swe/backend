const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username Is Required']
  },
  questions: {
    type: Array,
    default: []
  }
});
module.exports = mongoose.model('User', UserSchema);