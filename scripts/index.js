import { initialCards, validationParametres } from './initialData.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

// ------------------------------------------------------------------

// Объявление всех глобальных переменных:

// Селектор для выбора шаблона карточки:
const templateSelector = '#cardTemplate';

// Селектор для выбора контейнера карточек:
const containerSelector = '.elements__cards';

// Селектор кнопки закрытия попапа:
const closeButtonSelector = '.popup__close';

// Селекторы попапов:
const profilePopupSelector = '#profileEditPopup';
const addPlacePopupSelector = '#newPlacePopup';
const imagePopupSelector = '#viewImagePopup';

// Создаем экземпляр класса UserInfo:
const currentUser = new UserInfo('.profile__name', '.profile__about');
currentUser.getUserInfo();


function handleImageClick(name, link) {
  imagePopupElem.open(name, link);
}

function placeSubmitHandler(data) {
  const placeData = {name: data[0], link: data[1]};
  const card = new Card(placeData, templateSelector, handleImageClick);
  cardsSection.addItem(card.creator());
}

function profileSubmitHandler(data) {
  currentUser.setUserInfo({user: data[0], info: data[1]});
}

// Создаем экземпляры класса PopupWithForm:
const profilePopup = new PopupWithForm(profilePopupSelector, closeButtonSelector, profileSubmitHandler);
const addPlacePopup = new PopupWithForm(addPlacePopupSelector, closeButtonSelector, placeSubmitHandler);

// Создаем экземпляр класса PopupWithImage:
const imagePopupElem = new PopupWithImage(imagePopupSelector, closeButtonSelector);

// Вещаем на попапы обработчики событий:
profilePopup.setEventListeners();
addPlacePopup.setEventListeners();
imagePopupElem.setEventListeners();

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

function renderer(renderedItem, container) {
  container.prepend(renderedItem);
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

  profilePopup.open();
});

//Открываем попап для добавления нового места:
buttonAddPlace.addEventListener('click', () => {
  // очищаем импуты, на случай, если в этой сесиии форма уже заполнялась:
  newPlaceForm.reset();
  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки.
  // Иначе, при повторном открытии формы после успешного добавления места, кнопка активно, при пустых инпутах:
  newPlaceFormValidator.hideErrorOnOpen();

  addPlacePopup.open();
});

// ------------------------------------------------------------------
// Общий функционал:

// Создаем массив начальных карточек из входного массива данных:
const initialCardElements = initialCards.map(data => {
  const card = new Card(data, templateSelector, handleImageClick);
  return card.creator();
});

// Создаем экземпляр класса Section для рендера карточек:
const cardsSection = new Section({items: initialCardElements, renderer}, containerSelector);

// Вставляем начальные карточки из массива:
cardsSection.drawInitial();
