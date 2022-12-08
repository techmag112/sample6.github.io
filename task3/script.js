"use strict";

const trafficLightEl = document.querySelector('#trafficLight'),
      lamps = trafficLightEl.querySelectorAll('.light');
      

function changeLight() { 
    // Флаг текущего цвета (красный по умолчанию)
    let colorScheme = 2;
    for (let i = 0; i <= 2; i++) {
        if (!lamps[i].classList.contains('Black')) {
            // Если у какого-то элемента цвет не черный, меняем флаг 
            colorScheme = i;
            // Если нашли цвет, прерываем цикл
            break;
        }
    }
    // Согласно флагу - меняем класс цвета на следующий цвет по схеме:
    // красный -> зеленый, зеленый -> желтый, желтый -> красный
    if (colorScheme == 0) {
        lamps[0].classList.remove('Green');
        lamps[0].classList.add('Black');
        lamps[1].classList.remove('Black');
        lamps[1].classList.add('Yellow');
    } else { 
        if (colorScheme == 1) {
            lamps[1].classList.remove('Yellow');
            lamps[1].classList.add('Black');
            lamps[2].classList.remove('Black');
            lamps[2].classList.add('Red');
        } else {
            if (colorScheme == 2) {
                lamps[2].classList.remove('Red');
                lamps[2].classList.add('Black');
                lamps[0].classList.remove('Black');
                lamps[0].classList.add('Green');
            
            } 
        }
    }
}


trafficLightEl.addEventListener('click', function(event) {
    // Один обработчик ставим на вышестоящий элемент-родителя (слой-контейнер), 
    // и ставим обработку только если клик на элемент светофора, а не на контейнер или экран  
    if (event.target.classList.contains('light')) {
        changeLight();
    }    
});