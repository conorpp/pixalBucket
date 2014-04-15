//This is the webserver

var express = require('express');
var hbs = require('hbs');
var io = require('socket.io');
var fs=require('fs');
var app = express();
var ports = JSON.parse(fs.readFileSync('/home/ubuntu/web_apps/CORE/apps.json'))['pixalbucket.com'];


app.listen(ports.port);   //listen on port, default localhost
io = io.listen(ports.ws_port);

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



