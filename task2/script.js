const labelConsole = document.querySelector('#consoleLog'),
      labelAlert = document.querySelector('#alert'),
      labelPromt = document.querySelector('#prompt');
      

labelConsole.addEventListener('click', () => {
   alert(`Служит для вывода информации в консоль`);
});

labelAlert.addEventListener('click', () => {
    alert(`Служит для вывода текст с ожиданием, пока пользователь нажмёт кнопку «ОК».`);
 });

 labelPromt.addEventListener('click', () => {
    alert(`Служит для ввода информации с полем для ввода текста и кнопками OK/Отмена.`);
 });
