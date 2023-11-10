//Declaração/criação da função TocaSom
function TocaSomPom(){
    document.querySelector('#som_tecla_pom'). play();
}
//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
document.querySelector('tecla_pom').onclick = TocaSomPom;
//criação da repetição " while" trocando pelo "for" com variavel, condição e incremento

for(let contador = 0;contador < istaDeTeclas.length; contador = contador ++) {
    const teclas = listaDeTeclas[contador]//guarda o contador da lista
    const efeito = teclas.classlist[1];//chama o 2° item classe individual do som 
    const idAudio = `"#som_"  ${efeito}`;//" utiliza a junção templete tring ${ }
    litaDeTeclas[contador].onclick = function(){ //função anônima auxiliar para chamar tocaSom
        tocaSomPom(idAudio);//chamada de função tocaSom com parâmetro IdAudio
    }
    
    console.long(contador);
}