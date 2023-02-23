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


//ф-ция открытия попап (общая)
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}
//ф-ция закрытия попап (общая)
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

//ф-ции открытия определенных попапов
const openPopupAdd = () => {
    openPopup(popupAddCard);
}

const openPopupEdit = () => {
    profileInputName.value = profileName.textContent;
    profileInputJob.value = profileJob.textContent;

    openPopup(popupEditProfile);
}

const openPopupImage = () => {
    openPopup(popupFullScreenImg);
}

//присвоние введенных имени и профессии
function setInputValue(evt) {
    evt.preventDefault();

    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputJob.value;

    closePopup(popupEditProfile);
}

//удаление карточки, при клике на корзину
const handleRemove = (evt) => {
    evt.target.closest('.photo').remove();
}

//лайк
const hadleLike = (evt) => {
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

    buttonLikeCard.addEventListener('click', hadleLike);
    buttonRemoveCard.addEventListener('click', handleRemove);
    buttonFullScreen.addEventListener('click', (evt) => {
        fullScreenImg.src = linkCardPlace.src;
        fullScreenImg.setAttribute('alt', titleCardPlace.textContent);
        fullScreenImgCaption.textContent = titleCardPlace.textContent;

        openPopupImage();
    });

    return newCard;
}

const renderCard = (wrap, name, link) => {
    wrap.prepend(createCards(name, link));
}

//присвоение данных о карточке (имя + линк)
const setInputPlace = (evt) => {
    evt.preventDefault();

    const titlePlace = placeInputName.value;
    const linkPlace = placeInputLink.value;

    renderCard(cardWrapper, titlePlace, linkPlace);
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
    renderCard(cardWrapper, item.name, item.link);
});

buttonEditProfile.addEventListener('click', openPopupEdit);
buttonAddCard.addEventListener('click', openPopupAdd);
popupEditProfile.addEventListener('submit', setInputValue);
popupAddCard.addEventListener('submit', setInputPlace);

