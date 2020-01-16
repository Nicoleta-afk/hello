

var rectangle = document.querySelector("div");

function minimize() {
    current = rectangle.style.height;
    console.log(rectangle);
    var n = current.substring(0, current.legth - 1);
    console.log(n);
    var newer = --n + "%";
    rectangle.style.height = newer;
}

minimize();