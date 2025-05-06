suc();


setInterval(suc,1000);

var funboard = document.getElementById("funboard");
var ctx = funboard.getContext("2d");
funboard.width = window.innerWidth-5;
funboard.height = window.innerHeight-5;
var output = document.getElementById('output');


var prevx = -10;
var prevy = -10;
var prevw = window.innerWidth;
var prevh = window.innerHeight;

const cls = [
  // ORIGINALS (5 from earlier)
  {
    tone: "casual",
    audience: "creative",
    template: "Hello!<br><br>My name is *NAME* and I am super interested in the *POSITION* position at *COMPANY*. <br><br> *WHY* <br><br> *RELATIONSHIP*  <br><br> Take a look at my resume and advertising portfolio *PORTFOLIO* and let me know if you need any additional info.<br><br>Thank you very much for your time and consideration.<br>Evan Stover"
  },
  {
    tone: "friendly",
    audience: "general",
    template: "Hello *TO*,<br><br> My name is *NAME*, and I'm very interested in the *POSITION* position at *COMPANY*. <br><br> *WHY* During this time, I've developed my skills in *SKILLS* <br><br> *RELATIONSHIP* <br><br> My resume is attached, which includes a link to my portfolio *PORTFOLIO*, where you can find examples my work."
  },
  {
    tone: "neutral",
    audience: "local",
    template: "Hello, <br><br> My name is *NAME*. I'm looking for work in Vancouver at a company where I can use the skills I've been honing through work and school. These skills are primarilly: *SKILLS* It would be a tremendous opprotunity to use these skills at *COMPANY*. *RELATIONSHIP*<br><br>View some of my previous work at *PORTFOLIO*<br><br>Thank you.<br>*NAME*"
  },
  {
    tone: "creative",
    audience: "academic",
    template: "Hello, <br><br> I am a recent graduate of OCAD university where I studied advertising design. I am super interested in the *POSITION* position at *COMPANY* as I have a lot of relevant skills, and enjoy the process of printmaking.<br><br>*WHY*<br><br>Currently, *AVAILABILITY* <br><br> I've attached my resume, take a look and do not hesitate to contact me if you have any questions.<br><br>Cheers!<br>*NAME*"
  },
  {
    tone: "formal",
    audience: "corporate",
    template: "Dear *TO*, <br><br> I hope you're doing well. My name is *NAME*, and I’m interested in the *POSITION* position at *COMPANY*. <br> <br> I have a background in *SKILLS* . *WHY* <br><br> I’d love the opportunity to discuss how I can contribute to your team. I’ve attached my resume and linked my portfolio for your review. Let me know if you’d like any additional details, I'm looking forward to your response.<br><br>Best,<br>*NAME*<br>*PHONE*"
  },

  // --- GENERATED TEMPLATES FOR ALL OTHER COMBOS ---
  // casual
  {
    tone: "casual",
    audience: "general",
    template: "Hi there!<br><br>I'm *NAME*, reaching out about the *POSITION* role at *COMPANY*. <br><br> *WHY* <br><br> *RELATIONSHIP* <br><br> My portfolio is here: *PORTFOLIO* and I've attached my resume. Thanks a ton for your time!"
  },
  {
    tone: "casual",
    audience: "local",
    template: "Hey!<br><br>I'm based in Vancouver and would love to join *COMPANY* as a *POSITION*. <br><br> *WHY* <br><br> I've picked up experience in *SKILLS* along the way and I think it lines up. <br><br> Portfolio’s here: *PORTFOLIO*. Let me know if you need anything else!"
  },
  {
    tone: "casual",
    audience: "academic",
    template: "Hi!<br><br>My name’s *NAME*, and I studied advertising at OCAD U. I’m looking to join *COMPANY* in a *POSITION* role. <br><br> *WHY* <br><br> Check out my portfolio: *PORTFOLIO*. Happy to send over anything else!"
  },
  {
    tone: "casual",
    audience: "corporate",
    template: "Hello there,<br><br>I'm *NAME*, and I’m reaching out about the *POSITION* opening at *COMPANY*. <br><br> *WHY* <br><br> My background in *SKILLS* gives me confidence I could hit the ground running. Resume and portfolio linked!<br><br>Thanks,<br>*NAME*"
  },

  // friendly
  {
    tone: "friendly",
    audience: "creative",
    template: "Hey *TO*,<br><br>My name’s *NAME*. I’m reaching out about the *POSITION* role at *COMPANY* because I think it’d be an amazing fit.<br><br>*WHY*<br><br>You can check out my portfolio here: *PORTFOLIO*, and I’ve attached my resume for more details.<br><br>Cheers!"
  },
  {
    tone: "friendly",
    audience: "local",
    template: "Hello!<br><br>I'm a local creative based in Vancouver, and I’m excited to apply for the *POSITION* role at *COMPANY*. <br><br>*WHY*<br><br>I’ve built my skills in *SKILLS* and am ready for the next challenge. Take a look at *PORTFOLIO* for my work!"
  },
  {
    tone: "friendly",
    audience: "academic",
    template: "Hi!<br><br>I’m *NAME*, a recent grad from OCAD U with a focus in advertising. I'm applying for the *POSITION* position at *COMPANY*.<br><br>*WHY*<br><br>My resume is attached, and you can see my work at *PORTFOLIO*. Let me know if you have any questions!"
  },
  {
    tone: "friendly",
    audience: "corporate",
    template: "Hello *TO*,<br><br>I'm *NAME*, and I’m writing to express interest in the *POSITION* position at *COMPANY*.<br><br>*WHY*<br><br>My background in *SKILLS* is a great match. Portfolio is here: *PORTFOLIO*. Thanks for considering my application!"
  },

  // neutral
  {
    tone: "neutral",
    audience: "creative",
    template: "Hi,<br><br>My name is *NAME* and I’m applying for the *POSITION* position at *COMPANY*. I bring a creative approach backed by technical skills in *SKILLS*.<br><br>*WHY*<br><br>Please find my portfolio here: *PORTFOLIO*. I look forward to hearing from you."
  },
  {
    tone: "neutral",
    audience: "general",
    template: "Hello,<br><br>I’m *NAME*, and I’m reaching out about the *POSITION* opportunity at *COMPANY*.<br><br>*WHY*<br><br>I have experience in *SKILLS*, and my portfolio (*PORTFOLIO*) shows a range of recent work. Thanks for your time."
  },
  {
    tone: "neutral",
    audience: "academic",
    template: "Hello,<br><br>I’m applying for the *POSITION* role at *COMPANY*. I recently completed my studies in advertising and have been focusing on *SKILLS*.<br><br>*WHY*<br><br>Please see my attached resume and portfolio: *PORTFOLIO*"
  },
  {
    tone: "neutral",
    audience: "corporate",
    template: "Dear *TO*,<br><br>I’m *NAME*, writing to apply for the *POSITION* position at *COMPANY*.<br><br>I’ve built up relevant skills in *SKILLS* and am ready for this challenge. My resume and portfolio (*PORTFOLIO*) are linked for review."
  },

  // creative
  {
    tone: "creative",
    audience: "creative",
    template: "Hey *TO*,<br><br>I’m *NAME*, an advertising grad and designer applying for the *POSITION* role at *COMPANY*. I like ideas, I like solving problems, and I like a little chaos.<br><br>*WHY*<br><br>Portfolio's here: *PORTFOLIO* – let's make something cool."
  },
  {
    tone: "creative",
    audience: "general",
    template: "Hi!<br><br>I’m *NAME*, an advertising graduate with a background in *SKILLS*. I’m excited about the *POSITION* position at *COMPANY*.<br><br>*WHY*<br><br>You can check out my portfolio here: *PORTFOLIO*. Let me know if you'd like to chat!"
  },
  {
    tone: "creative",
    audience: "local",
    template: "Hello!<br><br>I’m based in Vancouver and applying for the *POSITION* role at *COMPANY*. I come from a design background and love hands-on creative work.<br><br>*WHY*<br><br>Some of my work is here: *PORTFOLIO*. Thanks for taking a look!"
  },
  {
    tone: "creative",
    audience: "corporate",
    template: "Hi,<br><br>I’m *NAME*, applying for the *POSITION* position at *COMPANY*. I bring a strong mix of creativity and practicality, and experience in *SKILLS*.<br><br>Check out my portfolio here: *PORTFOLIO*. Let’s make it happen!"
  },

  // formal
  {
    tone: "formal",
    audience: "creative",
    template: "Dear Hiring Team,<br><br>My name is *NAME*, and I am applying for the *POSITION* position at *COMPANY*. I have a background in creative design and *SKILLS*.<br><br>*WHY*<br><br>Please find my portfolio at *PORTFOLIO*, and resume attached."
  },
  {
    tone: "formal",
    audience: "general",
    template: "Dear *TO*,<br><br>I am reaching out to express interest in the *POSITION* position at *COMPANY*. I believe my experience in *SKILLS* would be a strong fit.<br><br>*WHY*<br><br>Please review my attached resume and portfolio: *PORTFOLIO*."
  },
  {
    tone: "formal",
    audience: "local",
    template: "Dear Hiring Manager,<br><br>I am a Vancouver-based applicant interested in the *POSITION* position at *COMPANY*.<br><br>*WHY*<br><br>My experience in *SKILLS* aligns well with your needs. Portfolio and resume attached."
  },
  {
    tone: "formal",
    audience: "academic",
    template: "To Whom It May Concern,<br><br>My name is *NAME*, a recent graduate from OCAD University. I am applying for the *POSITION* position at *COMPANY*.<br><br>*WHY*<br><br>Attached are my resume and portfolio (*PORTFOLIO*) for your review."
  }
];



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

function generatecl(){
	output.innerHTML = '';
	var say = '';
var me = document.getElementById('name').value;
var to = document.getElementById('to').value;
var position = document.getElementById('pos').value;
var comp = document.getElementById('company').value;
var why = document.getElementById('why').value;
var skills = document.getElementById('skills').value;
var rel = document.getElementById('companyrel').value;
var port = document.getElementById('portfolio').value;
var avail = document.getElementById('avail').value;
var phone = document.getElementById('phone').value;
var tone = document.getElementById('tone').value;
var audience = document.getElementById('audience').value;
console.log('checking '  ,tone ,audience);

if(tone=='random'&&audience=='random'){
say=cls[rand(cls.length)].template;	
}else if(tone=='random'){
for(i=rand(cls.length);i<cls.length-1*2;i++){
	if(audience==cls[i].audience){
	say=cls[i].template;
	console.log('found ' , i);
	}
}
}else if(audience=='random'){
for(i=rand(cls.length);i<cls.length-1*2;i++){
	if(tone==cls[i].tone){
	say=cls[i].template;
	console.log('found ' , i);
	}
}
}else{
for(i=0;i<cls.length;i++){
	
	if(tone==cls[i].tone&&audience==cls[i].audience){
	say=cls[i].template;
	}
}
}


say=say.replace(/\*NAME\*/g, me);
say=say.replace(/\*POSITION\*/g,position);
if(to==''){
say=say.replace(/\*TO\*/g, 'Hiring Team at *COMPANY*');	
}
say=say.replace(/\*TO\*/g, to);
if(comp==''){
say=say.replace(/at \*COMPANY\*/g, comp);	
}
say=say.replace(/\*COMPANY\*/g, comp);
say=say.replace(/\*WHY\*/g, why);
say=say.replace(/\*SKILLS\*/g, skills);
say=say.replace(/\*RELATIONSHIP\*/g, rel);
say=say.replace(/\*PORTFOLIO\*/g, port);
say=say.replace(/\*AVAILABILITY\*/g, avail);
say=say.replace(/\*PHONE\*/g, phone);

output.innerHTML=say;	




}

function rand(n){
return Math.floor(Math.random()*n);	
}