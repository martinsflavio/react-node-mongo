const Zones  = require('../models/zonesModel');


module.exports = {
  find (query, cb) {
    Zones.find(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  findById (query, cb) {
    Zones.findById(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  update (query, update, cb) {
    Zones.findByIdAndUpdate(query, update, {new: true}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  create (query, cb) {
    let entry = new Zones(query);

    entry.save((err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  destroy (query, cb) {
    Zones.findOneAndRemove(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },

  // ERROR HANDLER
  errorHandler (err, docs, cb)  {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  },
  controller: 'Zones'
  /////////////////////////
};
