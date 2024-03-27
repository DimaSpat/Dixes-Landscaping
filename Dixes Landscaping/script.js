function toggleMenu(x) {
  let menu = document.getElementById("headerResponsive");
  let content = document.getElementById("headerContent");

  x.classList.toggle("change");

  menu.classList.toggle("top-0");
  menu.classList.toggle("opacity-100");
}

function showDialog() {
  let dialog = document.getElementById("dialog");
  let body = document.body;
  dialog.classList.remove("hidden");
  dialog.classList.add("flex");
  setTimeout(() => {
    dialog.classList.remove("opacity-0");
    dialog.classList.add("opacity-100");
  }, 200);
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  let body = document.body;
  dialog.classList.remove("opacity-100");
  dialog.classList.add("opacity-0");
  setTimeout(() => {
    dialog.classList.remove("flex");
    dialog.classList.add("hidden");
  }, 500);
}
