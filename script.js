function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
    var icon = document.querySelector('.menu-icon');
    icon.classList.toggle('active');
  }