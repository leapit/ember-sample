/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    // res.send({
    //   'posts': []
    // });
    res.json({"posts":[{"_id":"565ec6ecb5e208195a708c20","name":"Test","creator":"Connor Brewster","date":"2015-01-16T16:00:00.000Z","content":"Some post content"}]});
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        "_id": req.params.id,
        "name": "Test"
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/posts', require('body-parser'));
  app.use('/api/posts', postsRouter);
};
