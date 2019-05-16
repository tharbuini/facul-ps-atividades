var pares = [];
// Crie aqui suas funções de apoio

function Q1() {
    console.log('Q1');
    var aux = document.getElementById('numerosQ1').text;
    // Segue aqui seu código

    for (let i = 0; i <= Number.parseInt(aux); i+= 2) {
    pares_.push(i);
    }
    console.log(pares_)
    document.getElementById('RQ1').innerHTML = pares_;

}