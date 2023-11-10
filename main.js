//Declaração/criação da função TocaSom
function TocaSomPom(){
    document.querySelector('#som_tecla_pom'). play();
}
//chamda ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('tecla_pom').onclick = TocaSomPom;

let contador = 0;
whitle(contador < istaDeTeclas.length){
    const teclas = listaDeTeclas[contador]
    const efeito = teclas.classlist[1];
    const idAudio = `"#som_"  ${efeito;}`"
    litaDeTeclas[contador].onclick = function(){
        tocaSomPom(idAudio);
    }
    contador = contador + 1;
    console.long(contador);
}