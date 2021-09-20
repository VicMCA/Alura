function exibirResultado() {

    let nome = document.getElementById("aluno-nome").value;

    let notaBimestreUm = parseFloat(document.getElementById("nota1").value);
    let notaBimestreDois = parseFloat(document.getElementById("nota2").value);
    let notaBimestreTres = parseFloat(document.getElementById("nota3").value);
    let notaBimestreQuatro = parseFloat(document.getElementById("nota4").value);

    let notaFinal = (notaBimestreQuatro + notaBimestreTres + notaBimestreDois + notaBimestreUm) / 4;
        
    let notaFixada = notaFinal.toFixed(1);
    let resultado;
    
    if (notaFixada >= 6) {
        resultado = "Nota final: " + notaFixada + "<br>" + nome + " foi aprovado!";
    } else {
        resultado = "Nota final: " + notaFixada + "<br>" + nome + " não foi aprovado...";
    }
    
    let exibirResultado = document.getElementById("resultado-nota");
    exibirResultado.innerHTML = resultado;

}