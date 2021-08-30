function exibirMensagemEConfirmacao() {
  window.alert('Bem vindo');
  window.confirm('Continuar?');
}

function alterarCores() {
  document.bgColor = window.prompt('Informe a cor de fundo');
  document.fgColor = window.prompt('Informe a cor do texto');
}

function abrir() {
  document.getElementById('barra').style.width = '1024px';
  document.getElementById('barra').style.backgroundColor = 'red';
}

function fechar() {
  document.getElementById('barra').style.width = '30px';
  document.getElementById('barra').style.backgroundColor = 'blue';
}


