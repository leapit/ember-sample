var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //{"posts":[{"_id":"565ec6ecb5e208195a708c20","name":"Test","creator":"Connor Brewster","date":"2015-01-16T16:00:00.000Z","content":"Some post content"}]}
  res.json({"posts":[{"_id":"565ec6ecb5e208195a708c20","name":"Test","creator":"Connor Brewster","date":"2015-01-16T16:00:00.000Z","content":"Some post content"}]});
});

module.exports = router;
