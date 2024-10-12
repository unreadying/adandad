var menuopen = false;

var contact = document.querySelector('.contact');
var ourwork = document.querySelector('.ourwork');
var content = document.querySelector('.content');







flicker(document.querySelector(".logo"));
flicker(document.querySelector(".l"));
flicker(document.querySelector(".c"));
flicker(document.querySelector(".r"));
flicker(document.getElementById("adandad"));
flicker(document.getElementById("team"));

click(document.getElementById("adandad"));
click(document.getElementById("team"));



function click(e){
	if(e==null){return};
	
	e.addEventListener('click',expand);
}

function expand(event){
	console.log(event);
	var id = event.target.id;
	if(id=="adandad" || id=="adandadex"){
		info(id,"adandad","advertising & advertisements , also known as ad&ad , is a small international advertising agency founded in 'toronto ontario' . ad&ad currently operates out of copenhagen denmark and 'victoria british columbia' . <br><br> <img class='staff' src=ee.jpg> <img class='staff mobh' src=ee2.jpg> <br><br> we started our agency with one question : why don't small brands advertise ? with this as our founding question we developed a plan to bring big brand advertising to independent businesses . by hiring only the most skilled and versitile creatives we can keep costs low while providing similar results to larger , more expensive agencies . our team is very interested in bringing this approach to other sustainable and ethical markets , particularly renewable energy . ");
	}
	if(id=="team" || id=="teamex"){
		info(id,"team","* emmanuela pinamang *  <br> <br> <img class='staff' src='pinamang.jpg'> <br> <br> interested in : art direction , trends , public relations , idea generation , social media , etc . <br> click <a><u>here</u></a> to view emmanuela's portfolio <br><br> & evan stover & <br> <br> <img class='staff' src='stover.jpg'> <br> <br> 'hello , my name is evan stover' evan is our west coast employee , if you can imagine the typical west coast canadian that pretty much sums him up . 'i love hiking and getting out into nature ! i feel grateful that i can live on beautiful coast Salish territory . ' one of the founding members of ad&ad , evan developed the visual style of our brand . <br> <br> interested in : copywriting , directing , managing teams , programing , etc . <br> click <a href='https://xerelia.ca'><u>here</u></a> to view evan's portfolio");
	}
}

function info(eid,id,content){
	if(eid==id){
		document.getElementById(eid).id=""+id+"ex";
		var p = document.createElement("p");
		p.innerHTML = content;
		document.getElementById(""+id+"p").appendChild(p);
	}else if(eid==""+id+"ex"){
		document.getElementById(eid).id=id;
		document.getElementById(""+id+"p").removeChild(document.getElementById(""+id+"p").firstChild);
	}
}

function flicker(e){
	if(e==null){return};
    
    var d = (rand(2000)+500);
    var o = (rand(0.8)+0.4);
    e.style.transition="opacity "+(d/1000)+"s ease-in-out 0s";
    setTimeout(function(){flicker(e)},d);
    if(e.style.opacity!=1){
        e.style.opacity=1;
    }else{
        e.style.opacity=""+o+"";
    }
}

function rand(n){
    return ((Math.floor((Math.random()*n)*10))/10);
}

function menu(){

    if(menuopen==false){
		document.querySelector(".menubutton").innerHTML="=";
        console.log("menu");
        content.style.opacity="0.3"
        content.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.transition="opacity 0.2s ease-in-out 0s";
        ourwork.style.transition="opacity 0.2s ease-in-out 0s";
        contact.style.visibility="visible" 
        ourwork.style.visibility="visible" 
        contact.style.top="28pt" 
        ourwork.style.top="8pt" 
        contact.style.opacity="100" 
        ourwork.style.opacity="100" 
        
        menuopen=true;
    }else if(menuopen==true){
		document.querySelector(".menubutton").innerHTML="+";
        content.style.opacity="1"
        contact.style.visibility="hidden" 
        ourwork.style.visibility="hidden" 
        contact.style.opacity="0" 
        ourwork.style.opacity="0" 
        menuopen=false; 
    }
}

