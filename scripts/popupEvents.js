const btnCloseArr = document.querySelectorAll('.button_type_close'); // собираем все кнопки с данным классом в массив
const editBtn = document.querySelector('.button_type_edit'); //кнопка редактировать
const addBtn = document.querySelector('.button_type_add'); //кнопка добавить карточку

//функции которые открывают и закрывают попап,
//принимают в качестве аргумента определенный попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

//перебор массива и присваивание каждой кнопке обрботчик событий
//для удаления класса popup_opened
btnCloseArr.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const target = evt.target;
    const currentPopup = target.closest('.popup');

    closePopup(currentPopup);
  });
})

//функции для того отдельных кнопок и попапов
const openPopupAdd = () => {
  const popupAdd = document.querySelector('.popup_type_add');

  openPopup(popupAdd);
}

const openPopupEdit = () => {
  const popupEdit = document.querySelector('.popup_type_edit');

  openPopup(popupEdit);
}

editBtn.addEventListener('click', openPopupEdit);
addBtn.addEventListener('click', openPopupAdd);


