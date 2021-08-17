
function alterarCorDeFundoParaLaranja(cor) {
    document.bgColor = cor;
}

function alterarCorDaFonteParaBranco() {
    document.fgColor = 'white';
}

function modificarTituloDaPagina() {
    document.title = 'Aula de JavaScript';
}

function exibirConfirmacao() {
    window.confirm('Continuar?');
}

function mostrarMensagem() {
    window.alert('Alô Mundo!');
}

function solicitarNome() {
    window.prompt('Informe o nome:');
}

function exibirDataHoraDaModificacao() {
    window.alert(document.lastModified);
}

function imprimir() {
    window.print();
}

function executarTodosOsComandos() {
    if (window.confirm('Executar todos os comandos?') == true) {
        alterarCorDeFundoParaLaranja(window.prompt('Informe a cor de fundo:'));
        alterarCorDaFonteParaBranco();
        modificarTituloDaPagina();
        exibirConfirmacao();
        mostrarMensagem();
        solicitarNome();
        exibirDataHoraDaModificacao();
        imprimir();
    }else{
        window.alert('Volte sempre!!');
    }
}

function funcaoMensagemEConfirmacao() {
    window.alert('slaa');
    window.confirm('deseja continuar fi?');
}


function funcaoBackgroundEFont(corBg, corFg) {
    document.bgColor = corBg;
    document.fgColor = corFg;
}

function aumentarDiv() {
    var oDiv = document.getElementById("divzinha");

    var iWidth =  1024; // Desconta duas vezes o tamanho da borda

    var color = "red";
    
    oDiv.style.width = iWidth.toString() + "px";
    oDiv.style.backgroundColor = color.toString();

}

function diminuirDiv() {
    var oDiv = document.getElementById("divzinha");

    var iWidth =  30; // Desconta duas vezes o tamanho da borda

    var color = "blue";
    
    oDiv.style.width = iWidth.toString() + "px";
    oDiv.style.backgroundColor = color.toString();

}


