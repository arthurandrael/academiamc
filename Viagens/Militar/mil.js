var prox1 = document.querySelector('#prox')

var ant1 = document.querySelector('#ant')
var imgs = document.querySelector('#image')
var tit = document.querySelector('.locais h1')

var txt = document.querySelector('#carreira')



var n = 1

ant1.style.display = "block"
prox1.style.display = "block"


function Next() {
    n++
    imgs.src = "../../images/mil" + n + ".png"

    if(n==1) {
        tit.innerHTML = "ESA (Escola de Sargentos das Armas)"
        txt.innerHTML = "<strong>Formação:</strong> Prepara Sargentos de carreira para o Exército Brasileiro.</br> <strong>Requisitos:</strong><br>Nível médio completo ou matrícula no último ano do ensino médio.<br><strong>Idade:</strong> Mínima de 17 e máxima de 24 anos (área geral).<br><strong>Altura mínima:</strong> 1,60 m para homens e 1,55 m para mulheres.<br><strong>Restrições de tatuagens:</strong> Não possuir tatuagens ofensivas.<br><strong>Estado civil:</strong> Não ter filhos ou dependentes e não ser casado."
    }
    if(n==2) {
        tit.innerHTML = "EsPCEx (Escola Preparatória de Cadetes do Exército)"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição de ensino superior do Exército Brasileiro que prepara cadetes para a Academia Militar das Agulhas Negras (AMAN).</br><strong>Formação:</strong> Os cadetes da EsPCEx seguem para a AMAN, onde se formam como oficiais do Exército.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato ou naturalizado e possuir CPF.</br>Ter concluído o Ensino Médio no ano da matrícula.</br>Possuir no mínimo 17 e no máximo 22 anos no ano da matrícula.</br>Possuir altura mínima de 1,60 metros para os homens e 1,57 metros para as mulheres"
    }
    if(n==3) {
        tit.innerHTML = "EEAR (Escola de Especialistas de Aeronáutica)"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição da Força Aérea Brasileira (FAB) que forma especialistas em diversas áreas, como mecânica, eletrônica e informática.</br><strong>Formação:</strong> Os alunos da EEAR se tornam sargentos especialistas e atuam em atividades técnicas na FAB.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter concluído o Ensino Médio.</br>Idade entre 17 e 25 anos.</br>Altura mínima de 1,54 metros e máxima de 2,00 metros."
    }
    if(n==4) {
        tit.innerHTML = "AFA (Academia da Força Aérea)"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição de ensino superior da FAB que forma oficiais aviadores, intendentes e de infantaria.</br><strong>Formação:</strong> Os cadetes da AFA se tornam pilotos, controladores de tráfego aéreo, entre outros.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter concluído o Ensino Médio.</br>Idade entre 18 e 23 anos.</br>Altura entre 1,54 metros e 2,00 metros"
    }
    if(n==5) {
        tit.innerHTML = "Escola Naval"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição da Marinha do Brasil que forma oficiais para atuar na Marinha.</br><strong>Formação:</strong> Os alunos da Escola Naval se tornam aspirantes a oficial e podem seguir carreiras como engenheiros navais, oficiais de máquinas, entre outros.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Não ser casado ou ter constituído união estável e não ter filhos.</br>Ter 18 anos completos e menos de 23 anos.</br>Ter concluído o Ensino Médio."
    }
    if(n==6) {
        tit.innerHTML = "Fuzileiro Naval"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma unidade da Marinha especializada em operações terrestres e anfíbias.</br><strong>Formação:</strong> Os fuzileiros navais passam por treinamento intenso para atuar em combate e em missões de segurança.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter entre 18 e 21 anos.</br>Ter concluído o Ensino Médio ou Técnico."
    }


    if(n>6){
        n=1
        tit.innerHTML = "ESA (Escola de Sargentos das Armas)"
        txt.innerHTML = "<strong>Formação:</strong> Prepara Sargentos de carreira para o Exército Brasileiro.</br> <strong>Requisitos:</strong><br>Nível médio completo ou matrícula no último ano do ensino médio.<br><strong>Idade:</strong> Mínima de 17 e máxima de 24 anos (área geral).<br><strong>Altura mínima:</strong> 1,60 m para homens e 1,55 m para mulheres.<br><strong>Restrições de tatuagens:</strong> Não possuir tatuagens ofensivas.<br><strong>Estado civil:</strong> Não ter filhos ou dependentes e não ser casado."
        imgs.src = "../../images/mil" + n + ".png"    }
}

function Back() {
    n--
    imgs.src = "imgVi/EB" + n + ".jpeg"

    if(n<1) {
        n=6
        imgs.src = "../../images/mil" + n + ".png"
    }

    if(n==1) {
        tit.innerHTML = "ESA (Escola de Sargentos das Armas)"
        imgs.src = "../../images/mil" + 1 + ".png"
        txt.innerHTML = "<strong>Formação:</strong> Prepara Sargentos de carreira para o Exército Brasileiro.</br> <strong>Requisitos:</strong><br>Nível médio completo ou matrícula no último ano do ensino médio.<br><strong>Idade:</strong> Mínima de 17 e máxima de 24 anos (área geral).<br><strong>Altura mínima:</strong> 1,60 m para homens e 1,55 m para mulheres.<br><strong>Restrições de tatuagens:</strong> Não possuir tatuagens ofensivas.<br><strong>Estado civil:</strong> Não ter filhos ou dependentes e não ser casado."
    }
    if(n==2) {
        tit.innerHTML = "EsPCEx (Escola Preparatória de Cadetes do Exército)"
        imgs.src = "../../images/mil" + 2 + ".png"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição de ensino superior do Exército Brasileiro que prepara cadetes para a Academia Militar das Agulhas Negras (AMAN).</br><strong>Formação:</strong> Os cadetes da EsPCEx seguem para a AMAN, onde se formam como oficiais do Exército.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato ou naturalizado e possuir CPF.</br>Ter concluído o Ensino Médio no ano da matrícula.</br>Possuir no mínimo 17 e no máximo 22 anos no ano da matrícula.</br>Possuir altura mínima de 1,60 metros para os homens e 1,57 metros para as mulheres"
    }
    if(n==3) {
        tit.innerHTML = "EEAR (Escola de Especialistas de Aeronáutica)"
        imgs.src = "../../images/mil" + 3 + ".png"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição da Força Aérea Brasileira (FAB) que forma especialistas em diversas áreas, como mecânica, eletrônica e informática.</br><strong>Formação:</strong> Os alunos da EEAR se tornam sargentos especialistas e atuam em atividades técnicas na FAB.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter concluído o Ensino Médio.</br>Idade entre 17 e 25 anos.</br>Altura mínima de 1,54 metros e máxima de 2,00 metros."
    }
    if(n==4) {
        tit.innerHTML = "AFA (Academia da Força Aérea)"
        imgs.src = "../../images/mil" + 4 + ".png"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição de ensino superior da FAB que forma oficiais aviadores, intendentes e de infantaria.</br><strong>Formação:</strong> Os cadetes da AFA se tornam pilotos, controladores de tráfego aéreo, entre outros.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter concluído o Ensino Médio.</br>Idade entre 18 e 23 anos.</br>Altura entre 1,54 metros e 2,00 metros"
    }
    if(n==5) {
        tit.innerHTML = "Escola Naval"
        imgs.src = "../../images/mil" + 5 + ".png"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma instituição da Marinha do Brasil que forma oficiais para atuar na Marinha.</br><strong>Formação:</strong> Os alunos da Escola Naval se tornam aspirantes a oficial e podem seguir carreiras como engenheiros navais, oficiais de máquinas, entre outros.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Não ser casado ou ter constituído união estável e não ter filhos.</br>Ter 18 anos completos e menos de 23 anos.</br>Ter concluído o Ensino Médio."
    }
    if(n==6) {
        tit.innerHTML = "Fuzileiro Naval"
        imgs.src = "../../images/mil" + 6 + ".png"
        txt.innerHTML = "<strong>Trata-se de:</strong> Uma unidade da Marinha especializada em operações terrestres e anfíbias.</br><strong>Formação:</strong> Os fuzileiros navais passam por treinamento intenso para atuar em combate e em missões de segurança.</br><strong>Requisitos específicos:</strong></br>Ser brasileiro nato.</br>Ter entre 18 e 21 anos.</br>Ter concluído o Ensino Médio ou Técnico."
    }
}
