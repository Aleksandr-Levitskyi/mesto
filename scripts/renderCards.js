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

const getCardInfo = (name, link) => {
    const newCard = templateCards.content.cloneNode(true);

    let namePlace = newCard.querySelector('.photo__title');
    let linkPlace = newCard.querySelector('.photo__cover');

    namePlace.textContent = name;
    linkPlace.setAttribute('src', link);

    return newCard;
};

const createCard = (wrap, name, link) => {
    wrap.append(getCardInfo(name, link));
};

initialCards.forEach((item) => {
    createCard(cardArea, item.name, item.link);
    console.log(item);
});


