const bar = document.getElementById("imgIcon");
// console.log(bar);

const menu = document.getElementById("menu");
// console.log(menu);

if (bar) {
  bar.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
