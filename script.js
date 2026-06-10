document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-pratica');
    const painelResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const mensagemImpacto = botao.getAttribute('data-impacto');
            
            // Atualiza o texto com a informação do botão clicado
            textoResultado.textContent = mensagemImpacto;
            
            // Remove a classe escondido para mostrar o resultado
            painelResultado.classList.remove('escondido');
            
            // Efeito visual simples de clique mudando o destaque do botão ativo
            botoes.forEach(b => b.style.transform = 'scale(1)');
            botao.style.transform = 'scale(1.03)';
        });
    });
});
