//Declaração/criação da função TocaSomPom
function TocaSomPom(){
    document.querySelector('#som_tecla_pom'). play();
}
//chamda ou invocação da função tocaSomPom ao clicar no botão
document.querySelector('tecla_pom').onclick = TocaSomPom;

//Declaração/criação da função tocaSomClap
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();

//chamada ou invocação da função tocaSomClap ao clipe no botão
document.querySelector('.tecla_clap').onclick = tocaSomClap
}