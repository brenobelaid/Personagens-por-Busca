let urlParams = new URLSearchParams(window.location.search);
let paginaBusca = urlParams.get('nome');




let section = document.getElementById("pagina");



for (let dado of dados) {
    //busca por match nome = termobusca
    if(dado.titulo.includes(paginaBusca) ){
  // Cria um novo item de resultado e adiciona ao HTML
            caixas = `
                <img class="fundo" src="/imagens/grunge-paper-background.jpg" alt="">
                <img class="fundo superior" src="${dado.link}"alt="">
                <div class="ficha">
                    <img class="ficha_imagem" src="/imagens/ficha_fundo.jfif" alt="">
                    <h3 class="ficha_texto" > <a href="${dado.carac}">Dados</a></h3>
                </div>
                <h6 class="topico">${dado.titulo}</h6>
                <div class="historia">
                    <h2 class="topico"> Origem:</h2>
                <p class="texto"> ${dado.origem}</p>
                <h2 class="topico"> ${dado.desenvolve1}</h2>
                <p class="texto"> ${dado.desenvolve}</p>
                <button class="voltar">
                    <a href="/lobby/lobby.html" >voltar </a>
                </button>
                </div>
        `;
    }
}


section.innerHTML = caixas;


