const formEdit = document.querySelector('.form_profile_input');

const inputNameEdit = formEdit.querySelector('.input_type_name');
const inputJobEdit = formEdit.querySelector('.input_type_job');

const errorNameEdit = formEdit.querySelector('name-input-error');
const errorJobEdit = formEdit.querySelector(`${inputJobEdit.id}-error`);

//проверка валидации 
function checkValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        console.log('isInvalid');
        showError(formElement, inputElement, inputElement.validationMessage);
    } else {
        console.log('isValid');
    }
}

function showError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    console.log(errorElement);
}

function hideError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.textContent = "";
}


//находим инпуты внутри формы и вешаем на нее обработчик 
//с проверкой валидности ввода
function setEventListeners(formElement) {
    const inputElement = Array.from(formElement.querySelectorAll('.input'));

    inputElement.forEach((input) => {
        input.addEventListener('input', function () {
            checkValidity(formElement, input);
        });
    })
}

setEventListeners(formEdit);
