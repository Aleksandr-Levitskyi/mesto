class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;

        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector('.form__button');
    }

    _checkValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hideError(inputElement);
        }

    }

    _showError = (inputElement, errorMessage) => {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);

        this._errorElement.classList.add(this._config.errorClass);
        this._errorElement.textContent = errorMessage;
    }

    _hideError = (inputElement) => {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);

        this._errorElement.classList.add(this._config.errorClass);
        this._errorElement.textContent = "";
    }

    _hasInvalidInput = () => {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    toggleButton = () => {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.setAttribute('disabled', 'true');
        } else {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.removeAttribute('disabled');
        }
    }

    _setEventListeners = () => {
        this.toggleButton();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement);
                this.toggleButton();

            });
        });
    }

    enableValidation = () => {
        this._setEventListeners();
    }
}

export default FormValidator;