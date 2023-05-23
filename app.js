document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["form"];
  const backgroundImage = document.querySelector(".background-image");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    backgroundImage.style.backgroundImage = "none";

    backgroundImage.style.backgroundColor = "#999999";

    form.reset();
  });
});
