// class jogador {
//     constructor(nome) {
//         this._nome = nome;
//         this._vitorias = 0;
//         this._empates = 0;
//         this._derrotas = 0;
//     }
//     consoleResults() {
//         return (`
//             Nome: ${this._nome} \n
//             Vitórias: ${this._vitorias} \n
//             Empates: ${this._empates} \n
//             Derrotas: ${this._derrotas} \n
//         `)
//     }
//     get nome() {
//         return this._nome;
//     }
//     get vitorias() {
//         return this._vitorias;
//     }
//     get empates() {
//         return this._empates;
//     }
//     get derrotas() {
//         return this._derrotas;
//     }
//     set vitorias(pontuacao) {
//         this._vitorias = pontuacao;
//     }
//     set empates(pontuacao) {
//         this._empates = pontuacao;
//     }
//     set derrotas(pontuacao) {
//         this._derrotas = pontuacao;
//     }
// }

const rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
const paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
const gui = { nome: "Guilherme", vitorias: 2, empates: 0, derrotas: 2, pontos: 0 };
const jogadores = [ rafa, paulo, gui ];
const tabelaJogadores = document.getElementById("tabelaJogadores");

rafa.pontos = calcularPontos(rafa);
paulo.pontos = calcularPontos(paulo);
gui.pontos = calcularPontos(gui);

exibirResultadosTela(jogadores);

function exibirResultadosTela(jogadores) {
    let elemento = "";

    for ( let i = 0; i < jogadores.length ; i++ ) {
        elemento += (`<tr>
            <td>${jogadores[i].nome}</td>
            <td>${jogadores[i].vitorias}</td>
            <td>${jogadores[i].empates}</td>
            <td>${jogadores[i].derrotas}</td>
            <td>${jogadores[i].pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória<br>🎇</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate<br>⚖</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota<br>❌</button></td>
          </tr>`);
    }

    tabelaJogadores.innerHTML = elemento;
}

function calcularPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function adicionarVitoria(i) {
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    exibirResultadosTela(jogadores);
}

function adicionarEmpate(i) {
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibirResultadosTela(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calcularPontos(jogador);
    exibirResultadosTela(jogadores);
}

function resetarPontuacao() {
    for ( let jogador in jogadores ) {
        jogador.vitorias = 0;
        jogador.empates = 0;
        jogador.derrotas = 0;
        jogador.pontos = 0;
    }
    exibirResultadosTela(jogadores);
}

function adicionarJogador() {

}

function removerJogador() {

}