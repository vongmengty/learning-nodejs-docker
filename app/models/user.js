const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
      type: String,
      trim: true,
      required: true
  },
  gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: [true, 'gender is required!']
  },
  phone:  String,
  email: {
      type: String,
      lowercase: true,
      trim: true
  }
});
const User = mongoose.model('user', UserSchema);
module.exports = User;