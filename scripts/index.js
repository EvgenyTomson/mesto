import { initialCards, validationParametres } from './initialData.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utils.js';

// ------------------------------------------------------------------

// Объявление всех глобальных переменных:

// Селектор для выбора шаблона карточки:
const templateSelector = '#cardTemplate';

// Получаем все попапы:
const popups = document.querySelectorAll('.popup');

// Получаем кнопку редактирования профиля:
const profileEdit = document.querySelector('.profile__edit');
// Получаем данные текущего профиля:
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

// Получаем попап редактирования профиля и его элементы:
const popupProfile = document.querySelector('#profileEditPopup');
const profileForm = popupProfile.querySelector('.popup__form');
const inputName = popupProfile.querySelector('#inputName');
const inputJob = popupProfile.querySelector('#inputJob');

// Получаем контейнер для карточек:
const cardsHolder = document.querySelector('.elements__cards');

// Получаем кнопку добавляения нового места:
const buttonAddPlace = document.querySelector('.profile__add-place');

// Получаем попап добавления нового места и его элементы:
const newPlacePopup = document.querySelector('#newPlacePopup');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');
const newPlaceName = newPlacePopup.querySelector('#placeName');
const newPlaceLink = newPlacePopup.querySelector('#placeLink');

// Создаем экземпляры класса FormValidator для каждой валидируемой формы:
const profileFormValidator = new FormValidator(validationParametres, profileForm);
const newPlaceFormValidator = new FormValidator(validationParametres, newPlaceForm);

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

// ------------------------------------------------------------------
// Объявление всех глобальных функций:

// Функция закрытия попапа по клику мимо формы:
function handleClickPopupClose(event) {
  // закрываем попап, если клик был все формы или на кнопке закрытия:
  if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  }
}

// Объявляем функцию "отправки" формы редактирования профиля с сохранением введенных значений:
function handleProfileSubmit(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(popupProfile);
}

// Функция добавления нового места:
function addPlace(placeData) {
  // Создаем карточку и монтируем ее в начало секции с карточками:
  //cardsHolder.prepend(createCard(placeData));
  const card = new Card(placeData, templateSelector);
  cardsHolder.prepend(card.creator());
}

// Добавляем новое место:
function handleNewPlaceSubmit(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  const placeName = newPlaceName.value;
  const placeLink = newPlaceLink.value;
  const placeData = {name: placeName, link: placeLink};

  addPlace(placeData);

  closePopup(newPlacePopup);
}

// ------------------------------------------------------------------
// Назначение обработчиков событий:

// Открываем форму редактирования профиля:
profileEdit.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки.
  // Иначе, при первом запуске кнопка неактивна, при том, что поля заполнены корректно (т.к. они подтягиваются в JS):
  profileFormValidator.hideErrorOnOpen();

  openPopup(popupProfile);
});

// Сохраняем изменения профиля и закрываем форму:
profileForm.addEventListener('submit', handleProfileSubmit);

// Открываем попап для добавления нового места:
buttonAddPlace.addEventListener('click', () => {
  // очищаем импуты, на случай, если в этой сесиии форма уже заполнялась:
  newPlaceForm.reset();

  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки.
  // Иначе, при повторном открытии формы после успешного добавления места, кнопка активно, при пустых инпутах:
  newPlaceFormValidator.hideErrorOnOpen();

  openPopup(newPlacePopup);
});

// Добавление нового места:
newPlaceForm.addEventListener('submit', handleNewPlaceSubmit);

// Вещаем на все попапы обработчик 'click', который закроет попап при клине ВНЕ формы:
popups.forEach(popup => {
  popup.addEventListener('click', handleClickPopupClose);
});

// ------------------------------------------------------------------
// Общий функционал:

// Вставляем начальные карточки из массива:
initialCards.forEach(cardData => {
  addPlace(cardData);
});
