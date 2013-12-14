//This is the webserver

var express = require('express');
var hbs = require('hbs');
var io = require('socket.io');

var app = express();

app.listen(16912);   //listen on port, default localhost
io = io.listen(15224);

app.set('view engine','html');
app.set('views', __dirname);
app.engine('html', hbs.__express);

app.configure(function(){
  app.use('/static', express.static(__dirname + '/static'));
});

app.get('/', function(req, res){
    res.render('index');
});

io.configure(function(){
    io.set('log level',1);
});

io.sockets.on('connection', function(socket){
    console.log('User connected');
    
    socket.emit('welcome', {message:'Welcome to the pixel bucket, you are connected.'});
    
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });
    
    socket.on('draw', function(data){
        console.log('got data', data);
        io.sockets.emit('draw', data);
    });

});



