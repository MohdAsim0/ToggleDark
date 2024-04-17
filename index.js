const btn = document.querySelector("#circle");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");

let flag = true;
function toggleTheme() {
  if (flag === true) {
    circle.classList.add("right-move");
    // body.style.backgroundColor = "black";
    body.style.backgroundImage = "url(./dark.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";

    circle.style.backgroundColor = "white";
    heading.style.color = "white";
    circle.classList.remove("left-move");
    flag = false;
  } 
  else {
    circle.classList.add("left-move");
    // body.style.backgroundColor = "white";

    body.style.backgroundImage = "url(./white.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";

    circle.style.backgroundColor = "white";
    heading.style.color = "black";

    circle.classList.remove("right-move");
    flag = true;
  }
}

btn.addEventListener("click", toggleTheme);
