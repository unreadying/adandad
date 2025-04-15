suc();


setInterval(suc,1000);

var funboard = document.getElementById("funboard");
var ctx = funboard.getContext("2d");
funboard.width = window.innerWidth-5;
funboard.height = window.innerHeight-5;


var prevx = -10;
var prevy = -10;
var prevw = window.innerWidth;
var prevh = window.innerHeight;

document.addEventListener("mousemove",draw);

function suc(){
    
    if(prevw < window.innerWidth || prevh < window.innerHeight){
    funboard.width = window.innerWidth-5;
    funboard.height = window.innerHeight-5;
    prevw = window.innerWidth;
    prevh = window.innerHeight;
    }
}

function draw(event){
    var x = mousepos(funboard,event).x;
    var y = mousepos(funboard,event).y;
    ctx.beginPath();
    if(prevx<0 && prevy<0){
        ctx.moveTo(x,y);
    }else{
    ctx.moveTo(prevx,prevy);
    }
    ctx.lineTo(x,y);
    ctx.strokeStyle = "grey";
    ctx.lineWidth = "10px";
    ctx.stroke();
    
    ctx.closePath();
    prevx=x;
    prevy=y;
}

function mousepos(funboard,event){
    var rect = funboard.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}