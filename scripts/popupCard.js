const popupTemplate = document.querySelector('#popUp').content; //получил доступ к шаблону попапа
const footer = document.querySelector('.footer'); //получил доступ к пейдж, чтобы вставить туда popup

const addCardBtn = document.querySelector('.button_type_add'); // кнопка добавить
const closeCardBtn = document.querySelector('.closeCard'); // кнопка закрыть


//клонируем содержимое шаблона popup
const popupCard = popupTemplate.querySelector('.popup').cloneNode(true);

//наполняем шаблон контентом
popupCard.querySelector('#name').placeholder = 'Название';
popupCard.querySelector('#job').placeholder = 'Ссылка на картинку';
popupCard.querySelector('.form__heading').textContent = 'Новое место';


// добавляем popup на страницу
footer.after(popupCard);


//отслеживаем клик по кнопке addBtn
addCardBtn.addEventListener('click', () => {
    popupCard.classList.add('popup_opened');
});

