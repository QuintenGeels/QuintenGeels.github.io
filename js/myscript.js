console.log("hello world");

document.getElementById("title-item").onclick = function() {changeColor()};


function changeColor() {
    document.getElementById("title-item").style.color = "white";
}