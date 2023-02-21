const btnCloseArr = document.querySelectorAll('.button_type_close'); // собираем все кнопки с данным классом в массив
const editBtn = document.querySelector('.button_type_edit'); //кнопка редактировать
const addBtn = document.querySelector('.button_type_add'); //кнопка добавить карточку

const nameInput = document.querySelector('.input_type_name'); //инпут имя
const jobInput = document.querySelector('.input_type_job'); //инпут профессия
const nameInfo = document.querySelector('.profile__name'); //имя
const jobInfo = document.querySelector('.profile__job'); //профессия

const popupAddForm = document.querySelector('.popup__form_type_add'); //форма добавления карточки
const popupEditForm = document.querySelector('.popup_type_edit'); //форма редактирования профиля

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

  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;

  openPopup(popupEdit);
}

function setInputValue(evt) {
  evt.preventDefault();

  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;

  closePopup(popupEditForm);
}


editBtn.addEventListener('click', openPopupEdit);
addBtn.addEventListener('click', openPopupAdd);
popupEditForm.addEventListener('submit', setInputValue);


