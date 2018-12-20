let darkMod = document.querySelector('#Dark-page');


document.documentElement.style.setProperty('--bgc-welcome-page', "to right, #23719e, #88dadd, #88dadd, #23719e"); 

darkMod.addEventListener('change', function() {
    if(this.checked == true) {
        document.documentElement.style.setProperty('--bgc-welcome-page', "to right, rgb(62, 0, 104), rgb(99, 67, 206), rgb(99, 67, 206), rgb(62, 0, 104)");
    }
    else {
        document.documentElement.style.setProperty('--bgc-welcome-page', "to right, #23719e, #88dadd, #88dadd, #23719e");
    }
});