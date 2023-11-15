

var darkicon=document.getElementById('darkicon');
var maincontainner=document.getElementById('maincontainner');
var mypara1=document.getElementById('mypara1');
var downlodebtn=document.getElementById('downlodebtn');
var rightcontainer=document.getElementById('rightcontainer');
var autowright=document.getElementById('autowright');
var myname=document.getElementById('myname');
var aboutmeicon=document.getElementById('aboutmeicon');


// mobile size to maintain js
var scontainer=document.getElementById('scontainer');
var mydata=document.getElementById('mydata');
var humberger=document.getElementById('humberger');
var xmark=document.getElementById('xmark');

var workcontainer=document.getElementById('workcontainer');
var contactformid=document.getElementById('contactform');

var dataaboutme=document.getElementById('dataaboutme');

var li1=document.getElementById('li1');
var li2=document.getElementById('li2');
var li3=document.getElementById('li3');



const burgerclick=()=>{
 
  mydata.style.visibility="visible";
  mydata.style.width="85%";
  humberger.style.visibility="hidden";
  xmark.style.visibility="visible";
}

const crossclick=()=>{

  mydata.style.width="0%";
  mydata.style.visibility="hidden";
  humberger.style.visibility="visible";
  xmark.style.visibility="hidden";
}

//about page java script


var datask=document.getElementById('datask');
 var dataexp=document.getElementById('dataexp');
 var dataed=document.getElementById('dataed');




const skillclk=()=>{
  datask.style.visibility="visible";
  dataexp.style.visibility="hidden";
  dataed.style.visibility="hidden";
  li1.style.borderBottom="2px solid cyan";
  li2.style.borderBottom="none";
  li3.style.borderBottom="none";
}



const educlk=()=>{
  datask.style.visibility="hidden";
  dataexp.style.visibility="hidden";
  dataed.style.visibility="visible";
  li1.style.borderBottom="none";
  li2.style.borderBottom="none";
  li3.style.borderBottom="2px solid cyan";
}

const expclk=()=>{
  datask.style.visibility="hidden";
  dataexp.style.visibility="visible";
  dataed.style.visibility="hidden";
  li1.style.borderBottom="none";
  li2.style.borderBottom="2px solid cyan";
  li3.style.borderBottom="none";
}









  

var typeds=new Typed("#profetionname",{

  strings:["Web Developer","MERN Stack","Photo Edditer","Youtuber","Video Edditer"],
  typeSpeed:100,
  backSpeed:30,
  loop:true,

});





























