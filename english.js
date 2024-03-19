// funcao para corrigir a questao, dizendo qual a resposta correta 

// etapas:
// 1- ao apertar o botao ira ativar a funcao de corrigir a questao 

// 2- a funcao vai procurar no codigo a alternativa com a id "correct"

// 3- apos pegar a alternativa correta vai mudar o background para outra cor  

function correction() {
    const getElement = document.getElementById("correct");
    getElement.style.background = "green";
    
 
}