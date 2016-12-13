const express = require('express');
const app = express();
const path = require('path');
const nocache = require('nocache')

// app.use('/', express.static(__dirname + '/'));

app.use(nocache());

app.use('/static', express.static('static'));

const optionsForStaticFiles = {
    root: __dirname + '/static/',
    dotfiles: 'deny'
};
  
app.get('/service-worker.js', function(req, res){
  var fileName = 'service-worker.js';
  res.sendfile(fileName, optionsForStaticFiles, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});


app.get('/', function(req, res){
    res.render('index');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const port = process.env.PORT || 3002;

app.listen(port, function(){
   console.log("Server up!", port); 
});