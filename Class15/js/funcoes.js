function calcularMedia() {
  var nomeAluno = window.prompt('informe o nome do aluno: ');
  var nota1 = parseFloat(window.prompt('Informe a Nota 1: '));
  var nota2 = parseFloat(window.prompt('Informe a Nota 2: '));

  var media = nota1 + nota2 / 2;

  if (nota1 >= 10 & nota2 >= 10) {
    media = 10;
  }

  var situacao;

  if (media >= 6) {
    situacao = 'Aluno aprovado';
  }else{
    situacao = 'Aluno reprovado';
  }

  window.alert('Dados do aluno'+
  '\nNome: '+nomeAluno+ 
  '\nNota 1: '+nota1+
  '\nNota 2: '+nota2+
  '\nMédia: '+media+
  '\nSituação: '+situacao);

}

function verificarNumero() {
  var n1 = parseFloat(window.prompt('Digite um numero: '));
  
  if(n1 > 0) {
    window.alert(n1+' É um numero positivo');
  }else if(n1 < 0){
    window.alert(n1+' É um numero negativo');
  }else{
    window.alert(n1+' É nulo');
  }

}
