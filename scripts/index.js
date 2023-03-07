const templateCard = document.getElementById('card-template'); //шаблон карточки
const cardWrapper = document.querySelector('.photo-cards'); //место куда нужно вставлять карточку

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
const popupFullScreenImg = document.querySelector('.popup_type_image');

const formAddCard = document.querySelector('.form_add_place'); //форма добавления карточки

const fullScreenImg = document.querySelector('.popup__cover');
const fullScreenImgCaption = document.querySelector('.popup__cover-caption');

/*Модальное окно и карточки*/

//ф-ция открытия попап (общая)
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}
//ф-ция закрытия попап (общая)
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

//ф-ции открытия определенных попапов
const openPopupAddCards = () => {
  openPopup(popupAddCard);
}

const openPopupEditProfile = () => {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;

  openPopup(popupEditProfile);
}

const openPopupFullScreenImg = () => {
  openPopup(popupFullScreenImg);
}

//присвоние введенных имени и профессии
function setInputProfileValue() {
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;

  closePopup(popupEditProfile);
}

//удаление карточки, при клике на корзину
const handleRemoveCard = (evt) => {
  evt.target.closest('.photo').remove();
}

//лайк
const hadleLikeCard = (evt) => {
  evt.target.classList.toggle('button_type_like_is-active');
}

//код для добавления карточки
const createCards = (name, link) => {
  const newCard = templateCard.content.cloneNode(true);

  const buttonLikeCard = newCard.querySelector('.button_type_like');
  const buttonRemoveCard = newCard.querySelector('.button_type_remove');
  const buttonFullScreen = newCard.querySelector('.photo__button');

  const titleCardPlace = newCard.querySelector('.photo__title');
  const linkCardPlace = newCard.querySelector('.photo__cover');

  titleCardPlace.textContent = name;
  linkCardPlace.setAttribute('src', link);

  buttonLikeCard.addEventListener('click', hadleLikeCard);
  buttonRemoveCard.addEventListener('click', handleRemoveCard);
  buttonFullScreen.addEventListener('click', (evt) => {
    fullScreenImg.src = linkCardPlace.src;
    fullScreenImg.setAttribute('alt', titleCardPlace.textContent);
    fullScreenImgCaption.textContent = titleCardPlace.textContent;

    openPopupFullScreenImg();
  });

  return newCard;
}

const renderInitialCard = (wrap, name, link) => {
  wrap.prepend(createCards(name, link));
}

//присвоение данных о карточке (имя + линк)
const setInputPlaceValue = () => {

  const titlePlace = placeInputName.value;
  const linkPlace = placeInputLink.value;

  renderInitialCard(cardWrapper, titlePlace, linkPlace);
  formAddCard.reset();

  closePopup(popupAddCard);
}

buttonsCloseArray.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const currentPopup = evt.target.closest('.popup');

    closePopup(currentPopup);
  });
});

initialCards.forEach((item) => {
  renderInitialCard(cardWrapper, item.name, item.link);
});

function closeHandler() {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((popup) => {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup(popup);
      }
    });
  });
}

function closePopupOnClick() {
  window.addEventListener('click', function (evt) {
    const popupList = Array.from(document.querySelectorAll('.popup'));

    popupList.forEach((popupElement) => {
      if (evt.target === popupElement) {
        closePopup(popupElement);
      }
    });
  })
};

//активация валидации
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(form);
  })
}

//проверка валидации
function checkValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
}

function showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.add('error_is-active');
  errorElement.textContent = errorMessage;
}

function hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.add('error_is-active');
  errorElement.textContent = "";
}

//проверяем валидность каждого инпута в форме,
//если хотя бы один не валидный, то возвращаем false
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

//меняем стиль кнопки в зависимости от валидности инпута в форме
function toggleButton(inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.classList.add('form__button_disabled');
    button.setAttribute('disabled', 'true');
  } else {
    button.classList.remove('form__button_disabled');
    button.removeAttribute('disabled');
  }
}

//находим инпуты внутри формы и вешаем на нее обработчик
//с проверкой валидности ввода
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.input'));
  const button = formElement.querySelector('.form__button');

  toggleButton(inputList, button);

  inputList.forEach((input) => {
    input.addEventListener('input', function () {
      checkValidity(formElement, input);
      toggleButton(inputList, button);
    });
  })
}

enableValidation();

buttonEditProfile.addEventListener('click', openPopupEditProfile);
buttonAddCard.addEventListener('click', openPopupAddCards);
popupEditProfile.addEventListener('submit', setInputProfileValue);
popupAddCard.addEventListener('submit', setInputPlaceValue);

closeHandler();
closePopupOnClick();
