document.addEventListener("DOMContentLoaded", () => {
  const divs = document.getElementsByClassName("color");
  const button = document.getElementById("button");

  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  button.addEventListener("click", () => {
    for (item of divs) {
      item.style.background = randomColor();
    }
  });
});
