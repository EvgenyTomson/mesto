import { initialCards } from '../utils/initialData.js';
import { validationParametres, templateSelector, foreignTemplateSelector, containerSelector, closeButtonSelector,
        profilePopupSelector, placePopupSelector, imagePopupSelector, avatarPopupSelector, deleteCardPopupSelectoor,
        profileEdit, profileForm, inputName, inputJob, buttonAddPlace, newPlaceForm, avatarForm, apiOptions } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithEmptyForm } from '../components/PopupWithEmptyForm.js';

import './index.css';

// ------------------------------------------------------------------

// Создаем экземпляр класса Api:
const api = new Api(apiOptions);

// Создаем экземпляр класса UserInfo:
const currentUser = new UserInfo('.profile__name', '.profile__about');

// Объявляем функцию сабмита формы подтверждения удаления карточки:
function handleCardDeleteSubmit(cardId) {
  console.log('Card Delete: ', cardId);
  this.close();
}

// Объявляем функцию открытия попапа удаления карточки:
function handleDeletePopupOpen(cardId) {
  console.log('handleDeletePopupOpen: ', cardId);
  cardDeletePopup.open(cardId);
}

// Функция создания элемента карточки:
const createCard = (cardData, templateSelector, handleCardClick, handleCardDeleteConfirm) => {
  const card = new Card(cardData, templateSelector, handleCardClick, handleCardDeleteConfirm);
  return card.create();
}

// Объявляем коллбек для открытия попапа с картинкой:
function handleImageClick(name, link) {
  imagePopupElem.open(name, link);
}

// Объявляем коллбек сабмита формы добавления карточки:
function handlePlaceSubmit(data) {
  const placeData = {name: data.placename, link: data.placelink};
  cardsSection.addItem(createCard(placeData, templateSelector, handleImageClick, handleDeletePopupOpen));
  this.close();
}

// Объявляем коллбек сабмита формы редактирования профиля:
function handleProfileSubmit(data) {
  currentUser.setUserInfo(data);
  this.close();
}

// Объявляем функцию сабмита формы изменения аватара:
function handleAvatarSubmit({avatar}) {
  console.log('Avatar submit', avatar);
  this.close();
}

// Создаем экземпляры класса PopupWithForm:
const profilePopup = new PopupWithForm(profilePopupSelector, closeButtonSelector, handleProfileSubmit);
const placePopup = new PopupWithForm(placePopupSelector, closeButtonSelector, handlePlaceSubmit);
const avatarPopup = new PopupWithForm(avatarPopupSelector, closeButtonSelector, handleAvatarSubmit);

const cardDeletePopup = new PopupWithEmptyForm(deleteCardPopupSelectoor, closeButtonSelector, handleCardDeleteSubmit);

// Создаем экземпляр класса PopupWithImage:
const imagePopupElem = new PopupWithImage(imagePopupSelector, closeButtonSelector);



// Вещаем на попапы обработчики событий:
profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopupElem.setEventListeners();
avatarPopup.setEventListeners();

cardDeletePopup.setEventListeners();

// Создаем экземпляры класса FormValidator для каждой валидируемой формы:
const profileFormValidator = new FormValidator(validationParametres, profileForm);
const newPlaceFormValidator = new FormValidator(validationParametres, newPlaceForm);

const avatarFormValidator = new FormValidator(validationParametres, avatarForm);

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

avatarFormValidator.enableValidation();

// ------------------------------------------------------------------
// Объявление всех глобальных функций:

function renderer(renderedItem, container) {
  container.prepend(renderedItem);
}

// ------------------------------------------------------------------
// Назначение обработчиков событий:

// Открываем форму изменения аватара:
// const avatar = document.querySelector('.profile__avatar-wrapper');
const avatar = document.querySelector('.profile__avatar-button');
avatar.addEventListener('click', () => {
  console.log('click: ', avatar);

  avatarFormValidator.resetValidation();
  avatarPopup.open();
});


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
  return createCard(data, foreignTemplateSelector, handleImageClick, handleDeletePopupOpen)
});

// Создаем экземпляр класса Section для рендера карточек:
const cardsSection = new Section(renderer, containerSelector);

// Вставляем начальные карточки из массива:
cardsSection.drawInitial(initialCardElements);
