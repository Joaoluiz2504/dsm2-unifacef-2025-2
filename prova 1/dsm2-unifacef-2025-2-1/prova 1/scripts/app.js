function mostrarTela(numero) {
    // Esconde todas as telas
    var telas = document.querySelectorAll('.screen');
    for (var i = 0; i < telas.length; i++) {
        telas[i].classList.remove('active');
    }
    
    // Remove active de todos os botões
    var botoes = document.querySelectorAll('.nav-btn');
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove('active');
    }
    
    // Mostra a tela selecionada
    document.getElementById('tela' + numero).classList.add('active');
    
    // Marca o botão como ativo
    botoes[numero - 1].classList.add('active');
}