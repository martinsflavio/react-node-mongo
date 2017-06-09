const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  name : {
    type: String,
    default: ''
  },
  timestamp : {
    type: Date,
    default: Date.now
  },
  zipCodes : {
    type: Array,
    default: []
  }
});


module.exports = mongoose.model('Zones', ZoneSchema);