var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")

menuIcon.onclick = function() {
    //znaci ovdje na klik hocemo prvo da prosirimo width sidebar-a, znaci kad god kliknemo nja sidebar
//on dodaje klasu small-sidebar, a ako je dodao on ce je skloniti tako toggle radi
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}