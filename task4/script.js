
const addTextLink = document.querySelector('#text');

addTextLink.addEventListener('click', (event) => {
    /* Отменим стандартную обработку браузера */
    event.preventDefault(); 
    const textValue = prompt('Введите новый текст ссылки', 'Измените текст ссылки');
    // Если отправляем пустое поле или жмем отмену, предыдущее присвоение текста ссылки сохраняется
    if (!(textValue === '' || textValue == null)) {
        addTextLink.textContent = textValue;
    }  
});