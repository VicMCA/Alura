const listaFilmes = document.getElementById("listaFilmes");
const listaFilmesImagens = [];
const listaFilmesNomes = [];
const filmesAdicionados = [];

function adicionarFilme() {
    let filmeImagem = document.getElementById("filme").value;
    let filmeNome = document.getElementById("nome").value;
  
    if ( filmeImagem.endsWith(".jpg") || filmeImagem.endsWith(".png") || filmeImagem.endsWith(".jpeg") ) {
        adicionarFilmeLista(filmeImagem, filmeNome);
        listarNaTela(filmeNome, filmeImagem);
    } else {
        alert("Formato ou endereço de imagem inválido.");
    }      
    resetarInputs();
}

function adicionarFilmeLista(filmeImagem, filmeNome) {
    listaFilmesImagens.push(filmeImagem);
    listaFilmesNomes.push(filmeNome);
}

function listarNaTela(nome, imagem) {
    var novoFilmeGaleria = (`
    <div id="${nome}" class="film-container">
        <img class="film-poster" src="${imagem}" alt="">
        <button type="button" class="remove-button" onClick="return this.parentNode.remove();">X</button>
        <p class="filme-nome">${nome}</p>
    </div>
    `);
    filmesAdicionados.push(novoFilmeGaleria);
    listaFilmes.innerHTML += novoFilmeGaleria;
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