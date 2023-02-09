import { initialCards } from '../utils/initialData.js';
import { validationParametres, templateSelector, containerSelector, closeButtonSelector,
        profilePopupSelector, placePopupSelector, imagePopupSelector,
        profileEdit, profileForm, inputName, inputJob, buttonAddPlace, newPlaceForm } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import './index.css';

// ------------------------------------------------------------------

// Создаем экземпляр класса UserInfo:
const currentUser = new UserInfo('.profile__name', '.profile__about');

// Функция создания элемента карточки:
const createCard = (cardData, templateSelector, handleCardClick) => {
  const card = new Card(cardData, templateSelector, handleCardClick);
  return card.create();
}

// Объявляем коллбек для открытия попапа с картинкой:
function handleImageClick(name, link) {
  imagePopupElem.open(name, link);
}

// Объявляем коллбек сабмита формы добавления карточки:
function handlePlaceSubmit(data) {
  const placeData = {name: data.placename, link: data.placelink};
  cardsSection.addItem(createCard(placeData, templateSelector, handleImageClick));
  this.close();
}

// Объявляем коллбек сабмита формы редактирования профиля:
function handleProfileSubmit(data) {
  currentUser.setUserInfo(data);
  this.close();
}

// Создаем экземпляры класса PopupWithForm:
const profilePopup = new PopupWithForm(profilePopupSelector, closeButtonSelector, handleProfileSubmit);
const placePopup = new PopupWithForm(placePopupSelector, closeButtonSelector, handlePlaceSubmit);

// Создаем экземпляр класса PopupWithImage:
const imagePopupElem = new PopupWithImage(imagePopupSelector, closeButtonSelector);

// Вещаем на попапы обработчики событий:
profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopupElem.setEventListeners();

// Создаем экземпляры класса FormValidator для каждой валидируемой формы:
const profileFormValidator = new FormValidator(validationParametres, profileForm);
const newPlaceFormValidator = new FormValidator(validationParametres, newPlaceForm);

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

// ------------------------------------------------------------------
// Объявление всех глобальных функций:

function renderer(renderedItem, container) {
  container.prepend(renderedItem);
}

// ------------------------------------------------------------------
// Назначение обработчиков событий:

// Открываем форму редактирования профиля:
profileEdit.addEventListener('click', () => {
  const {user, info } = currentUser.getUserInfo();
  inputName.value = user;
  inputJob.value = info;
  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки.
  // Иначе, при первом запуске кнопка неактивна, при том, что поля заполнены корректно (т.к. они подтягиваются в JS):
  profileFormValidator.resetValidation();
  profilePopup.open();
});

//Открываем попап для добавления нового места:
buttonAddPlace.addEventListener('click', () => {
  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки.
  // Иначе, при повторном открытии формы после успешного добавления места, кнопка активно, при пустых инпутах:
  newPlaceFormValidator.resetValidation();
  placePopup.open();
});

// ------------------------------------------------------------------
// Общий функционал:

// Создаем массив начальных карточек из входного массива данных:
const initialCardElements = initialCards.map(data => {
  return createCard(data, templateSelector, handleImageClick)
});

// Создаем экземпляр класса Section для рендера карточек:
const cardsSection = new Section(renderer, containerSelector);

// Вставляем начальные карточки из массива:
cardsSection.drawInitial(initialCardElements);
