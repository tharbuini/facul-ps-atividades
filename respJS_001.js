function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log(‘X / Y = ‘ + x + ‘ / ‘ + y);
    console.log(‘Quociente = ‘ + Math.floor(x / y));
    console.log(‘Resto = ‘ + (x % y));
}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    // Segue aqui seu código
   console.log(‘Cateto 1 = ‘ + x)
   console.log(‘Cateto 2 = ‘ + y)
   console.log(‘Hipotenusa = ’ + Math.sqrt(Math.pow(x,2) + (Math.pow(y,2)))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
switch (profissoes) {
  case 'Ator':
    console.log('Masculino’);
    break;
  case ‘Atriz’:
    console.log(‘Feminino’);
    break;
  case ‘Bombeiro’:
    console.log(‘Masculino’);
    break;
  case ‘Músico’:
    console.log(‘Masculino’);
    break;
  case ‘Musicista’:
    console.log(‘Indefinido’);
    break;
  case ‘Enfermeira’:
    console.log(‘Feminino’);
    break;
  case ‘Médico’:
    console.log(‘Masculino’);
    break;
  case ‘Médica’:
    console.log(‘Feminino’);
    break;
  case ‘Engenheiro’:
    console.log(‘Masculino’);
    break;
  case ‘Engenheira’:
    console.log(‘Feminino’);
    break;
  case ‘Presidente’:
    console.log(‘Indefinido’);
    break;
}

     

}



