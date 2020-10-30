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
    type: String  
  },
  salary: {
    type: String
  },
  description: {
    type: String
  },
  location: {
    type: String
  },
  snippet: {
    type: String
  },
  source: {
    type: String
  },
  type: {
    type: String
  },
  link: {
    type: String
  },
  created_at: {
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