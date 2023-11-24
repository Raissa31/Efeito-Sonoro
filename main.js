//Declaração/criação da função TocaSom
function TocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla

//criação da repetição " while" trocando pelo "for" com variavel, condição e incremento

for(let contador = 0;contador < istaDeTeclas.length; contador = contador ++) {
    const teclas = listaDeTeclas[contador]//guarda o contador da lista
    const efeito = teclas.classlist[1];//chama o 2° item classe individual do som 
    const idAudio = `"#som_"  ${efeito}`;//" utiliza a junção templete tring ${ }
    litaDeTeclas[contador].onclick = function(){ //função anônima auxiliar para chamar tocaSom
        tocaSom(idAudio);//chamada de função tocaSom com parâmetro IdAudio
    }
    console.long(contador);
    teclas.onkeydwon = function(evento){

        console.log(evento.code === 'Space')

        if(evento.code == 'Space'){
teclas.classlist.add('ativa');
        }
        teclas.classlist.add('ativa')
    if(evento.code != 'Tab'){
        teclas.classlist.add('ativa')
    }
    
    console.long(contador);
    teclas.onkeydwon = function(){
        teclas.classlist.add('ativa')

}