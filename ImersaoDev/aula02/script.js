/*
    Adicionar outras moedas para converter.
    Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
    Conversor de temperaturas entre farenheit, kelvin e celcius.
    Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/

function Converter() {
  
    let valor = parseFloat(document.getElementById("valor").value);
    let valorReais = (valor / 5).toFixed(2);
    
    let resultado = `O valor em dólares é de ${valorReais} USD`;
    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = resultado;
}