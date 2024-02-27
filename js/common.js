const $mobileMedia = window.matchMedia("(max-width: 767px)");
const $buttonWidth = document.querySelectorAll("button.min-width-350");

function myMobile(x) {
  for (let i = 0; i < $buttonWidth.length; i++) {
    if (x.matches) {
      $buttonWidth[i].classList.replace("min-width-350", "min-width-200");
    } else {
      $buttonWidth[i].classList.replace("min-width-200", "min-width-350");
    }
  }
}

myMobile($mobileMedia);

window.addEventListener("resize", () => {
  myMobile($mobileMedia);
});
