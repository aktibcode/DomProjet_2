//var btn = document.getElementById("btn");
/*var btn = document.getElementsByClassName("change-color-btn");

console.log(btn[0]);
let zone = document.getElementById("color-box")

btn[0].onclick = function () {
    let x = Math.random() * 255
    let y = Math.random() * 255
    let z = Math.random() * 255
    zone.style.backgroundColor = "rgb("+x+","+y+","+z+")";
}

console.log();

let zone = document.getElementById("color-box")

console.log(zone);

btn.addEventListener("click", function (e) { 

    // console.log(e.target.tagName);
    let x = Math.random() * 255
    let y = Math.random() * 255
    let z = Math.random() * 255
    zone.style.backgroundColor = "rgb("+x+","+y+","+z+")";

});

*/

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}
let btn = document.getElementById("btn");
    let colorBox = document.getElementById("color-box")
    btn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor()
});




