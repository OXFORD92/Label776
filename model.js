window.onload = function () {
  const minilogo = document.getElementById("minilogo");
    const navtelbtn = this.document.getElementById("navtelbtn")
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "sombre") {
      document.documentElement.style.setProperty("--mainbackcolor", "#1D1D1D");
      document.documentElement.style.setProperty("--maintextcolor", "#FFFFFF");
      document.documentElement.style.setProperty("--mainboxcolor", "#000000");
      minilogo.style.filter = "invert(1)";
      navtelbtn.style.filter = "brightness(1)";
    } else {
      document.documentElement.style.setProperty("--mainbackcolor", "#FFFFFF");
      document.documentElement.style.setProperty("--maintextcolor", "#000000");
      document.documentElement.style.setProperty("--mainboxcolor", "#D9D9D9");
      minilogo.style.filter = "invert(0)";
      navtelbtn.style.filter = "brightness(0)";
    }
  } else {
    document.documentElement.style.setProperty("--mainbackcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--maintextcolor", "#000000");
    document.documentElement.style.setProperty("--mainboxcolor", "#D9D9D9");
    minilogo.style.filter = "invert(0)";
    localStorage.setItem("theme", "clair");
    navtelbtn.style.filter = "brightness(0)";
  }
};

const btntheme = document.getElementById("btntheme");
const btntheme1 = document.getElementById("btntheme1");

btntheme1.addEventListener("click", function () {
  if (localStorage.getItem("theme") === "clair") {
    document.documentElement.style.setProperty("--mainbackcolor", "#1D1D1D");
    document.documentElement.style.setProperty("--maintextcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--mainboxcolor", "#000000");
    minilogo.style.filter = "invert(1)";
    navtelbtn.style.filter = "brightness(0)";

    localStorage.setItem("theme", "sombre");
  } else {
    document.documentElement.style.setProperty("--mainbackcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--maintextcolor", "#000000");
    document.documentElement.style.setProperty("--mainboxcolor", "#D9D9D9");
    minilogo.style.filter = "invert(0)";
    localStorage.setItem("theme", "clair");
    navtelbtn.style.filter = "brightness(1)";
  }
});

btntheme.addEventListener("click", function () {
  if (localStorage.getItem("theme") === "clair") {
    document.documentElement.style.setProperty("--mainbackcolor", "#1D1D1D");
    document.documentElement.style.setProperty("--maintextcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--mainboxcolor", "#000000");
    minilogo.style.filter = "invert(1)";
    navtelbtn.style.filter = "brightness(0)";

    localStorage.setItem("theme", "sombre");
  } else {
    document.documentElement.style.setProperty("--mainbackcolor", "#FFFFFF");
    document.documentElement.style.setProperty("--maintextcolor", "#000000");
    document.documentElement.style.setProperty("--mainboxcolor", "#D9D9D9");
    minilogo.style.filter = "invert(0)";
    localStorage.setItem("theme", "clair");
    navtelbtn.style.filter = "brightness(1)";
  }
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const navtel = document.getElementById("navtel");
const navtelbtn = document.getElementById("navtelbtn");
const nav_list = document.getElementById("nav_list");

let open = 0;

navtelbtn.addEventListener("click", function () {
    if (open==0){
        open=1;
    }else{
        open=0
    }

  nav_list.classList.toggle("nav__list__open");
  document.body.classList.toggle("body_noscool");
});

let c = 1;
let s = 1;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (window.matchMedia("(max-width: 780px)").matches && open==0 && scrollTop > 50) {
    if (scrollTop > lastScrollTop) {
      // On descend -> cacher la navbar
      navtel.style.top = "-100px";
      c = 0;
    } else {
      // On remonte -> afficher la navbar
      navtel.style.top = "0";
      c = 1;
    }

    lastScrollTop = scrollTop;
  } else {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // On descend -> cacher la navbar
      navbar.style.top = "-100px";
      s = 0;
    } else {
      // On remonte -> afficher la navbar
      navbar.style.top = "0";
      s = 1;
    }

    lastScrollTop = scrollTop;
  }
});

navtel.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 780px)").matches) {
    if (c == 0) {
      navtel.style.top = "0";
      c = 1;
    }
  } else {
    if (s == 0) {
      navbar.style.top = "0";
      s = 1;
    }
  }
});

navbar.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 780px)").matches) {
  } else {
    if (s == 0) {
      navbar.style.top = "0";
      s = 1;
    }
  }
});