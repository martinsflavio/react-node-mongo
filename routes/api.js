const express = require('express'),
      router  = express.Router();

const controllers = require('../controllers');


/* GET find all */
router.get('/:resource', (req, res, next) => {
  let resource = req.params.resource;
  let controller = controllers[resource];

  // check for invalid resource request
  if (controller === undefined) {
    res.json({
      status: 'fail',
      message: `Invalid resource request : ${resource}`
    });
  } else {
    controller.find(req.query, (err, results) => {
      if (err) {
        return res.json({status: 'fail', message: err});
      } else {
        return res.json({status: 'success', result: results});
      }
    });
  }

});
///////////////////////////////////////////////////

module.exports = router;

