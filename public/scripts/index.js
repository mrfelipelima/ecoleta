const buttonSearch = document.querySelector('#page-home main a');
const modal = document.querySelector('#modal');
const close = document.querySelector('#modal .header a');

buttonSearch.addEventListener('click', () => {
    modal.classList.toggle('hide')
})

// Fecha o modão ao clicar no X (botão de fechar)
close.addEventListener('click', () => {
    modal.classList.toggle('hide')
})

// Fecha o modal ao pressionar Esc
document.addEventListener('keydown', event => {
    const keyName = event.key;
    if (keyName == 'Escape') {
        modal.classList.add('hide')
    }
})