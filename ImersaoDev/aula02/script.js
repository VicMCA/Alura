function Converter() {

    let valor = parseFloat(document.getElementById("valor").value);
    let valorReais = (valor / 5).toFixed(2);

    let resultado = `O valor em dólares é de ${valorReais} USD`;
    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = resultado;
}