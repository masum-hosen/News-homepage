// Select hero image here
let imgBtn = document.querySelector("#imgChange");
const windoSize = () => {
  if (window.innerWidth < 792) {
    imgBtn.src = "./assets/images/image-web-3-mobile.jpg";
  } else {
    imgBtn.src = "./assets/images/image-web-3-desktop.jpg";
  }
};
windoSize();
// Add event listener for window resize
window.addEventListener("resize", windoSize);
// icon image change here
const iconBar = document.getElementById("imgIcon");
var images = [
  "./assets/images/icon-menu.svg",
  "./assets/images/icon-menu-close.svg",
];
var currentIndex = 0;
function showImage(index) {
  iconBar.src = images[index];
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
iconBar.addEventListener("click", nextImage);
