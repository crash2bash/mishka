var show = document.querySelector(".page-header__logo");
// var menu_close = document.querySelector(".site-list__wrapper");
var close_left = document.querySelector(".site-list__container-left");
var close_right = document.querySelector(".site-list__container-right");;

show.addEventListener("click", function() {
    if (close_left.classList.contains("menu-close") || (close_right.classList.contains("menu-close"))) {
        close_left.classList.remove("menu-close")
        close_right.classList.remove("menu-close")
        show.classList.remove("page-header__item--open");
        close_left.classList.add("menu-open");
        close_right.classList.add("menu-open");
        show.classList.add("page-header__item--close");
    } else {
        close_left.classList.remove("menu-open");
        close_right.classList.remove("menu-open");
        show.classList.remove("page-header__item--close");
        close_left.classList.add("menu-close");
        close_right.classList.add("menu-close");
        show.classList.add("page-header__item--open");
    }
});

// var show = document.querySelector(".page-header__logo");
// var menu_close = document.querySelector(".site-list__wrapper");

// show.addEventListener("click", function() {
//     if (menu_close.classList.contains("menu-close")) {
//         menu_close.classList.remove("menu-close")
//         show.classList.remove("page-header__item--open");
//         menu_close.classList.add("menu-open");
//         show.classList.add("page-header__item--close");
//     } else {
//         menu_close.classList.remove("menu-open");
//         show.classList.remove("page-header__item--close");
//         menu_close.classList.add("menu-close");
//         show.classList.add("page-header__item--open");
//     }
// });
