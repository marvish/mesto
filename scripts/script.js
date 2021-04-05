// Находим кнопки редактирования, добавления места и закрытия
const editProfileButton = document.querySelector('.profile__edit-button');
const addNewPlaceButton = document.querySelector('.profile__add-button');
const closeEditProfilePopupButton = document.querySelector('#close-edit-profile-popup');
const closeAddPlacePopupButton = document.querySelector('#close-add-place-popup');
const closeImagePopupButton = document.querySelector('#close-image-popup');
// Находим поля профиля в DOM
const profileName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
// Находим попап в DOM
const editProfilePopup = document.querySelector('#edit-profile-popup');
const addNewPlacePopup = document.querySelector('#add-place-popup');
const imagePopup = document.querySelector('#image-popup');
// Находим форму в DOM
const editFormElement = document.querySelector('#edit-profile-form');
const addFormElement = document.querySelector('#add-place-form');
// Находим поля формы в DOM
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-job');
const placeInput = document.querySelector('#name-of-place');
const imgInput = document.querySelector('#img-src');


const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;


// Функция открывает попап при нажатии на кнопку редактирования
function openPopup(popupType) {
  popupType.classList.add('popup_opened');
}

// Функция закрывает попап при нажатии на крестик
function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
}

// Функция добавляет новую карточку
function addNewPlace(name, link) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  // Поставить лайк
  const likeButton = cardItem.querySelector('.card__icon-like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__icon-like_active');
  });

  // Удалить карточку
  const deleteButton = cardItem.querySelector('.card__icon-trash');
  deleteButton.addEventListener('click', function (evt) {
    card = evt.target.closest('.card');
    card.remove();
  });

  // Открыть картинку
  cardImage.addEventListener('click', function (evt) {
    openPopup(imagePopup);
    card = evt.target.closest('.card');
    image = card.querySelector('.card__image');
    caption = card.querySelector('.card__title');
    popupImage = imagePopup.querySelector('.popup__image');
    popupImage.src = image.src;
    popupImageCaption = imagePopup.querySelector('.popup__caption');
    popupImageCaption.textContent = caption.textContent;
    popupImage.alt = caption.textContent;
  });

  cards.prepend(cardItem);
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Вставляем новые значения с помощью textContent
  console.log(nameInput);
  console.log(jobInput);
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function addFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  addNewPlace(placeInput.value, imgInput.value);
  closePopup(addNewPlacePopup);
}

// Активирует редактирование/добавление/закрытие при нажатии на кнопку
editProfileButton.addEventListener('click', function(){
  openPopup(editProfilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
});

addNewPlaceButton.addEventListener('click', function(){
  openPopup(addNewPlacePopup);
  placeInput.value = '';
  imgInput.value = '';
});

closeEditProfilePopupButton.addEventListener('click', function(){
  closePopup(editProfilePopup);
});

closeAddPlacePopupButton.addEventListener('click', function(){
  closePopup(addNewPlacePopup);
});

closeImagePopupButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);

const initialCards = [
  {
    name: 'Карачаево-Черкессия',
    link: './images/element__karachaevsk.jpg'
  },
  {
    name: 'Крым',
    link: './images/element__crimea.jpg'
  },
  {
    name: 'Урал',
    link: './images/element__ural.jpg'
  },
  {
    name: 'Байкал',
    link: './images/element__baikal.jpg'
  },
  {
    name: 'Гора Фишт',
    link: './images/element__mountain-fisht.jpg'
  },
  {
    name: 'Карелия',
    link: './images/element__carelia.jpg'
  }
];


function showDefaultPlaces() {
  initialCards.forEach(function (item) {
    addNewPlace(item.name, item.link);
  });
}

showDefaultPlaces();
