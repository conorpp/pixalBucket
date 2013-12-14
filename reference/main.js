console.log('ready');

var canvas = {
	begun:false,
	c : null,
	startCoords: [0,0],
	width :5,
	points: 0,
	slope:0,
	scale:1.2,
	bg:'#333',
	color: 'white',
	
	start: function(){
		this.c.beginPath();
		this.begun = true;
		//this.c.moveTo(this.startCoords[0], this.startCoords[1]);
	},
	
	move: function(x,y){
		//if (!this.begun) {
		//	this.start();
		//}
		this.c.beginPath();
		//this.c.strokeStyle='white';
		this.c.lineWidth=4;
		//this.c.lineTo(x,y);
		this.c.fillStyle = 'white';
		//c.arc(x, y, r, start, stop)
		this.c.arc(x  ,y ,
			   4,0, 2*Math.PI);
		this.c.fill();
		//this.end(x,y);
		//console.log('start: ', this.startCoords);
	},
	
	end: function(x,y){
		//console.log('end: ', [x,y]);
		//console.log('total points : ', this.points);
		//this.c.stroke();
		this.c.fill();
		//this.points++;
		//this.slope = (x - this.startCoords[0]+1) / (y - this.startCoords[1]+1);
		//console.log(x,y);
		//console.log(canvas.startCoords);
		
		//this.startCoords = [x,y];
		//this.begun = false;
	},
	
	reset: function(x,y){
		//fillRect(x,y,width,height)
		this.c.fillStyle=this.bg;
		this.c.fillRect(0,0,99999,99999);
	}
	
};

$(document).ready(function(){
	/*var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#FF0000";*/
	canvas.c = document.getElementById("canvas").getContext("2d");
	function log(){
		//console.log('log');
	}

	var M = { x: 0, y: 0 };
	function updateM(e){
		M.x = e.pageX;
		M.y = e.pageY;
	}
	$(document).mousemove(function(e){ updateM(e); });
	//$(document).mouseover(function(e){ updateM(e); });
	//$(document).hover(function(e) { updateM(e); });

	var inter;
	$('#canvas').on('mousedown',function(e){
		//ctx.fillRect(x,y,width,height);
		canvas.startCoords = [M.x, M.y];
		clearInterval(inter);
		inter = setInterval(function(){
			canvas.move(M.x, M.y);
		},1);
	});
	$('body').on('mouseup',function(e){
		clearInterval(inter);
	});
	
	$('#reset').click(function(){
		canvas.reset();
	});
	canvas.width = 10
	var up = true;
	/*setInterval(function(){
		var color = parseInt((''+canvas.color).replace('#',''));
		if (up) {
			color++
		}else {
			color--;
		}
		if (color == 1000) {
			up = false;
		}else if (color == 1) {
			up = true;
		}
		canvas.color = '#'+color;
	},1);*/
});




