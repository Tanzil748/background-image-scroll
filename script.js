const bgImgEl = document.getElementById("bg-image");
const containerEl = document.querySelector(".container");

window.addEventListener("scroll", function () {
  updateImage();
});

function updateImage() {
  bgImgEl.style.opacity = 1 - window.pageYOffset / 800;
  bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
