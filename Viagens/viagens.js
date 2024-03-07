var prox1 = document.querySelector('#prox')
var prox2 = document.querySelector('#prox2')
var ant1 = document.querySelector('#ant')
var ant2 = document.querySelector('#ant2')
var imgs = document.querySelector('#image')
var tit = document.querySelector('.locais h1')



var n = 1

ant2.style.display = "none"
prox2.style.display = "none"
ant1.style.display = "block"
prox1.style.display = "block"


function Next() {
    n++
    imgs.src = "imgVi/EB" + n + ".jpeg"

    if(n>7) {
        n=1
        imgs.src = "imgVi/EB" + n + ".jpeg"
    }
}

function Back() {
    n--
    imgs.src = "imgVi/EB" + n + ".jpeg"

    if(n<1) {
        n=7
        imgs.src = "imgVi/EB" + n + ".jpeg"
    }
}


function Eb() {
    tit.innerHTML = "10Esqd CavalariaMec Exército"
    imgs.src = "imgVi/EB" + n + ".jpeg"
    n = 1

    ant2.style.display = "none"
    prox2.style.display = "none"
    ant1.style.display = "block"
    prox1.style.display = "block"
    

    function Next() {
        n++
        imgs.src = "imgVi/EB" + n + ".jpeg"
    
        if(n>7) {
            n=1
            imgs.src = "imgVi/EB" + n + ".jpeg"
        }
    }
    
    function Back() {
        n--
        imgs.src = "imgVi/EB" + n + ".jpeg"
    
        if(n<1) {
            n=7
            imgs.src = "imgVi/EB" + n + ".jpeg"
        }
    }
}


function Pmal() {
    tit.innerHTML = "Batalhão PM-Alagoas"
    imgs.src = "imgVi/PMAL1.jpeg"
    n = 1

    ant2.style.display = "block"
    prox2.style.display = "block"
    ant1.style.display = "none"
    prox1.style.display = "none"

}

function NextPM() {
    n++
    imgs.src = "imgVi/PMAL" + n + ".jpeg"

    if(n>3) {
        imgs.src = "imgVi/PMAL" + n + ".jpeg"
        n=1
    }
}

function BackPM() {
    n--
    imgs.src = "imgVi/PMAL" + n + ".jpeg"

    if(n<1) {
        n=2
        imgs.src = "imgVi/PMAL" + n + ".jpeg"
    }
}