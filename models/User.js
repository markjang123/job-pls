const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    followed_users: [{
      type: Schema.Types.ObjectId,
      ref: 'users'
    }],
    following_users: [{
      type: Schema.Types.ObjectId,
      ref: 'users'
    }],
    followed_posting: [{
      type: String,
      ref: 'postings'
    }]
  },
   {
    timestamps: true
  })

const User = mongoose.model('User', UserSchema);
module.exports = User;