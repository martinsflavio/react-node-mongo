const express = require('express'),
      router  = express.Router();

const controllers = require('../controllers');


/* GET */
router.get('/:resource', (req, res, next) => {
  let resource = req.params.resource;
  let controller = controllers[resource];

  // check for invalid resource request
  if (controller === undefined) {
    // TODO CHECK IF IS OK THIS FORMAT
    return res.status(500).json({
      message: 'fail',
      err: `Invalid resource request : ${resource}`
    });
  }

  controller.find(req.query, (err, results) => {
    if (err) {
      return res.status(500).json({message:'fail', err: err});
    } else {
      return res.status(200).json({message: 'success', body: results});
    }
  });

});
///////////////////////////////////////////////////

/* POST */
router.post('/:resource/:method', (req, res, next) => {
  let resource   = req.params.resource;
  let method     = req.params.method;
  let controller = controllers[resource];


  // check for invalid resource request
  if (controller === undefined) {
    // TODO CHECK IF IS OK THIS FORMAT
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
      res.json({message: "create"});
    break;
    case 'find':
      if (req.query.id === undefined) {
        res.json({message:"find"});
      } else {
        res.json({message:"findById"});
      }
    break;
    case 'update':
      res.json({message:"update"});
    break;
    case 'destroy':
      res.json({message:"destroy"});
    break;
  }
/*  controller.create(req.body, (err, results) => {
    if (err) {
      return res.status(500).json({message: 'fail', err: err});
    } else {
      return res.status(200).json({message: 'success', result: results});
    }
  });*/

});
///////////////////////////////////////////////////

module.exports = router;

