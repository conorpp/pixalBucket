/*
    Functionality for canvas drawing
*/

var canvas = {
    c:null,
    startCoords: [0,0],
    
    move:function(x,y, add){
        
        console.log(x,y);
	this.c.beginPath();

	this.c.fillStyle = 'purple';
	this.c.arc(x  ,y ,
			   4,0, 2*Math.PI);
	this.c.fill();
        
         if (add == undefined || add==true ) this.add([x,y]);
    },
    
    points:[],
    add: function(coord){
        if (this.points.length < 10) {
            
            this.points.push(coord);
            
        }else{
            socket.emit('draw', {points: this.points});
            this.points = [];
        }
    }
    
}

$(document).ready(function(){
    canvas.c = document.getElementById("canvas").getContext("2d");
    
    var M = {
        x:0,
        y:0
    };
    $(document).mousemove(function(event){
        M.x = event.pageX;
        M.y = event.pageY;
    });
    
    var inter;
    $(document).on('mousedown', function(){
        canvas.move(M.x, M.y);
	inter = setInterval(function(){
            canvas.move(M.x, M.y);
	},1);
    });
    
    $(document).on('mouseup', function(){
        clearInterval(inter);
    });
    
});

var socket = io.connect('http://pixalbucket.com', {port:15224});

socket.on('connect', function(){
    console.log('your connected nice wow.');
});

socket.on('welcome', function(data){
    console.log('welcome channel: ', data);
});

socket.on('draw', function(data){
    console.log('got points ', data);
    var points = data.points;
    for (var i in points){
        //var coord = points[0];
        
        canvas.move(points[i][0], points[i][1], false);
    }
});


