var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goalSchema = new Schema({
  title: String,
  users: Array,
  completed: Array
});

mongoose.model('goal', goalSchema);