


function Q1() {

    console.log('Q1');
    var pares_= [];
    var aux = document.getElementById('numerosQ1').value;
    // Segue aqui seu código

    for (let i = 0; i <= aux; i+= 2) {
    pares_.push(i);
    }
    console.log(pares_)
    document.getElementById('RQ1').innerHTML = pares_;

}
function Q2() {

    console.log('Q2');
    var primo= [];
    var aux = document.getElementById('numerosQ2').value;
    // Segue aqui seu código

    for (let i = 0; i <= aux; i+= 2) {
    primo.push(i);
    }
    console.log(primo)
    document.getElementById('RQ2').innerHTML = primo;

}