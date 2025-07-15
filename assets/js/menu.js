const abrirMenu = document.getElementById("menu")

const menuMobile = document.querySelector(".menuTop")

const fecharMenu = document.getElementById("icon")


abrirMenu.addEventListener("click", () => {
   if (menuMobile.style.display === "none" || menuMobile.style.display === "") {
      
      menuMobile.style.display = "block"
      fecharMenu.style.display = "block"
      
      
   }else {
      
      menuMobile.style.display = "none"
      
   }
   
   fecharMenu.addEventListener("click", () => {
      menuMobile.style.display = "none"
      fecharMenu.style.display = "none"
   })
   
   
   
})