// Seleciona todas as letras
const letters = document.querySelectorAll('.letter');

// Adiciona eventos de mouse sobre cada letra
letters.forEach(letter => {
    // Quando o mouse entra na área da letra (hover)
    letter.addEventListener('mouseover', () => {
        // Reinicia a animação de traçado ao passar o mouse
        letter.style.animation = 'none'; // Para a animação
        setTimeout(() => {
            letter.style.animation = ''; // Reinicia a animação
        }, 10);

        // Muda a cor temporariamente
        const paths = letter.querySelectorAll('.stem, .dot');
        paths.forEach(path => {
            path.setAttribute('data-original-color', path.style.stroke); // Guarda a cor original
            path.style.stroke = 'rgb(255, 0, 0)'; // Muda para vermelho
        });
    });

    // Quando o mouse sai da área da letra
    letter.addEventListener('mouseout', () => {
        // Restaura a cor original
        const paths = letter.querySelectorAll('.stem, .dot');
        paths.forEach(path => {
            path.style.stroke = path.getAttribute('data-original-color'); // Retorna a cor original
        });
    });

    // Ao clicar na letra, a animação pausa e a letra ganha destaque
    letter.addEventListener('click', () => {
        letter.style.animation = 'none'; // Pausa a animação
        letter.classList.toggle('highlight'); // Alterna uma classe de destaque
    });
});
