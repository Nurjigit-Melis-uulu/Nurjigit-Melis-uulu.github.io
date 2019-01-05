const menuButton = document.querySelector('#menu-button');
const arrayForButton = [1];
let line1 = document.querySelector('.line-1'); 
let line2 = document.querySelector('.line-2'); 
let line3 = document.querySelector('.line-3'); 
let menuUl = document.querySelector('#show-menu');
let menuBox = document.querySelector('.menu-box');
let optionsPageBox = document.querySelector('.options'); 
let nameBox = document.querySelector('.name-box');

menuButton.addEventListener('click', function() {
    arrayForButton.push(1);
    if (arrayForButton.length % 2 == 0) {
        line1.style.transform = "rotate(45deg) translate(16px, 1px)";
        line2.style.transform = "translateX(64px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translate(16px, -1px)";
        menuUl.style.transform = "translateX(0)";
        menuUl.style.height = "auto";
        nameBox.style.transform = "translate(-100%)";
    }
    else {
        line1.style.transform = "rotate(0deg) translate(0)";
        line2.style.transform = "translateX(0)";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg) translate(0)";
        menuUl.style.transform = "translateX(100%)";
        arrayForButton.length = 1;
        menuUl.style.height = "50px";
        nameBox.style.transform = "translate(0)";
    }
});

document.documentElement.style.setProperty('--bgc-welcome-page', "to right, #23719e, #88dadd, #88dadd, #23719e"); 

let inputFocus = document.querySelectorAll('input');
let label = document.querySelectorAll('label');
let email = document.querySelector('.email');

email.addEventListener('change', function() {
	email.className = "mail";
});

for (var i = 0; i <= inputFocus.length; i++) {
	let parentInput = inputFocus[i].parentElement.classList;

	inputFocus[i].addEventListener('input', function() {
	if (this.value.length > 0) {
		parentInput.add.classList = "hidden";
		parentInput.remove.className = "visible";
	}
	else {
		parentInput.add.className = "visible";
		parentInput.remove.className = "hidden";
	};

	inputFocus[i].addEventListener('change', function() {

		if (this.value.length > 0) {
			inputFocus.className = "mistake";
			label.className = "hidden";
		}
		else {
			inputFocus.className = "good";
			label.className = "visible";
		};
	});
});
}
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