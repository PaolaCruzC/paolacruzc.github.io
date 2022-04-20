function toggleMenu() {
  var visibleClass = "visible";
  var generalNavMenu = document.getElementById("generalMenuUl");
  var isVisible = generalNavMenu.classList.contains(visibleClass);
  if (isVisible) {
    generalNavMenu.classList.remove(visibleClass);
  } else {
    generalNavMenu.classList.add(visibleClass);
  }
}
