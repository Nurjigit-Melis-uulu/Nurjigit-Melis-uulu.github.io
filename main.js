const menuButton = document.querySelector('#menu-button');
const arrayForButtonNav = [1];
const arrayForButtonAside = [1];
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
    containerAllPages = document.querySelector('.container');
    buttonForAside = document.querySelector('aside button');

buttonForAside.addEventListener('click', function() {
    arrayForButtonAside.push(1);
    if (arrayForButtonAside.length % 2 == 0) {
        buttonForAside.parentElement.style.transform = "translate(285px)";
        buttonForAside.style.transform = "rotateZ(180deg)"
    }
    else {
        buttonForAside.parentElement.style.transform = "translate(0px)";
        buttonForAside.style.transform = "rotateZ(0deg)"
        arrayForButtonAside.length = 1;
    }
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {

        buttonForAside.parentElement.style.transform = "translate(0px)";
        buttonForAside.style.transform = "rotateZ(0deg)"
        arrayForButtonAside.length = 1;

        for (let i = 0; i < hoverDivsInLink.length; i++) {
            hoverDivsInLink[i].className = "hover";        
        }
        
        let parentThis = this.children;
        parentThis[0].className = "hover-active";

        let index = this.value;
        const arrayContents = containerAllPages.children;

        for (let i = 0; i < arrayContents.length; i++) {
            arrayContents[i].style.display = "none";
            arrayContents[5].style.display = "block";
            arrayContents[index].style.display = "block";
        }
    });
}

menuButton.addEventListener('click', function() {
    arrayForButtonNav.push(1);
    if (arrayForButtonNav.length % 2 == 0) {
        line1.style.transform = "rotate(45deg) translate(16px, -2px)";
        line2.style.transform = "translateX(64px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translate(16px, 2px)";
        menuUl.style.transform = "translateX(0)";
        menuUl.style.height = "auto";
        nameBox.style.transform = "translate(-100%)";
        menuBox.style.height = "auto";
        
        buttonForAside.parentElement.style.transform = "translate(0px)";
        buttonForAside.style.transform = "rotateZ(0deg)"
        arrayForButtonAside.length = 1;
    }
    else {
        line1.style.transform = "rotate(0deg) translate(0)";
        line2.style.transform = "translateX(0)";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg) translate(0)";
        menuUl.style.transform = "translateX(100%)";
        arrayForButtonNav.length = 1;
        menuUl.style.height = "50px";
        nameBox.style.transform = "translate(0)";
        menuBox.style.height = "50px";
        
        buttonForAside.parentElement.style.transform = "translate(0px)";
        buttonForAside.style.transform = "rotateZ(0deg)"
        arrayForButtonAside.length = 1;
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