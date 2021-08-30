function abrirModal() {
  document.getElementById('cortina').style.backgroundColor = 'rgba(0,0,0,0.7)';
  document.getElementById('modal').style.marginTop = '80px';
}

function fecharModal() {
  document.getElementById('cortina').style.backgroundColor = '';
  document.getElementById('modal').style.marginTop = '';
}

function calcular(){
 var v1 = parseFloat(document.getElementById('v1').value);
 var v2 = parseFloat(document.getElementById('v2').value);
 var op = document.getElementById('op').value;

 var calculo; 

  switch(op) {
    case '+':
      calculo = v1 + v2;
      break;
    case '-':
      calculo = v1 - v2;
      break;
    case '*':
      calculo = v1 * v2;
      break;
    case '/': 
      calculo = v1 / v2;
      break;
    case '%':
      calculo = v1 % v2;
      break;
    case '**':
      calculo = v1 ** v2;
      break;
    case 'r':
      calculo = v1 ** (1/v2);
      break;
    default:
      break;
  }


  // if (op == "+") {
  //   calculo = v1 + v2;
  // }
  // if (op == "-") {
  //   calculo = v1 - v2;
  // }
  // if (op == "*") {
  //   calculo = v1 * v2;
  // }
  // if (op == "/") {
  //   calculo = v1 / v2;
  // }
  // if (op == "%") {
  //   calculo = v1 % v2;
  // }
  // if (op == "**") {
  //   calculo = v1 ** v2;
  // }
  // if (op == "r") {
  //   calculo = v1 ** (1/v2);
  // }

  document.getElementById('resultado').innerHTML = 'Resultado: '+calculo;

}

function validar() {
  var valor1 = document.getElementById('v1').style;
  var valor2 = document.getElementById('v2').style;
  var operacao = document.getElementById('op').style;
  var r = document.getElementById('resultado').style;


  if (document.getElementById('v1').value == '' || document.getElementById('v2').value == '') {
    r.color = 'red';
    if (document.getElementById('v1').value == '' && document.getElementById('v2').value == '' ) {
      document.getElementById('resultado').innerHTML = "Preencha os campos, valor 1 e valor 2";
      valor1.border = 'solid 2px red';
      valor2.border = 'solid 2px red';
      
    }else if (document.getElementById('v1').value == '') {
      document.getElementById('resultado').innerHTML = "Preencha o campos valor 1";
      valor1.border = 'solid 2px red';
      valor2.border = '';
    }else{
      document.getElementById('resultado').innerHTML = "Preencha o campos valor 2";
      valor1.border = '';
      valor2.border = 'solid 2px red';
    }
  }else{
    calcular()
    r.color = '';
    valor1.border = '';
    valor2.border = '';
  }


}