let nameInfo = document.querySelector('.profile__name'); //имя
let jobInfo = document.querySelector('.profile__job'); //профессия

let popUp = document.querySelector('.popup'); //модальное окно
let popupForm = document.querySelector('.popup__form'); //блок с формой попапа

let nameInput = document.querySelector('.input_type_name'); //инпут имя
let jobInput = document.querySelector('.input_type_job'); //инпут профессия

let closeBtn = document.querySelector('.button_type_close'); //кнопка закрыть
let editBtn = document.querySelector('.button_type_edit'); //кнопка редактировать

//открытие попап
function openPopup() {
    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;

    popUp.classList.add('popup__opened');
}

//close popup
function closePopup() {
    popUp.classList.remove('popup__opened');
}

//set InputValue
function setInputValue(evt) {
    evt.preventDefault();

    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;

    closePopup();
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
popUp.addEventListener('submit', setInputValue);