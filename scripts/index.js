import Card from './Card.js'
import FormValidator from './FormValidator.js'
import initialCards from './constants.js'

const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'input_type_error',
  errorClass: 'error_is-active'
}

const templateCard = document.querySelector('#card-template').content; //шаблон карточки

const buttonsCloseArray = document.querySelectorAll('.button_type_close'); // собираем все кнопки с данным классом в массив
const buttonEditProfile = document.querySelector('.button_type_edit'); //кнопка редактировать
const buttonAddCard = document.querySelector('.button_type_add'); //кнопка добавить карточку

const profileInputName = document.querySelector('.input_type_name'); //инпут имя
const profileInputJob = document.querySelector('.input_type_job'); //инпут профессия

const placeInputName = document.querySelector('.input_type_place-name');// инпут для названия
const placeInputLink = document.querySelector('.input_type_place-link');// инпут для ссылки

const profileName = document.querySelector('.profile__name'); //имя
const profileJob = document.querySelector('.profile__job'); //профессия

const popupAddCard = document.querySelector('.popup_type_add'); //попап добавления карточки
const popupEditProfile = document.querySelector('.popup_type_edit'); //попап редактирования профиля

const formAddCard = document.querySelector('.form_add_place'); //форма добавления карточки

const formList = document.querySelectorAll('.form');
const container = document.querySelector('.photo-cards');

const fullScreenImg = document.querySelector('.popup__cover');
const fullScreenImgCaption = document.querySelector('.popup__cover-caption');
const popupFullScreenImg = document.querySelector('.popup_type_image');

const handleOpenPopup = (name, link) => {
  fullScreenImg.src = link;
  fullScreenImg.setAttribute('alt', name);
  fullScreenImgCaption.textContent = name;

  openPopup(popupFullScreenImg);
}

//ф-ция открытия попап (общая)
const openPopup = (popup) => {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('mousedown', closeByOverlayClick);
}
//ф-ция закрытия попап (общая)
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByOverlayClick);
};


//присвоение данных в профиль
function setInputProfileValue(evt) {
  evt.preventDefault();

  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;

  closePopup(popupEditProfile);
}

const renderCard = (card) => {
  container.prepend(card);
}

//присвоение данных в карточку (тайтл + линк)
const setInputPlaceValue = (evt) => {
  evt.preventDefault();

  const card = new Card({ name: placeInputName.value, link: placeInputLink.value }, templateCard, handleOpenPopup);
  renderCard(card.createCard());

  formAddCard.reset();

  const submitButton = formAddCard.querySelector('.form__button');
  submitButton.setAttribute('disabled', 'true');
  submitButton.classList.add('form__button_disabled');

  closePopup(popupAddCard);
}

buttonsCloseArray.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const currentPopup = evt.target.closest('.popup');

    closePopup(currentPopup);
  });
});

const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const closeByOverlayClick = (evt) => {
  const openedPopup = evt.currentTarget;

  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
}

//обработчики кликов по кнопкам
buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard)
});
buttonEditProfile.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;

  openPopup(popupEditProfile);
});
popupEditProfile.addEventListener('submit', setInputProfileValue);
popupAddCard.addEventListener('submit', setInputPlaceValue);

//создание экземплятор карточки из массива
initialCards.forEach((item) => {
  const card = new Card(item, templateCard, handleOpenPopup);
  renderCard(card.createCard());
});

const validators = {};

formList.forEach((form) => {

  const formValidator = new FormValidator(config, form);
  validators[form.getAttribute('name')] = formValidator;
  validators[form.getAttribute('name')].enableValidation();
});


validators[formAddCard.getAttribute('name')].toggleButton();
