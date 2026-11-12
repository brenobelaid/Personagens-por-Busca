//pega o termo de busca e salva numa variavel

let urlParams = new URLSearchParams(window.location.search);
let termoBusca = urlParams.get('termo');

// verificar se nao houve input
if(termoBusca== null){
    termoBusca="";
}
// evitar erro de caps lock
else{
    termoBusca= termoBusca.toLowerCase()
}


// Seleciona a seção onde os resultados serão exibidos
let section = document.getElementById("resultado-pesquisa");

// String para armazenar o HTML dos resultados, boa pratica
let caixas = "";

// evitar erro de caps lock no macth da busca e nome personagem
let nome = "";
let classe= "";
let abre = "";
// Itera sobre cada resultado da pesquisa
for (let dado of dados) {
    nome=dado.titulo.toLowerCase()
    classe= dado.tag.toLowerCase()
    abre= "/lobby/personagens/personagens.html?nome=" + dado.titulo;
    //busca por match nome = termobusca
    if(nome.includes(termoBusca) || classe.includes(termoBusca)){
  // Cria um novo item de resultado e adiciona ao HTML
        caixas += `
            <div class="item-resultado">
            <h2>${dado.titulo} <a href="${abre}" class="persona">(ficha)</a></h2>
            <img src="${dado.link}" class="fotinhas" />
            <p class="descricao meta">${dado.descricao}</p>
            </div>
        `;
    }
}

// Atualiza o conteúdo da seção com os resultados
section.innerHTML = caixas;