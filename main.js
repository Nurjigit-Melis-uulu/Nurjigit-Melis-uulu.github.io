const menuButton = document.querySelector('#menu-button');
const arrayForButton = [1];
let line1 = document.querySelector('.line-1'); 
let line2 = document.querySelector('.line-2'); 
let line3 = document.querySelector('.line-3'); 
let menuUl = document.querySelector('#show-menu');
let menuBox = document.querySelector('.menu-box');
let optionsPageBox = document.querySelector('.options'); 

menuButton.addEventListener('click', function() {
    arrayForButton.push(1);
    if (arrayForButton.length % 2 == 0) {
        line1.style.transform = "rotate(45deg) translate(16px, 1px)";
        line2.style.transform = "translateX(64px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translate(16px, -1px)";
        menuUl.style.transform = "translateX(0)";
        menuUl.style.height = "auto";
    }
    else {
        line1.style.transform = "rotate(0deg) translate(0)";
        line2.style.transform = "translateX(0)";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg) translate(0)";
        menuUl.style.transform = "translateX(100%)";
        arrayForButton.length = 1;
        menuUl.style.height = "50px";
    }
});

document.documentElement.style.setProperty('--bgc-welcome-page', "to right, #23719e, #88dadd, #88dadd, #23719e"); 

/*
darkMod.addEventListener('change', function() {
    if(this.checked == true) {
        document.documentElement.style.setProperty('--bgc-welcome-page', "to right, rgb(62, 0, 104), rgb(99, 67, 206), rgb(99, 67, 206), rgb(62, 0, 104)");
    }
    else {
        document.documentElement.style.setProperty('--bgc-welcome-page', "to right, #23719e, #88dadd, #88dadd, #23719e");
    }
});
*/