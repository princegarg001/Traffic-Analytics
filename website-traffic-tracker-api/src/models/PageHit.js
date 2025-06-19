const mongoose = require('mongoose');

const PageHitSchema = new mongoose.Schema({
  url: String,
  timestamp: { type: Date, default: Date.now },
  referrer: String,
  ip: String,
  visitorId: String,
  websiteId: String,
  geo: Object
});

module.exports = mongoose.model('PageHit', PageHitSchema);