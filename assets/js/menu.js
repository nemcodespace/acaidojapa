const btnAbrir = document.getElementById("menu");
const btnFechar = document.getElementById("icon");
const menuMobile = document.querySelector(".menuTop");

btnAbrir.addEventListener("click", () => {
  menuMobile.classList.add("ativo");
  btnFechar.style.display = "block";
});

btnFechar.addEventListener("click", () => {
  menuMobile.classList.remove("ativo");
  btnFechar.style.display = "none";
});

// Fecha ao clicar em um link
const links = menuMobile.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("ativo");
    btnFechar.style.display = "none";
  });
});

// Fecha ao clicar fora do menu
document.addEventListener("click", (e) => {
  const clicouFora =
    !menuMobile.contains(e.target) &&
    !btnAbrir.contains(e.target) &&
    !btnFechar.contains(e.target);

  if (menuMobile.classList.contains("ativo") && clicouFora) {
    menuMobile.classList.remove("ativo");
    btnFechar.style.display = "none";
  }
});