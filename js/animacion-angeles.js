function moverCapas() {
  let scrolled = window.scrollY;

  let capa1 = document.getElementById("capa1");
  capa1.style.transform =
    "translateX(0vw) translateY(" + (0 + scrolled * 0.06) + "vw) scale(2)";

  let capa2 = document.getElementById("capa2");
  capa2.style.transform =
    "translateX(-30vw) translateY(" + (-5 + scrolled * 0.05) + "vw) scale(0.5)";

  let capa3 = document.getElementById("capa3");
  capa3.style.transform =
    "translateX(30vw) translateY(" + (10 + scrolled * 0.03) + "vw) scale(1)";

  let capa4 = document.getElementById("capa4");
  capa4.style.transform =
    "translateX(-5vw) translateY(" + (20 + scrolled * 0.01) + "vw) scale(2)";
}

window.addEventListener("scroll", moverCapas);
window.addEventListener("load", moverCapas);
