let header = document.querySelector("#header")
let menu = document.querySelector("#menu-icon")
let nav = document.querySelector("#navlinks")


menu.onclick = () => {
    menu.classList.toggle("fa-x")
    nav.classList.toggle("open-menu")
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scrolling', window.scrollY > 0)
})