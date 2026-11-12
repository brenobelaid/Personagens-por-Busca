const urlParams = new URLSearchParams(window.location.search);
const paginaBusca = urlParams.get('nome');
const section = document.getElementById("pagina");

let caixas = "";

if (paginaBusca) {
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(paginaBusca.toLowerCase())) {
            document.title = `${dado.titulo} | Fichas RPG`;

            caixas = `
                <!-- Fundo apenas com o pergaminho velho -->
                <img class="fundo" src="/imagens/grunge-paper-background.jpg" alt="Fundo de pergaminho">

                <!-- Barra superior: Voltar à esquerda + Ficha à direita -->
                <div class="barra-topo">
                    <a class="voltar" href="/lobby/lobby.html">← Voltar</a>

                    <a class="ficha" href="${dado.carac}" target="_blank" rel="noopener noreferrer">
                        <img class="ficha_imagem" src="/imagens/ficha_fundo.jfif" alt="Ícone da ficha">
                        <span class="ficha_texto">Ficha (Dados)</span>
                    </a>
                </div>

                <!-- Caixa centralizada na tela -->
                <div class="caixa-central">
                    <!-- Cabeçalho FIXO dentro da caixa: Miniatura clicável + Nome -->
                    <div class="cabecalho-personagem">
                        <div class="avatar-container" onclick="alternarZoomImagem()" title="Clique para ampliar ou reduzir">
                            <img class="avatar-miniatura" src="${dado.link}" alt="Retrato de ${dado.titulo}">
                        </div>
                        <h1 class="titulo-principal">${dado.titulo}</h1>
                    </div>

                    <!-- Área rolável APENAS para a história -->
                    <div class="historia">
                        <h2 class="topico">Origem:</h2>
                        <p class="texto">${dado.origem}</p>

                        <h2 class="topico">${dado.desenvolve1}</h2>
                        <p class="texto">${dado.desenvolve}</p>
                    </div>
                </div>

                <!-- Overlay invisível que ativa quando a imagem é ampliada -->
                <div class="overlay-zoom" id="overlay-zoom" onclick="alternarZoomImagem()">
                    <img class="imagem-ampliada" src="${dado.link}" alt="Retrato ampliado de ${dado.titulo}">
                    <span class="aviso-fechar">Clique na imagem para reduzir</span>
                </div>
            `;
            break;
        }
    }
}

if (!caixas) {
    caixas = `
        <img class="fundo" src="/imagens/grunge-paper-background.jpg" alt="Fundo de pergaminho">
        <div class="barra-topo">
            <a class="voltar" href="/lobby/lobby.html">← Voltar</a>
        </div>
        <div class="caixa-central">
            <div class="cabecalho-personagem">
                <h1 class="titulo-principal">Personagem não encontrado</h1>
            </div>
            <div class="historia">
                <p class="texto">Volte ao lobby e selecione um personagem válido.</p>
            </div>
        </div>
    `;
}

section.innerHTML = caixas;

// Função que alterna entre a miniatura e a imagem ampliada (~60% da tela)
function alternarZoomImagem() {
    const overlay = document.getElementById("overlay-zoom");
    if (overlay) {
        overlay.classList.toggle("ativo");
    }
}