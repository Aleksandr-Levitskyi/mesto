let editButton = document.querySelector('.button_edit');
let closeButton = document.querySelector('.button_close');

function lookPopUp(evt) {
    let popUp = document.querySelector('.popup');

    popUp.classList.remove('popup_hidden');
}

function hiddenPopUp(evt) {
    evt.preventDefault(); //отменяет перезагрузку страницы
    let popUp = document.querySelector('.popup');

    popUp.classList.add('popup_hidden');
}

editButton.addEventListener('click', lookPopUp);
closeButton.addEventListener('click', hiddenPopUp);


let editForm = document.querySelector('.form_profile-edit');

let nameInput = document.querySelector('.input_name')
let jobInput = document.querySelector('.input_job')


nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;

function setInput(evt) {
    evt.preventDefault();

    nameInput.value;
    jobInput.value;

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__job').textContent = jobInput.value;

    document.querySelector('.popup').classList.add('popup_hidden');
}

function closeForm() {
    nameInput.value = document.querySelector('.profile__name').textContent;
}

editForm.addEventListener('submit', setInput);
document.querySelector('.button__icon_close').addEventListener('click', closeForm);