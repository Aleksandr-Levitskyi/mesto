//активация валидации
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

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
    inputElement.classList.add(config.inputErrorClass);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;
}

function hideError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);

    errorElement.classList.add(config.errorClass);
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
        button.classList.add(config.inactiveButtonClass);
        button.setAttribute('disabled', 'true');
    } else {
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
}

//находим инпуты внутри формы и вешаем на нее обработчик
//с проверкой валидности ввода
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const button = formElement.querySelector('.form__button');

    toggleButton(inputList, button);

    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkValidity(formElement, input);
            toggleButton(inputList, button);
        });
    })
}

enableValidation(config);