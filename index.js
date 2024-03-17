console.log("moving fast");

var dm = true;
var hc = true;
var body;
var grabbing = false;
modecheck();

document.getElementById("dm").onclick=dark;
document.getElementById("hc").onclick=hcont;
mtlbody=document.querySelector("html");
document.addEventListener("mousedown",grab);
document.addEventListener("mouseup",grab);
document.addEventListener("keydown",arow);


load();


function load(){
    console.log("loading");
    var fi = document.querySelector('.fadein');
    var fi2 = document.querySelector('.logob');
    fi2.style.filter = "brightness(100%)";
    fi2.style.left = "49.8%";
    fi.style.filter = "brightness(100%)";
    var lc = document.querySelector('.lc');
    //lc.style.bottom = "40%";
    lc.style.opacity = "100%";
    var lc = document.querySelector('.rc');
    //lc.style.bottom = "40%";
    lc.style.opacity = "100%";
    var lc = document.querySelector('.c');
    //lc.style.bottom = "40%";
    lc.style.opacity = "100%";
    console.log("loaded");
}

function grab(){
    if(grabbing==false){
        mtlbody.style.cursor = "grabbing";
    }else{
        mtlbody.style.cursor = "grab";
    }
    grabbing=!grabbing;
}

function ddtog() {
    document.getElementById("opts").classList.toggle("show");
    console.log("toggle");
  }

  function arow(event){
    if(event.keyCode==27){ddtog();}
}

  function modecheck(){
    if(localStorage.getItem("darkmode")=="true"){
        dm=true;
        document.querySelector("body").style.backgroundColor="hsla(0, 0%, 0%, 0.90)";
        document.getElementById("dm").checked="checked";
    }
    if(localStorage.getItem("highcontrast")=="true"){
        hc=true;
        document.getElementById("hc").checked="checked";
    }
    hc = !hc;
    hcont();
    dm = !dm;
    dark();
}

function dark(){
    dm = !dm;
    if(dm==true){
    if(hc==true){
    cchange("tc","white");
    document.querySelector("body").style.backgroundColor="black";
    }else {
    cchange("tc","black");
    document.querySelector("body").style.backgroundColor="hsla(0, 0%, 0%, 0.90)";
    }
    cchange("hctc","white");
    document.getElementById("elip").style.color="white";
    document.getElementById("hbtn").style.color="white";
    console.log("dark mode engaged");
    localStorage.setItem("darkmode","true");
    }else if(dm==false){
    if(hc==true){
    cchange("tc","black");
    document.querySelector("body").style.backgroundColor="white";
    }else{
    cchange("tc","white");
    document.querySelector("body").style.backgroundColor="hsla(0, 0%, 95%, 1)";
    }
    cchange("hctc","black");
    document.getElementById("elip").style.color="black";
    document.getElementById("hbtn").style.color="black";
    console.log("dark mode disengaged");
    localStorage.setItem("darkmode","false");
    }
}

function hcont(){
    hc = !hc;
    if(hc==true){
    if(dm==false){
    cchange("tc","black");
    document.querySelector("body").style.backgroundColor="white";
    }else if(dm==true){
    cchange("tc","white");
    document.querySelector("body").style.backgroundColor="black";
    }    
    console.log("contrast engaged");
    localStorage.setItem("highcontrast","true");
    }else if(hc==false){
    if(dm==false){
    cchange("tc","white");
    document.querySelector("body").style.backgroundColor="hsla(0, 0%, 95%, 1)"
    }else if(dm==true){
    cchange("tc","black");
    document.querySelector("body").style.backgroundColor="hsla(0, 0%, 0%, 0.90)";
    }
    console.log("contrast disengaged");
    localStorage.setItem("highcontrast","false");
}
}

function cchange(x,c){
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color=c;
    }
}

function link(){
    console.log(event);
    if(event.target.innerHTML=="home"){document.location="../index.html"; return}
    document.location="../"+event.target.innerHTML+"/"+event.target.innerHTML+".html";
}