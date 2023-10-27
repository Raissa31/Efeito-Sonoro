//Declaração/criação da função TocaSomPom
function TocaSomPom(){
    document.querySelector('#som_tecla_pom'). play();
}
//chamda ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('tecla_pom').onclick = TocaSomPom;

let contador = 0;
white(contador < 9){
    litaDeTeclas[0]. onclick = tocaSomPom;
    contador = contador + 1;
    console.long(contador);
}