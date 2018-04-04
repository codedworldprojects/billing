//var activeIndex = 1;
//activeLink(activeIndex);

function activeLink(n) {
    var i;
    var x = document.getElementsByClassName("sLink");
//    if (n > x.length) {activeIndex = 1;} 
//    if (n < 1) {activeIndex = x.length;} 
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-back-blue");
    }
    x[n-1].classList.add("active-back-blue");
}