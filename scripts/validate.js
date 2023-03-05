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

        //находим все филдсеты в форме
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__input-area'));

        //передираем массив и вешаем на каждый массив обработчик
        fieldsetList.forEach((fieldsetElement) => {
            setEventListeners(fieldsetElement);
        });
    });
}

const showError = (formElement, inputElement, errorMessage) => {
    //находим span элемент с помошью шаблонной строки
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.add('input_type_error');

    //присваиваем текст и класс span
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error');
};

const hideError = (formElement, inputElement) => {
    //находим span элемент с помошью шаблонной строки
    const errorElement = formElement.querySelector(`${inputElement.id}-error`);
    inputElement.classList.remove('input_type_error');

    //очищаем span и удаляем класс
    errorElement.textContent = '';
    errorElement.classList.remove('error');
};

function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        //showError(formElement, inputElement, inputElement.valiationMessage);
        console.log('isInvalid')
    } else {
        // hideError(formElement, inputElement);
        console.log('isValid');
    }
}

function setEventListeners(formElement) {
    //собираем все инпуты из формы  в массив
    const inputList = Array.from(formElement.querySelectorAll('input'));

    console.log(inputList);

    //перебираем массив и добавляем каждому
    //инпуту обработчик и валидацию
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
        });
    });
}

function showFormInConsole(formElement) {
    console.log(formElement);
}

enableValidation();
