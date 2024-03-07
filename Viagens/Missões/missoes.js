var prox1 = document.querySelector('#prox')

var ant1 = document.querySelector('#ant')
var imgs = document.querySelector('#image')
var tit = document.querySelector('.locais h1')



var n = 1

ant1.style.display = "block"
prox1.style.display = "block"


function Next() {
    n++
    imgs.src = "imgMi/Set" + n + ".jpeg"

    if(n>2) {

        tit.innerHTML = "Exército Brasileiro em Xexéu"
        imgs.src = "imgMi/EbXexeu" + n + ".jpeg"
    }

    if(n>5){
        n=1
        tit.innerHTML = "Desfile 7 de Setembro"
        imgs.src = "imgMi/Set" + n + ".jpeg"
    }
}

function Back() {
    n--
    imgs.src = "imgVi/EB" + n + ".jpeg"

    if(n<1) {
        n=5
        imgs.src = "imgVi/EbXexeu" + n + ".jpeg"
    }
}

