const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  posting_url: {
    type: String,
    required: true
  },
  job_title: {
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
    type: Number
  },
  description: {
    type: String
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