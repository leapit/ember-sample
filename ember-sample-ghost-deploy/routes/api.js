var config        = require('../config');
var express       = require('express');
var router        = express.Router();
var shortId       = require('shortid');
var mongoose      = require('mongoose');


router.get('*', function(req, res) {
      res.json({error:0,data:{'key':'value'}});
});

module.exports = router;