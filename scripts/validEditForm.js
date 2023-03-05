//активация валидации
function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(form);
    })
}

//проверка валидации 
function checkValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideError(formElement, inputElement);
    }
}

function showError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add('error_is-active');
    errorElement.textContent = errorMessage;
}

function hideError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add('error_is-active');
    errorElement.textContent = "";
}

//проверяем валидность каждого инпута в форме,
//если хотя бы один не валидный, то возвращаем false
function hasInvalidInput(inputList) {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
}

//меняем стиль кнопки в зависимости от валидности инпута в форме
function toggleButton(inputList, button) {
    if (hasInvalidInput(inputList)) {
        button.classList.add('button_is-active');
    } else {
        button.classList.remove('button_is-active');
    }
}

//находим инпуты внутри формы и вешаем на нее обработчик 
//с проверкой валидности ввода
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.input'));
    const button = formElement.querySelector('.form__button');

    console.log(button);

    toggleButton(inputList, button);

    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkValidity(formElement, input);
            toggleButton(inputList, button);
        });
    })
}

enableValidation();
