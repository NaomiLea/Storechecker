var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var functions = require('./functions.js');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: './views/layouts/'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + "/views");

app.use(express.static('public'));

app.get('/', function(req, res) {
  var stockArray = functions.stockArray;
    res.render('index', {
      stock: stockArray
    });
});

app.listen(3000, function() {
    console.log("Started listening on port", 3000);
});
