function insert(num) {
    var numero = document.getElementById("res").innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean() {
   
    document.getElementById('res').innerHTML = "";
    
}

function back() {
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('res').innerHTML;
    if(resultado)
    {
        document.getElementById('res').innerHTML = eval(resultado);
    } else 
    {
        document.getElementById('res').innerHTML = "nada";
    }
}





const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos. textContent= s;


})
