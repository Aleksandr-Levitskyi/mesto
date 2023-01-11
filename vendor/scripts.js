let editButton = document.querySelector('.button--edit');
let closeButton = document.querySelector('.button--close');

function lookPopUp() {
    let popUp = document.querySelector('.pop-up');
    let popUpForm = document.querySelector('.pop-up__form');

    popUp.classList.remove('pop-up--hidden');
    popUpForm.classList.remove('pop-up__form--hidden');
}

function hiddenPopUp() {
    let popUp = document.querySelector('.pop-up');
    let popUpForm = document.querySelector('.pop-up__form');

    popUp.classList.add('pop-up--hidden');
    popUpForm.classList.add('pop-up__form--hidden');
}

editButton.addEventListener('click', lookPopUp);

closeButton.addEventListener('click', hiddenPopUp);