let editButton = document.querySelector('.button--edit');
let closeButton = document.querySelector('.button--close');

console.log('страница перезагружена!');

function lookPopUp() {
    let popUp = document.querySelector('.popup');

    popUp.classList.remove('popup--hidden');
}

function hiddenPopUp() {
    let popUp = document.querySelector('.popup');

    popUp.classList.add('popup--hidden');
}

editButton.addEventListener('click', lookPopUp);



closeButton.addEventListener('click', hiddenPopUp);

