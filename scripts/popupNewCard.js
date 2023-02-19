const popupTemplate = document.querySelector('#popUp').content; //получил доступ к шаблону попапа
const page = document.querySelector('.page'); //получил доступ к пейдж, чтобы вставить туда popup

//клонируем содержимое шаблона popup
const popupCard = popupTemplate.querySelector('.popup').cloneNode(true);

//наполняем шаблон контентом
popupCard.querySelector('#name').placeholder = 'Введите название...';


// добавляем popup на страницу
page.append(popupCard);
