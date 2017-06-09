const Comments  = require('../models/CommentsModel');


module.exports = {
  find (query, cb) {
    Comments.find(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  findById (id, cb) {
    Comments.findById(id, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  update (id, query, cb) {
    Comments.findByIdAndUpdate(id, {$set: {query}}, {new: true}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  create (query, cb) {
    let entry = new Comments(query);

    entry.save((err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  destroy (id, cb) {
    Comments.remove(id, (err, docs) => {
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
