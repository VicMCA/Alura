const listaFilmes = document.getElementById("listaFilmes");
const listaFilmesImagens = [];
const listaFilmesNomes = [];
const filmesAdicionados = [];

// function adicionarFilme() {
//     let filmeImagem = document.getElementById("filme").value;
//     let filmeNome = document.getElementById("nome").value;
  
//     if ( filmeImagem.endsWith(".jpg") || filmeImagem.endsWith(".png") || filmeImagem.endsWith(".jpeg") ) {
//         if ( listaFilmesImagens.includes(filmeImagem) ) {
//             alert("Esta imagem já foi adicionada ao banco de dados.")
//         } else if ( listaFilmesNomes.includes(filmeNome) ) {
//             alert("Este filme já foi adicionado ao banco de dados.")
//         } else {
//             adicionarFilmeLista(filmeImagem, filmeNome);
//             listarNaTela();
//         }
//     } else {
//         alert("Formato ou endereço de imagem inválido.");
//     }      
//     resetarInputs();
// }

function adicionarFilme() {
    let filmeImagem = document.getElementById("filme").value;
    let filmeNome = document.getElementById("nome").value;
  
    if ( filmeImagem.endsWith(".jpg") || filmeImagem.endsWith(".png") || filmeImagem.endsWith(".jpeg") ) {
        adicionarFilmeLista(filmeImagem, filmeNome);
        listarNaTela();
    } else {
        alert("Formato ou endereço de imagem inválido.");
    }      
    resetarInputs();
}

function adicionarFilmeLista(filmeImagem, filmeNome) {
    if ( listaFilmesImagens.indexOf(filmeImagem) === -1 && listaFilmesNomes.indexOf(filmeNome) === -1 ) {
        listaFilmesImagens.push(filmeImagem);
        listaFilmesNomes.push(filmeNome);
    }
}

function listarNaTela() {

    let tamanhoLista = listaFilmesNomes.length;
    listaFilmes.innerHTML = "";

    for ( let ind = 0; ind < tamanhoLista; ind += 1 ) {
        var novoFilmeGaleria = (`
        <div id="${listaFilmesNomes[ind]}" class="film-container">
            <img class="film-poster" src="${listaFilmesImagens[ind]}" alt="">
            <button type="button" class="remove-button" onClick="return removerFilme(), this.parentNode.remove();">X</button>
            <p class="filme-nome">${listaFilmesNomes[ind]}</p>
        </div>
        `);
        filmesAdicionados.push(novoFilmeGaleria);
        listaFilmes.innerHTML += novoFilmeGaleria;
    }
}
    
function removerFilme() {

    let divs = listaFilmes.getElementsByTagName("div");
    let tamanhoLista = divs.length;

    for ( let ind = 0; ind < tamanhoLista; ind += 1 ) {
        if ( filmesAdicionados[ind] in divs != false ){
            listaFilmesImagens.splice(ind, 1);
            listaFilmesNomes.splice(ind, 1);
            filmesAdicionados.splice(ind, 1);
        }
    }
    console.log(listaFilmesNomes);
}

function resetarInputs() {
    document.getElementById("filme").value = "";
    document.getElementById("nome").value = "";     
}

/*
  https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg
  https://static.wikia.nocookie.net/starwars/images/4/48/Empirestrikesback.jpg
  https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg
  https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png
  https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg
  https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg
  https://static.wikia.nocookie.net/starwars/images/5/56/Star_Wars_Episode_VIII_The_Last_Jedi.png
*/