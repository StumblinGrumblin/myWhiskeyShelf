
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

// //Database: Mongoose
// var mongoose = require('mongoose');

// var Schema = mongoose.Schema
// var ObjectId = Schema.ObjectId

// //SCHEMAS
// var DistillerySchema = new Schema({
// 	name : String,
// 	address : String,
// 	phone : String,
// 	email : String,
// 	owner : String
// });
// var WhiskeySchema = new Schema({
// 	id : ObjectId,
// 	name : String,
// 	region : String,
// 	distillery : String,
// 	image : String,
// 	reviews: [{ reviewer : String, score: Number}],
// 	status : String,
// 	purchasePrice : Number
// });

// var Distillery = mongoose.model('Distillery', DistillerySchema);
// var Whiskey = mongoose.model('Whiskey', WhiskeySchema);

// mongoose.connect('mongodb://localhost:27017/whiskeyTest', function(err){
// 	if(err) {
// 		console.log('Could not connect to Mongo');
// 	}
// });

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
