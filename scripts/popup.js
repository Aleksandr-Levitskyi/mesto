let editButton = document.querySelector('.button--edit');
let closeButton = document.querySelector('.button--close');

function lookPopUp(evt) {
    let popUp = document.querySelector('.popup');

    popUp.classList.remove('popup--hidden');
}

function hiddenPopUp(evt) {
    evt.preventDefault(); //отменяет перезагрузку страницы
    let popUp = document.querySelector('.popup');

    popUp.classList.add('popup--hidden');
}

editButton.addEventListener('click', lookPopUp);
closeButton.addEventListener('click', hiddenPopUp);

