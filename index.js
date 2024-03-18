console.log("moving fast");

var dm = true;
var hc = true;
var cp = "h";
var body;
var grabbing = false;
modecheck();

document.getElementById("dm").onclick=dark;
document.getElementById("hc").onclick=hcont;
document.getElementById("lc").onclick=np;
document.getElementById("rc").onclick=np;
document.getElementById("c").onclick=np;
mtlbody=document.querySelector("html");
document.addEventListener("mousedown",grab);
document.addEventListener("mouseup",grab);
document.addEventListener("keydown",arow);


load();

function np(event){
    if(cp="h"){
        document.getElementById("nlc").onclick=np;
        document.getElementById("nrc").onclick=np;
        document.getElementById("nc").onclick=np;
    document.querySelector('.lc').classList.remove('mbtn');
    document.querySelector('.rc').classList.remove('mbtn');
    document.querySelector('.c').classList.remove('mbtn');
    document.querySelector('.lc').classList.add('mbtnh');
    document.querySelector('.rc').classList.add('mbtnh');
    document.querySelector('.c').classList.add('mbtnh');
    document.querySelector('.c').style.opacity = 0;
    document.querySelector('.lc').style.opacity = 0;
    document.querySelector('.rc').style.opacity = 0;
    document.querySelector('.nc').style.opacity = 100;
    document.querySelector('.nlc').style.opacity = 100;
    document.querySelector('.nrc').style.opacity = 100;
    
    };
    if(event.target.innerHTML=="about"){
        cp="a"
        document.querySelector('.contact').style.opacity = 0;
        document.querySelector('.ourwork').style.opacity = 0;
        document.querySelector('.about').style.opacity = 100;
        document.querySelector('.nlc').style.opacity = .3;
        document.querySelector('.nrc').style.opacity = 3;
        document.querySelector('.nc').style.opacity = 3;
        document.querySelector('.nlc').classList.remove('mbtn');
        document.querySelector('.nc').classList.remove('mbhide');
        document.querySelector('.nlc').classList.add('mbtnh');
    }
    if(event.target.innerHTML=="ourwork"){
        console.log("outwork")
        cp="o"
        document.querySelector('.contact').style.opacity = 0;
        document.querySelector('.about').style.opacity = 0;
        document.querySelector('.ourwork').style.opacity = 100;
        document.querySelector('.nc').style.opacity = .3;
        document.querySelector('.nrc').style.opacity = 3;
        document.querySelector('.nlc').style.opacity = 3;
        document.querySelector('.nc').classList.remove('mbtn');
        document.querySelector('.nc').classList.add('mbtnh');
        document.querySelector('.nc').classList.add('mbhide');
    }
    if(event.target.innerHTML=="contact"){
        cp="c"
        document.querySelector('.about').style.opacity = 0;
        document.querySelector('.ourwork').style.opacity = 0;
        document.querySelector('.contact').style.opacity = 100;
        document.querySelector('.nrc').style.opacity = .3;
        document.querySelector('.nlc').style.opacity = 3;
        document.querySelector('.nc').style.opacity = 3;
        document.querySelector('.nrc').classList.remove('mbtn');
        document.querySelector('.nc').classList.remove('mbhide');
        document.querySelector('.nrc').classList.add('mbtnh');
    }

}

function cpcb(x){
    if(x="about"){return "lc"};
    if(x="ourwork"){return "c"};
    if(x="contact"){return "rc"};
}

function load(){
    console.log("loading");
    var fi = document.querySelector('.fadein');
    var fi2 = document.querySelector('.logob');
    fi2.style.opacity = 100;
    fi2.style.left = "49.8%";
    fi.style.opacity = 100;
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

