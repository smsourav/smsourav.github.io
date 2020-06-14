window.onscroll = function() {scrollFunction()};
window.onload = function() {auto()};

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
}
var j=1;

function auto(){
    if(j < 7)
    {
        document.querySelector('.image-box'+(j+1)).classList.add('dpb');
        document.querySelector('.image-box'+j).classList.remove('dpb');
        j++;
    }
    else {
        document.querySelector('.image-box1').classList.add('dpb');
        document.querySelector('.image-box7').classList.remove('dpb');
        j=1;
    }

    setTimeout(auto, 5000);
}



function next(){
    if(j < 7)
    {
        document.querySelector('.image-box'+(j+1)).classList.add('dpb');
        document.querySelector('.image-box'+j).classList.remove('dpb');
        j++;
    }
    else {
        document.querySelector('.image-box1').classList.add('dpb');
        document.querySelector('.image-box7').classList.remove('dpb');
        j=1;
    }
}

function pre(){
    if(j == 1)
    {
        j=7;
        document.querySelector('.image-box1').classList.remove('dpb');
        document.querySelector('.image-box7').classList.add('dpb');
    }
    else {
        j--;
        document.querySelector('.image-box'+j).classList.add('dpb');
        document.querySelector('.image-box'+(j+1)).classList.remove('dpb');
    }
}