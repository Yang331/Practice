var express = require('express');
var app = express();
var router = require('./router/main')(app);

//var fs = require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

/*app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
*/
var server = app.listen(3000,function(){
  console.log("Express server has started on Yang")
});
