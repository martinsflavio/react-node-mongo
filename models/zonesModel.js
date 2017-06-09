const mongoose = require('../db/mongoDB');

const ZoneSchema = new mongoose.Schema({
  name : {
    type: String,
    default: ''
  },
  zipCodes : {
    type: Array,
    default: []
  },
  timestamp : {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Zones', ZoneSchema);