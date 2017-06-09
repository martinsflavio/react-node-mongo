const Zones  = require('../models/ZonesModel');


module.exports = {
  find (query, cb) {
    Zones.find(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  findById (id, cb) {
    Zones.findById(id, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  update (id, query, cb) {
    Zones.findByIdAndUpdate(id, {$set: {query}}, {new: true}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  create (query, cb) {
    let entry = new Zones(query);

    entry.save((err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  destroy (id, cb) {
    Zones.remove(id, (err, docs) => {
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
  }
  /////////////////////////
};
