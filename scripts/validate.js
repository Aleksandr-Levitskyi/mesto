function enableValidation() {
    //находим все формы на странице
    //и создаем из них массив
    const formList = Array.from(document.querySelectorAll('.form'));
    //перебераем массив и вещаем обработчик 
    //на каждую форму
    formList.forEach(function (formElement) {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        //выыодим каждую форму в консоль
        console.log(formElement);
    });
}



const showError = (formElement, inputElement, errorMessage) => {
    //находим span элемент с помошью шаблонной строки
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.add('');

    //присваиваем текст и класс span
    errorElement.textContent = errorMessage;
    errorElement.classList.add('');
};

const hideError = (formElement, inputElement) => {
    //находим span элемент с помошью шаблонной строки
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.remove('');

    //очищаем span и удаляем класс
    errorElement.textContent = '';
    errorElement.classList.remove('');
};

enableValidation();