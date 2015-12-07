var mongoose = require( 'mongoose' );
// Connect mongoose
mongoose.connect('mongodb://localhost/wechat', function(err) {
  if (err) {
    console.log('Could not connect to mongodb !');
  }
});