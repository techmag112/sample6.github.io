
const elmLabel = document.querySelector('[data-label]'),
      elmButton = document.querySelector('.btn'),
      duplicateField = document.querySelector('#duplicateField');

    elmLabel.addEventListener('keydown', event => { 
        // Проверим что нажали Энтер в поле Label
        if ( event.keyCode === 13 ) { 
                // Этот момент не понимаю! Почему без отмены стандартного обработчика
                // textContent не присваивается, а в отладчике - присваивается.
                event.preventDefault(); 
                duplicateField.textContent = elmLabel.value;
                elmLabel.value = '';
        }   
    });

    elmButton.addEventListener('click', event => {
         /* Отменим стандартную обработку браузера */
        event.preventDefault(); 
        // Проверим что кликнули на кнопке левой кнопкой
        if ( event.which === 1) {
                duplicateField.textContent = '';
                console.log(elmLabel.value);
                elmLabel.value = '';
        }    
    });