let resultado = document.getElementById("resultado")
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 0;

function Chutar() {
    let chute = parseInt(document.getElementById("valor").value);
    
    if ( chute === numeroSecreto ) {
        resultado.innerHTML = "Aêêêê! Acertasse!<br>";
        if ( tentativas < 5 ) {
            resultado.innerHTML += "Tás sagaz, hem? 🥳 <br>"
            resultado.innerHTML += "Você adivinhou em " + (tentativas+1) + " tentativas!";
        } else {
            resultado.innerHTML += "Demorasse, hem? 🧓 <br>"
            resultado.innerHTML += "Você adivinhou em " + (tentativas+1) + " tentativas!";
        }
        resetarNumero();
        resetarTentativas();
    } else if ( chute >= 0 && chute <= 10 ) {
        tentativas += 1;
        if ( chute > numeroSecreto ) {
            resultado.innerHTML = "Chutasse alto demais,<br>vai acertar um pombo desse jeito! 🐦 <br>";
            resultado.innerHTML += "Tentativas feitas: " + tentativas;
        } else {
            resultado.innerHTML = "Chutando baixo assim<br>só vai acertar em formigueiro 🐜 <br>";
            resultado.innerHTML += "Tentativas feitas: " + tentativas;
        }
    } else {
        tentativas += 1;
        resultado.innerHTML = "Só vale entre 0 e 10... 👀<br>";
        resultado.innerHTML += "Tentativas feitas: " + tentativas;            
    }
}

function resetarNumero() {
    return numeroSecreto = parseInt(Math.random() * 11);
}
        
function resetarTentativas() {
    return tentativas = 0;
}