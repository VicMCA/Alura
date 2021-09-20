let listaFilmes = [ 
    "https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg", 
    "https://static.wikia.nocookie.net/starwars/images/4/48/Empirestrikesback.jpg", 
    "https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg", 
    "https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png",
    "https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg",
    "https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg",
    "https://static.wikia.nocookie.net/starwars/images/5/56/Star_Wars_Episode_VIII_The_Last_Jedi.png" ]

for (filme in listaFilmes) {
    document.write(`<img src="${listaFilmes[filme]}" style="max-heigth: 200px;" alt="">`);
}