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
    res.status(500).json({
      message: 'fail',
      err: `Invalid resource request : ${resource}`
    });
  } else {
    console.log('find');
    controller.find(req.query, (err, results) => {
      if (err) {
        return res.status(500).json({message:'fail', err: err});
      } else {
        return res.status(200).json({message: 'success', body: results});
      }
    });
  }
});
///////////////////////////////////////////////////

/* POST */
router.post('/:resource/create', (req, res, next) => {
  let resource = req.params.resource;
  let controller = controllers[resource];

  // check for invalid resource request
  if (controller === undefined) {
    // TODO CHECK IF IS OK THIS FORMAT
    res.status(500).json({
      message: 'fail',
      err: `Invalid resource request : ${resource}`
    });
  } else {
    controller.create(req.body, (err, results) => {
      if (err) {
        return res.status(500).json({message: 'fail', err: err});
      } else {
        return res.status(200).json({message: 'success', result: results});
      }
    });
  }
});
///////////////////////////////////////////////////

module.exports = router;

