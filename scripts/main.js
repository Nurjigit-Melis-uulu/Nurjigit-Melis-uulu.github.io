let links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i++) {
  const element = links[i];

  element.addEventListener("mousemove", function(e) {
    if (element.getAttribute("href") !== "#") {
      for (let a = 0; a < links.length; a++) {
        links[a].style.opacity = 0.5;
      }
      document.querySelector('a[href="#"]').style.opacity = 1;
      this.style.opacity = 1;
    }
  });

  element.addEventListener("mouseleave", function() {
    for (let a = 0; a < links.length; a++) {
      links[a].style.opacity = 1;
    }
  });

  element.addEventListener("click", function() {
    const blockID = element.getAttribute("href");

    if (element.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}
