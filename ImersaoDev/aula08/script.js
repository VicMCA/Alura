let carta1 = {
    nome: "Bulbassauro",
    imagem: "https://vignette1.wikia.nocookie.net/pokemon/images/c/c5/May_Bulbasaur.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

let carta2 = {
    nome: "Darth Vader",
    imagem: "https://static.wikia.nocookie.net/starwars/images/f/fb/Fear_and_Dead_Men_AtG.png",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}

let carta3 = {
    nome: "Shiryu de Dragão",
    imagem: "https://static.wikia.nocookie.net/saintseiya/images/1/1d/Tech-Shiryu-RozansRisingDragon.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

const cartas = [carta1, carta2, carta3];

let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    let sorteioMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[sorteioMaquina];

    let sorteioJogador = parseInt(Math.random() * 3);
    while (sorteioJogador == sorteioMaquina) {
        sorteioJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[sorteioJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">';
    
    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += (`<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}<br>`);
    }

    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">';
    
    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += (`<p type="text" name="atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</p>`);
    }

    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = '<p class="resultado-final">Você Venceu!</p>';
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = '<p class="resultado-final">Você perdeu...</p>';
    } else {
        htmlResultado = '<p class="resultado-final">Você empatou.</p>';
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;

    exibirCartaMaquina();
}