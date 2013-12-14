
function myfunc(){
    
    var i = 0;
    g = 5;
    return i;
}

console.log('my func ' + myfunc());

console.log(g);  //this works

//console.log(i);  //refernce error

/*(function (str) {
    console.log('this gets executed, ', str);
})('a sting'); */

/*
var func = function(str){
    console.log('this a string' , str);
}

function classicFunc(str, callback) {
    //console.log('this a string' , str);
    callback(str);
}

//func('in a variable');
//classicFunc('classic way to define function');

classicFunc('func with a callback', func);
*/

var obj = {
    increase: true,
    
    decrese: false
}
obj.increase //true



var counter = {
    
    count:0,
    
    inc: function(){

        this.parse({inc:true});
        
    },
    
    dec: function(){

        this.parse({dec:true});
    },
    
    parse: function(options){
        options = options || {inc:true};
        
        var num = parseInt($('#timer').html() || 0);
        
        if(options.inc) num++;
        
        else if(options.dec) num--;
        
        this.count = num;
        
        $('#timer').html(num);
        return num;
    }
};

$(document).ready(function(){
    
    //$('#timer').html(0);
        
    $('#inc').click(function(){
        counter.inc();
        if (counter.count > 10) {
            alert('You went above ten');
        }
    });
    
    $('#dec').click(function(){
        counter.dec();
        if (counter.count < -10) {
            alert('You went below ten');
        }
    });
    
});






