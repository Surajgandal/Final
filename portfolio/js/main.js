// Active Navbar

let nav=document.querySelector(".navigation-wrap");
window.onscroll = function(){
	if(document.documentElement.scrollTop > 20){
		nav.classList.add("scroll-on");
	}else{
		nav.classList.remove("scroll-on");
	}
}
// Nav Hide (used for the app function the Anchor tag name hide on it by click)

let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
	a.addEventListener("click",function(){
		navCollapse.classList.remove("show")
	})
})

var typed= new Typed(".auto_type",{
	strings:["Java Developer","Full-Stack Developer","Spring Boot Developer","Web Developer","SQL Developer","Coder","Developer","Angular Developer","JavaScript Developer"],
	typeSpeed:60,
	backSpeed:10,
	loop:true
})

const sr = ScrollReveal({
	distance : "45px",
	duration:2700,
	reset:true
	
})

sr.reveal('.text',{delay:350,origin:'left'})
// sr.reveal('.design',{delay:350,origin:'right'})
// sr.reveal('.skills-section',{delay:350,origin:'right'})
sr.reveal('.sub-skills',{delay:350,origin:'top'})
sr.reveal('.sub-heading',{delay:350,origin:'top'})
sr.reveal('.contact-info',{delay:500,origin:'left'})
sr.reveal('.form',{delay:500,origin:'right'})
sr.reveal('.footer-content',{delay:350,origin:'top'})
//sr.reveal('.footer-bottom',{delay:350,origin:'bottom'})




const name=document.getElementById('name');
const email=document.getElementById('email');
const message=document.getElementById('message');
//const submit =document.getElementsByClassName('contact-form');


document.querySelector(".contact-form").addEventListener("submit",(e)=>{
	e.preventDefault();
	console.log("clicked");

	let ebody=`
	
	<br><br>
	<h2>::::::::::::::::::::::::::::::::::::::::::::::::::::  Message from Portfolio  :::::::::::::::::::::::::::::::::::::::::::::::::: </h2>
	<br>
	<br>
	
	<p style="color:black; font-size:20px; text-align:center;"><b>Name: </b>${name.value}</p>
	
	<p style="color:black; font-size:20px; text-align:center;"><b>Email: </b>${email.value}</p>
	
	<p style="color:black; font-size:20px; text-align:center;"><b>Message: </b>${message.value}</p>
	<br><br>
	
	<h3>:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  Thank You  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: </h3>
	<br><br>
	
`
	Email.send({
	//SecureToken : "7492fecf-4e32-48c5-9a46-e216bdb397c8",
	Host : "smtp.elasticemail.com",
    Username : "smg26comedy@gmail.com",
    Password : "B92882A2F0CE0B6BC03E3CD1F164405B04FB",
    To : 'surajgandal97@gmail.com',
    From : "smg26comedy@gmail.com",
    Subject : "New Message from Portfolio",
    Body : ebody
	

}).then(
  
  message => swal("Thank You!", "Your details has been successfully submited. Thanks!!", "success")
  // message => alert("mail send succesfully")
);
	
});


// cursor

const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove",(e)=>{
    let x =e.pageX;
    let y =e.pageY;
    
    cursor.style.top =y +"px";
    cursor.style.left =x +"px";
    cursor.style.display ="block";

    function mouseStopped(){
        cursor.style.display ="none";
    }
    clearTimeout(timeout)

    timeout = setTimeout(mouseStopped,1000);
});

document.addEventListener("mouseout",()=>{
cursor.style.display ="none";
});











function updateClock(){
     var now = new Date();
	 var dname =now.getDay(),
	     mo =now.getMonth(),
		 dnum =now.getDate(),
		 yr =now.getFullYear(),
		 hou =now.getHours(),
		 min =now.getMinutes(),
		 sec =now.getSeconds(),
		 pe ="AM";

		 if(hou==0){
			hou==12;
		 }
		 if(hou>12){
			hou=hou-12;
			pe="PM";
		 }

		 Number.prototype.pad=function(digits){
			for(var n=this.toString(); n.length < digits; n=0+n);
			return n;

		 }




		 var months =["Jan","Feb","March","April","May", "June", "July", "Aug", "Sep", "Oct", "Nov","Dec"];
        var week=["Sun","Mon","Tues", "Wed", "Thurs", "Fri"," Sat"];
        var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"];
		var values=[week[dname],months[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
      for(var i=0;i<ids.length;i++){
	   document.getElementById(ids[i]).firstChild.nodeValue=values[i];

}

		}
function initClock(){
	updateClock();
	window.setInterval("updateClock()",1);
}