const initialCards = [
    {
        name: 'Тюмень',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Москва',
        link: 'https://plus.unsplash.com/premium_photo-1663040037208-22bcd243c685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Нижний-Новгород',
        link: 'https://images.unsplash.com/photo-1589213292055-4cd2e6af6d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
    }
]

const cardWrapper = document.querySelector('.photo-cards'); //куда вставлять элемент
const addForm = document.querySelector('.popup__form_type_add'); // форма для листнера

const inputPlaceName = document.querySelector('.input_type_placeName'); //инпут в который
const inputPlaceLink = document.querySelector('.input_type_placeLink');

const cardTemplate = document.getElementById('card-template');

const getCardInfo = (name, link) => {
    const newCardInfo = cardTemplate.content.cloneNode(true); //Получили клон шаблона

    const newCardName = newCardInfo.querySelector('.photo__title'); // нашли элемент имя
    const newCardLink = newCardInfo.querySelector('.photo__cover').scr; // нашли элемент ссылку на обложку

    newCardName.textContent = name; // Присвоили данные имени
    newCardLink = link; // присвоили данные ссылки

    return newCardInfo;
};

const renderCard = (wrap, name, link) => {
    wrap.append(getCardInfo(name, link));
};

initialCards.forEach((item) => {
    renderCard(cardWrapper, item.name, item.link);
});

addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const name = inputPlaceName.value;
    const link = inputPlaceLink.value;

    console.log(name);
    console.log(link);

    renderCard(cardWrapper, name, link);
    inputPlaceName.value = '';
    inputPlaceLink.value = '';
});
