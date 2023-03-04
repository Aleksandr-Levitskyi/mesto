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

const showError = (input, errorMessage) => {
    input.classList.add('');
};

const hideError = (input) => {
    input.classList.remove('');
};

enableValidation();