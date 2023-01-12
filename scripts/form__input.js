let editForm = document.querySelector('.form--profile-edit');

let nameInput = document.querySelector('.input--name')
let jobInput = document.querySelector('.input--job')

//nameInput.setAttribute('value', nameInfo.textContent);
//jobInput.setAttribute('value', jobInfo.textContent);
nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;

function setInput(evt) {
    evt.preventDefault();

    //nameInput.getAttribute('value')
    nameInput.value;
    jobInput.value;

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__job').textContent = jobInput.value;

    document.querySelector('.popup').classList.add('popup--hidden');
}

function closeForm() {
    nameInput.value = document.querySelector('.profile__name').textContent;
}

editForm.addEventListener('submit', setInput);
document.querySelector('.button__icon--close').addEventListener('click', closeForm);


