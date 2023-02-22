const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const templateCards = document.getElementById('card-template'); //шаблон карточки
const cardArea = document.querySelector('.photo-cards'); //место куда нужно вставлять карточку

const btnCloseArr = document.querySelectorAll('.button_type_close'); // собираем все кнопки с данным классом в массив
const editBtn = document.querySelector('.button_type_edit'); //кнопка редактировать
const addBtn = document.querySelector('.button_type_add'); //кнопка добавить карточку

const nameInput = document.querySelector('.input_type_name'); //инпут имя
const jobInput = document.querySelector('.input_type_job'); //инпут профессия

const namePlace = document.querySelector('.input_type_place-name');// инпут для названия 
const linkPlace = document.querySelector('.input_type_place-link');// инпут для ссылки

const nameInfo = document.querySelector('.profile__name'); //имя
const jobInfo = document.querySelector('.profile__job'); //профессия

const popupAddForm = document.querySelector('.popup_type_add'); //форма добавления карточки
const popupEditForm = document.querySelector('.popup_type_edit'); //форма редактирования профиля

//функции которые открывают и закрывают попап,
//принимают в качестве аргумента определенный попап
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

//функции для того отдельных кнопок и попапов
const openPopupAdd = () => {
    const popupAdd = document.querySelector('.popup_type_add');

    openPopup(popupAdd);
}

const openPopupImage = () => {
    const popupImg = document.querySelector('.popup_type_image');

    openPopup(popupImg);
}

const openPopupEdit = () => {
    const popupEdit = document.querySelector('.popup_type_edit');

    nameInput.value = nameInfo.textContent;
    jobInput.value = jobInfo.textContent;

    openPopup(popupEdit);
}

const setImgInfo = () => {
    const cardImg = document.querySelector('.photo__cover');
    const nameCard = document.querySelector('.photo__title');

    const coverImg = document.querySelector('.popup__cover');
    const captureImg = document.querySelector('.popup__cover-caption');

    coverImg.setAttribute('src', cardImg.src);
    captureImg.textContent = nameCard.textContent;
}

document.querySelector('.test_button').addEventListener('click', (evt) => {
    evt.target;
    setImgInfo();
})

function setInputValue(evt) {
    evt.preventDefault();

    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;

    closePopup(popupEditForm);
}

const handleRemove = (evt) => {
    evt.target.closest('.photo').remove();
}

const hadleLike = (evt) => {
    evt.target.classList.toggle('button_type_like_is-active');
}

//код для добавления карточки
const getCardInfo = (name, link) => {
    const newCard = templateCards.content.cloneNode(true);

    const likeBtn = newCard.querySelector('.button_type_like');
    const removeBtn = newCard.querySelector('.button_type_remove');
    let namePlace = newCard.querySelector('.photo__title');
    let linkPlace = newCard.querySelector('.photo__cover');

    namePlace.textContent = name;
    linkPlace.setAttribute('src', link);

    likeBtn.addEventListener('click', hadleLike);
    removeBtn.addEventListener('click', handleRemove);

    return newCard;
}

const createCard = (wrap, name, link) => {
    wrap.prepend(getCardInfo(name, link));
}

const setInputPlace = (evt) => {
    evt.preventDefault();

    const title = namePlace.value;
    const link = linkPlace.value;

    createCard(cardArea, title, link);

    namePlace.value = '';
    linkPlace.value = '';

    closePopup(popupAddForm);
}

//перебор массива и присваивание каждой кнопке обрботчик событий
//для удаления класса popup_opened
btnCloseArr.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        const target = evt.target;
        const currentPopup = target.closest('.popup');

        closePopup(currentPopup);
    });
});


initialCards.forEach((item) => {
    createCard(cardArea, item.name, item.link);
});

editBtn.addEventListener('click', openPopupEdit);
addBtn.addEventListener('click', openPopupAdd);
popupEditForm.addEventListener('submit', setInputValue);
popupAddForm.addEventListener('submit', setInputPlace);

