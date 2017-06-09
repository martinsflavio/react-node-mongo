const express = require('express'),
      router  = express.Router();

const controllers = require('../controllers');


/* GET */
router.get('/:resource', (req, res, next) => {
  let resource = req.params.resource;
  let controller = controllers[resource];

  // validate resource request
  if (controller === undefined) {
    // TODO CHECK IF IS OK THIS FORMAT
    return res.status(500).json({
      message: 'fail',
      err: `Invalid resource request : ${resource}`
    });
  }

  if (req.query._id !== undefined) {
    controller.findById(req.query._id, (err, results) => {
      if (err) {
        return res.status(500).json({message:'fail', err: 'Invalid id'});
      } else {
        return res.status(200).json({message: 'success', body: results});
      }
    });
  } else {
    req.query = {};
    controller.find(req.query, (err, results) => {
      if (err) {
        return res.status(500).json({message:'fail', err: 'Not Found!'});
      } else {
        return res.status(200).json({message: 'success', body: results});
      }
    });
  }

});
///////////////////////////////////////////////////

/* POST */
router.post('/:resource/:method', (req, res, next) => {
  let resource   = req.params.resource;
  let method     = req.params.method;
  let controller = controllers[resource];

  // validate resource and method requests
  if (controller === undefined) {
    return res.status(500).json({
      message: 'fail',
      err: `Invalid resource request : ${resource}`
    });
  } else if (controller[method] === undefined) {
    return res.status(500).json({
      message: 'fail',
      err: `Invalid method request : ${method}`
    });
  }

  switch (method) {
    case 'create':
      controller.create(req.body, (err, results) => {
        if (err) {
          return res.status(500).json({message: 'fail', err: err});
        } else {
          return res.status(200).json({message: 'success', result: results});
        }
      });
    break;
    case 'update':
      if (req.query._id !== undefined) {
        controller.update(req.query, req.body, {new: true}, (err, results) => {
          if (err) {
            return res.status(500).json({message: 'fail', err: 'Not found!'});
          } else {
            return res.status(200).json({message: 'success', result: results});
          }
        })
      } else {
        return res.status(500).json({message: 'fail', err: 'missing id'});
      }
    break;
    case 'destroy':
      if (req.query._id !== undefined) {
        controller.destroy(req.query, (err, results) => {
          if (err) {
            return res.status(500).json({message: 'fail', err: 'Not found!'});
          } else {
            return res.status(200).json({message: 'success', result: results});
          }
        })
      } else {
        return res.status(500).json({message: 'fail', err: 'missing id'});
      }
    break;
  }
});
///////////////////////////////////////////////////

module.exports = router;

