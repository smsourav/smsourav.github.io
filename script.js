window.onscroll = function() {scrollFunction()};


var gallery = document.querySelector('.gallery-view');
var slide = document.querySelector('.slide');

var leftB = document.querySelector('.ctrl-btn.l');
var rightB = document.querySelector('.ctrl-btn.r');

var galPose = gallery.offsetLeft;
console.log(galPose);


var gW = gallery.offsetWidth;
var sW = slide.offsetWidth;

function scrollFunction() {

    var navbar = document.getElementById("navbar");
    var navText = document.querySelector('.item-nav > h1');
    var body = document.querySelector('body');
    var navUl = document.querySelector('.item-nav > ul');
    var navLink1 = document.getElementById('link1');
    var navLink2 = document.getElementById('link2');
    var navLink3 = document.getElementById('link3');
    var navLink4 = document.getElementById('link4');
    var x = window.matchMedia("(max-width: 480px)");
    
    if((document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) && x.matches){
        body.style.padding = '0';
        body.style.margin = '0';
        navbar.style.height = '100px';
        navbar.style.backgroundColor = 'cadetblue';
        navbar.style.top = '-30px';
        navbar.style.flexDirection = 'column';
        navbar.style.borderRadius = "0 0 10px 10px";
        navText.style.color = 'white';
        navText.style.left = '0';
        navText.style.top = '10px';
        navUl.style.right = '0px';
        navUl.style.margin = '0';
        navUl.style.top = '-10px';
    }
    else if(x.matches){
        body.style.padding = '0';
        body.style.margin = '0';
        navbar.style.height = '100px';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.flexDirection = 'column';
        navbar.style.top = '0px';
        navText.style.color = 'rgb(146, 247, 52)';
        navText.style.left = '0';
        navText.style.top = '0px';
        navUl.style.right = '0px';
        navUl.style.top = '0px';
    }
    else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        body.style.padding = '0';
        body.style.margin = '0';
        navbar.style.height = '60px';
        navbar.style.marginTop = '0px';
        navbar.style.backgroundColor = 'cadetblue';
        navbar.style.flexDirection = 'row';
        navbar.style.borderRadius = "0 0 20px 20px";
        navText.style.left = '10px';
        navText.style.color = 'white';
        navText.style.fontSize = '40px';
        navText.style.top = '-20px';
        navUl.style.right = '10px';
        navUl.style.top = '-20px';
        navLink1.style.fontSize = '20px';
        navLink2.style.fontSize = '20px';
        navLink3.style.fontSize = '20px';
        navLink4.style.fontSize = '20px';


  }
  
  else {
    navbar.style.height = '100px';
    navbar.style.marginTop = '30px';
    navbar.style.backgroundColor = 'transparent';
    navbar.style.flexDirection = 'row';
    navText.style.left = '120px';
    navText.style.color = 'rgb(146, 247, 52)';
    navText.style.fontSize = '50px';
    navText.style.top = '-15px';
    navUl.style.right = '120px';
    navUl.style.top = '0px';
    navLink1.style.fontSize = '30px';
    navLink2.style.fontSize = '30px';
    navLink3.style.fontSize = '30px';
    navLink4.style.fontSize = '30px';


    
  }
  if(x.matches){
    leftB.style.left = `${galPose-25}px`;
    rightB.style.right = `${galPose-25}px`;
  } else {
    leftB.style.left = `${galPose-50}px`;
    rightB.style.right = `${galPose-50}px`;
  }
}



var change = 0;

leftB.addEventListener('click', callLT);
rightB.addEventListener('click', callRT);

var myint = setInterval(rt, 5000);

function callLT() {
    clearInterval(myint);
    lt();
    myint = setInterval(rt, 5000);
}
function callRT() {
    clearInterval(myint);
    rt();
    myint = setInterval(rt, 5000);
}
function lt() {
    if(change != 0)
    {
        change += gW;
    } else {
        change -= (sW - gW);
    }

    doTrans();
}
function rt() {
    if(change*(-1) < sW - gW)
    {
        change -= gW;
    } else {
        change = 0;
    }
    doTrans();
}
function doTrans() {
    slide.style.transform = `translateX(${change}px)`;
}