const menuButton = document.querySelector('#menu-button');
const arrayForButton = [1];
let line1 = document.querySelector('.line-1'); 
    line2 = document.querySelector('.line-2'); 
    line3 = document.querySelector('.line-3'); 
    menuUl = document.querySelector('#show-menu');
    menuBox = document.querySelector('.menu-box');
    optionsPageBox = document.querySelector('.options'); 
    nameBox = document.querySelector('.name-box');
    inputFocus = document.querySelectorAll('input');
    label = document.querySelectorAll('label');
    email = document.querySelector('.email');
    links = document.querySelectorAll('nav ul li button');
    hoverDivsInLink = document.querySelectorAll('nav ul li button div');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        for (let i = 0; i < hoverDivsInLink.length; i++) {
            hoverDivsInLink[i].className = "hover";        
        }

        let parentThis = this.children;
        parentThis[0].className = "hover-active";
    });
}

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

email.addEventListener('change', function() {
	email.className = "mail";
});

for (var i = 0; i < inputFocus.length; i++) {
	let parentInput = inputFocus[i].parentElement;

	inputFocus[i].addEventListener('input', function() {
	if (this.value.length > 0) {
		parentInput.classList.add("visible");
		parentInput.classList.remove("hidden");
	}
	else {
		parentInput.classList.add("hidden");
		parentInput.classList.remove("visible");
	}
});
	inputFocus[i].addEventListener('change', function() {

	if (this.value.length > 0) {
		parentInput.classList.add("good");
		parentInput.classList.remove("hidden");
		parentInput.classList.add("visible");
	}
	else {
		parentInput.classList.add("mistake");
		parentInput.classList.remove("good");
		parentInput.classList.add("visible");
	}
});
};
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