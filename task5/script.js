
const elmLabel = document.querySelector('[data-label]'),
      elmButton = document.querySelector('[data-btn]'),
      duplicateField = document.querySelector('#duplicateField');

    elmLabel.addEventListener('keydown', event => {
        /* Отменим стандартную обработку браузера */
        event.preventDefault(); 
        // Проверим что нажали Энтер в поле Label
        if ( event.key === 'Enter') {
                duplicateField.textContent = '';
                duplicateField.textContent = elmLabel.value;
                elmLabel.value = '';
        } else {
        // Если нет, накапливаем строку    
            elmLabel.value += event.key;
        }   
    });

    elmButton.addEventListener('click', event => {
         /* Отменим стандартную обработку браузера */
        event.preventDefault(); 
        // Проверим что кликнули на кнопке левой кнопкой
        if ( event.which === 1) {
                duplicateField.textContent = '';
                duplicateField.textContent = elmLabel.value;
                elmLabel.value = '';
        }    
    });