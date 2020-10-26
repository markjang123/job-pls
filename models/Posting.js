const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  posting_url: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: truegi
  },
  description: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Posting = mongoose.model('posting', PostingSchema);