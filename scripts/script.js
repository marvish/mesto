// Находим кнопки редактирования и закрытия
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
// Находим поля профиля в DOM
let profileName = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
// Находим попап в DOM
let popup = document.querySelector('.popup');
// Находим форму в DOM
let formElement = document.querySelector('.popup__form-container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_el_name');
let jobInput = document.querySelector('.popup__item_el_job');

// Функция открывает попап при нажатии на кнопку редактирования
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
}

// Функция закрывает попап при нажатии на крестик
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставляем новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

// Активирует редактирование/закрытие при нажатии на кнопку
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
