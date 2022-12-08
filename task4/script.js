
const addTextForm = document.querySelector('#text');

addTextForm.addEventListener('click', (event) => {
    /* Отменим стандартную обработку браузера */
    event.preventDefault(); 
    addTextForm.textContent = prompt('Введите новый текст ссылки', 'Измените текст ссылки');
});