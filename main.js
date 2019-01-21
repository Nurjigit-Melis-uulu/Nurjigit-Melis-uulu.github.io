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
    submitButton = document.querySelector('#submit');
    ulInService = document.querySelector('.box-services ul');
    corouselInService = document.querySelector('.corousel');
    downButton = document.querySelector('#down');
    upButton = document.querySelector('#up');
    translateYForcorouselInService = 0;
    translateY = 0;
    valueArray = 0;


menuButton.addEventListener('click', function() {
    arrayForButtonNav.push(1);
    if (arrayForButtonNav.length == 2) {
        activeNav();
    }
    else {
        defaultNav();
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
*/
const lis = ulInService.children;

upButton.addEventListener('click', function() {
    translateY += 60;
    valueArray -= 1;

    ulInService.style.transform = "translateY(" + translateY + "px)";

    checkButtonInService()
});
downButton.addEventListener('click', function() {
    translateY -= 60;
    valueArray += 1;

    ulInService.style.transform = "translateY(" + translateY + "px)";

    checkButtonInService()
});

if (valueArray == 0) {
    upButton.disabled = true;
    downButton.disabled = false;
}    
if (valueArray == 4) {
    downButton.disabled = true;
    upButton.disabled = false;
}

const navLinks = document.querySelectorAll('nav a');
const content = document.querySelectorAll('.content');

let activeLink = navLinks[0]; // Home

navLinks.className = "";

navLinks.forEach(function(navLink) {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].className = "hover";
    }

    //active home page in begin
    activeLink.className = "hover-active";
    document
    .getElementById(activeLink.href.split('#').pop())
    .className = "active content";
  navLink.addEventListener('click', function(event) {
    // Deactivate current page
    activeLink.className = "hover";
    document
      .getElementById(activeLink.href.split('#').pop())
      .className = "content";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "hover-active";
    document
      .getElementById(activeLink.href.split('#').pop())
      .className = "active content";

    event.preventDefault();
  });
});



function defaultNav() {
    line1.style.transform = "rotate(0deg) translate(0)";
    line2.style.transform = "translateX(0)";
    line2.style.opacity = "1";
    line3.style.transform = "rotate(0deg) translate(0)";
    menuUl.style.transform = "translateX(100%)";
    arrayForButtonNav.length = 1;
    menuUl.style.height = "50px";
    nameBox.style.transform = "translate(0)";
    menuBox.style.height = "50px";
}
function activeNav() {
    line1.style.transform = "rotate(45deg) translate(16px, -2px)";
    line2.style.transform = "translateX(64px)";
    line2.style.opacity = "0";
    line3.style.transform = "rotate(-45deg) translate(16px, 2px)";
    menuUl.style.transform = "translateX(0)";
    menuUl.style.height = "auto";
    nameBox.style.transform = "translate(-100%)";
    menuBox.style.height = "auto";
}
function checkButtonInService() {
    if (valueArray == 0) {
        upButton.disabled = true;
        downButton.disabled = false;
    }   
    else {
        upButton.disabled = false;
    } 
    if (valueArray == 4) {
        downButton.disabled = true;
        upButton.disabled = false;
    }
    else {
        downButton.disabled = false;
    }
    
    for (let i = 0; i < lis.length; i++) {
        lis[i].className =  "";
        lis[valueArray].className = "active-li";
    }
}