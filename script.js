let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
// Находим форму в DOM
let formElement = document.querySelector('.popup__form-container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close-button');

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);