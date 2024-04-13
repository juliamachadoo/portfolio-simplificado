/* 
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 4 - pegar o botão 'mostrar mais' e esconde-lo
*/

//  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarMais = document.querySelector(".btn-mostrar-mais");

const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

//  Passo 2 - identificar o clique no botão
botaoMostrarMais.addEventListener("click", () => {
  //Passo 3 - adicionar a classe ativo nos projetos escondidos
  projetosInativos.forEach((projetoInativos) => {
    projetoInativos.classList.add("ativo");
    // Ao clicar no botão mostrar mais, procuraremos a classe 'projetosInativos' e, para cada projeto com a classe not:('ativo') - ou seja, inativo - , iremos trocar a classe para ativo.
  });

  //Passo 4 - pegar o botão 'mostrar mais' e esconde-lo
  botaoMostrarMais.classList.add("remover");
});
