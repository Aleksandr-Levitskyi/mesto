const popupTemplate = document.querySelector('#popUp').content; //получил доступ к шаблону попапа
const page = document.querySelector('.page'); //получил доступ к пейдж, чтобы вставить туда popup

const addCardBtn = document.querySelector('.button_type_add'); // кнопка добавить
const closeCardBtn = document.querySelector('.button_type_close'); // кнопка закрыть

//клонируем содержимое шаблона popup
const popupCard = popupTemplate.querySelector('.popup').cloneNode(true);

//отслеживаем клик по кнопке addBtn
addCardBtn.addEventListener('click', () => {
    popupCard.classList.add('popup_opened');
});

//наполняем шаблон контентом
popupCard.querySelector('#name').placeholder = 'Введите название...';


// добавляем popup на страницу
page.append(popupCard);


console.log('Скрипт сработал');