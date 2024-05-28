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

// TYPING EFFECT
var app = document.getElementById('auto-type');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75
    });

    typewriter
        .typeString('Desenvolvedor Web')
        .pauseFor(3000)
        .deleteAll()
        .typeString('Cientista de Dados')
        .pauseFor(3000)
        .deleteAll()
        .typeString('Engenheiro de IA')
        .pauseFor(3000)
        .deleteAll()
        .start();