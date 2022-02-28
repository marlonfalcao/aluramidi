function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
    elemento.play();
    } // não precisa colocar elemento != null, porque se deixar sem nada o js entende que é nulo//
    else {
        console.log("Elemento não encontrado ou seletor inválido!")
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        
        //console.log(evento.code == 'Space')
        //console.log(evento.code == 'Enter')

        if (evento.code ==='Space' || evento.code ==='Enter') {
        tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')        
    }
    
}
