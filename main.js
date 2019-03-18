const menuButton = document.querySelector("#menu-button");
const arrayForButtonNav = [1];
const arrayForButtonAside = [1];
let menuUl = document.querySelector("#show-menu");
let menuBox = document.querySelector(".menu-box");
let inputFocus = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let email = document.querySelector(".email");
let containerAllPages = document.querySelector(".container");
let submitButton = document.querySelector("#submit");
let ulInService = document.querySelector(".box-services ul");
let corouselInService = document.querySelector(".carousel");
let downButton = document.querySelector("#down");
let upButton = document.querySelector("#up");
let translateYForcorouselInService = 0;
let translateY = 0;
let valueArray = 0;
let drawer = document.querySelector("nav .drawer");
let boll = false;
let backDrop = document.querySelector(".back-drop");
let body = document.querySelector("body");
let linkInFooter = document.querySelector("footer a");

backDrop.addEventListener("click", function() {
  drawer.style.transform = "translate(-100%)";
  backDrop.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    drawer.style.transform = "translateX(0)";
    backDrop.style.display = "block";
  } else {
    drawer.style.transform = "translate(-100%)";
  }
});

email.addEventListener("change", function() {
  email.className = "mail";
});

for (var i = 0; i < inputFocus.length; i++) {
  let parentInput = inputFocus[i].parentElement;

  inputFocus[i].addEventListener("input", function() {
    if (this.value.length > 0) {
      parentInput.classList.add("visible");
      parentInput.classList.remove("hidden");
    } else {
      parentInput.classList.add("hidden");
      parentInput.classList.remove("visible");
    }
  });
  inputFocus[i].addEventListener("change", function() {
    if (this.value.length > 0) {
      parentInput.classList.add("good");
      parentInput.classList.remove("hidden");
      parentInput.classList.add("visible");
    } else {
      parentInput.classList.add("mistake");
      parentInput.classList.remove("good");
      parentInput.classList.add("visible");
    }
  });
}
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

upButton.addEventListener("click", function() {
  translateY += 60;
  valueArray -= 1;

  ulInService.style.transform = "translateY(" + translateY + "px)";

  checkButtonInService();
});
downButton.addEventListener("click", function() {
  translateY -= 60;
  valueArray += 1;

  ulInService.style.transform = "translateY(" + translateY + "px)";

  checkButtonInService();
});

if (valueArray == 0) {
  upButton.disabled = true;
  downButton.disabled = false;
}
if (valueArray == 4) {
  downButton.disabled = true;
  upButton.disabled = false;
}

const navLinks = document.querySelectorAll("nav a");
const content = document.querySelectorAll(".content");

let activeLink = navLinks[0]; // Home

navLinks.className = "";

navLinks.forEach(function(navLink) {
  //active home page in begin
  document.getElementById(activeLink.href.split("#").pop()).className =
    "active content";

  navLink.addEventListener("click", function(event) {
    // Deactivate current page
    activeLink.className = "";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "content";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active-link";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "active content";

    windowZero();

    event.preventDefault();
  });
});

linkInFooter.addEventListener("click", function(event) {
  // Deactivate current page
  for (let i = 0; i < content.length; i++) {
    content[i].className = "content";
  }

  // Set new page
  activeLink = this;

  // Activate new page
  document.getElementById(activeLink.href.split("#").pop()).className =
    "active content";

  windowZero();

  event.preventDefault();
});

function checkButtonInService() {
  if (valueArray == 0) {
    upButton.disabled = true;
    downButton.disabled = false;
  } else {
    upButton.disabled = false;
  }
  if (valueArray == 4) {
    downButton.disabled = true;
    upButton.disabled = false;
  } else {
    downButton.disabled = false;
  }

  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
    lis[valueArray].className = "active-li";
  }
}
window.addEventListener("scroll", function(event) {
  let nav = document.querySelector("nav");

  let positionNav = nav.getBoundingClientRect();
  let positionDoc = body.getBoundingClientRect();

  if (positionNav.top == positionDoc.top) {
    nav.style.cssText =
      "position: absolute; top: 0; left: 0; box-shadow: none; background: transparent; transition: all .6s linear;";
    console.log(nav.getBoundingClientRect());
  }
  if (positionNav.top < 0) {
    nav.style.cssText =
      "position: fixed; top: 0; left: 0; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); background: #16263f; transition: all .4s linear;";
    console.log(nav.getBoundingClientRect());
  }
});
function windowZero() {
  window.getBoundingClientRect().top = 0;
}
