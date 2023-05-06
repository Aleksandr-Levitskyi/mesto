import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards, config } from './constants.js'

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

const createCard = (name, link) => {
  const card = new Card({ name, link }, '#card-template', handleOpenPopup);
  return card.createCard();
}

//присвоение данных в карточку (тайтл + линк)
const setInputPlaceValue = (evt) => {
  evt.preventDefault();
  renderCard(createCard(placeInputName.value, placeInputLink.value));
  formAddCard.reset();

  validators[formAddCard.getAttribute('name')].toggleButton();
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
  renderCard(createCard(item.name, item.link));
});

const validators = {};

formList.forEach((form) => {

  const formValidator = new FormValidator(config, form);
  validators[form.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
});



