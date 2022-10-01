let hamburger = document.getElementById('hamburger')
let menus = document.getElementById('menu')

hamburger.onclick = function(){
  menus.classList.toggle('menu-active')
}
