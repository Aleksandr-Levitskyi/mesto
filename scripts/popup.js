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



let editForm = document.querySelector('.form--profile-edit');

let nameInput = document.querySelector('.input--name')
let jobInput = document.querySelector('.input--job')


nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;

function setInput(evt) {
    evt.preventDefault();

    nameInput.value;
    jobInput.value;

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__job').textContent = jobInput.value;

    document.querySelector('.popup').classList.add('popup--hidden');
}

function closeForm() {
    nameInput.value = document.querySelector('.profile__name').textContent;
}

editForm.addEventListener('submit', setInput);
document.querySelector('.button__icon--close').addEventListener('click', closeForm);