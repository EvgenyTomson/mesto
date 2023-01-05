import { initialCards, validationParametres } from './initialData.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
//import {enableValidation, setEventListeners, hideErrorOnOpen, toggleButtonState, checkInputValidity, hideInputError, showInputError, validationParametres} from './validate.js';
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
//const inputsListEditProfileForm = Array.from(profileForm.querySelectorAll(validationParametres.inputSelector));
//const buttonSubmitEditProfileForm = profileForm.querySelector(validationParametres.submitButtonSelector);

// Получаем попап с изображением:
const imagePopup = document.querySelector('.popup_type_big');
// // получаем элемент картинки попапа:
const popupImage = imagePopup.querySelector('.popup__image');
// и описание картинки попапа:
const popupCaption = imagePopup.querySelector('.popup__caption');

// Получаем шаблон карточки:
//const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');

// Получаем контейнер для карточек:
const cardsHolder = document.querySelector('.elements__cards');

// Получаем кнопку добавляения нового места:
const buttonAddPlace = document.querySelector('.profile__add-place');

// Получаем попап добавления нового места и его элементы:
const newPlacePopup = document.querySelector('#newPlacePopup');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');
const newPlaceName = newPlacePopup.querySelector('#placeName');
const newPlaceLink = newPlacePopup.querySelector('#placeLink');
//const inputsListNewPlaceForm = Array.from(newPlaceForm.querySelectorAll(validationParametres.inputSelector));
//const buttonSubmitNewPlaceForm = newPlaceForm.querySelector(validationParametres.submitButtonSelector);



// Создаем экземпляры класса FormValidator для каждой валидируемой формы:
const profileFormValidator = new FormValidator(validationParametres, profileForm);
const newPlaceFormValidator = new FormValidator(validationParametres, newPlaceForm);

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();


// function hideErrorOnOpen(formVilidatorObject) {
//   const formElement = popup.querySelector(validationParametres.formSelector);
//   const inputElements = formElement.querySelectorAll(validationParametres.inputSelector);
//   inputElements.forEach(inputElement => {
//     hideInputError(formElement, inputElement, validationParametres.inputErrorClass, validationParametres.errorClass);
//   });
// }

// function hideErrorOnOpen(popup) {
//   const formElement = popup.querySelector(validationParametres.formSelector);
//   const inputElements = formElement.querySelectorAll(validationParametres.inputSelector);
//   inputElements.forEach(inputElement => {
//     hideInputError(formElement, inputElement, validationParametres.inputErrorClass, validationParametres.errorClass);
//   });
// }


// Получаем все кнопки закрытия попапов (уже не нужно)):
//const popupCloseButtons = document.querySelectorAll('.popup__close');

// ------------------------------------------------------------------
// Объявление всех глобальных функций:

// Функция закрытия попапа по клику мимо формы:
function handleClickPopupClose(event) {
  // закрываем попап, если клик был все формы или на кнопке закрытия:
  if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  }
}

// Функция закрытия попапа по Esc:
function handlerEscPopupClose(event) {
  if(event.key === 'Escape') {
    // находим открытый попап и закрываем его:
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Объявляем функцию открытия попапа (общую для всех 3-х):
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // устанавливаем обработчик закрытия попапа по Ecs в момент открытия попапа:
  document.addEventListener('keydown', handlerEscPopupClose);
}

// Объявляем функцию закрытия попапа (общую для всех 3-х):
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
  document.removeEventListener('keydown', handlerEscPopupClose);
}

// Объявляем функцию "отправки" формы редактирования профиля с сохранением введенных значений:
function handleProfileSubmit(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(popupProfile);
}

// Функция создания элемента карточки (со всем её функционалом):
// function createCard(placeData) {
//   const {name, link} = placeData;
//   const card = cardTemplate.cloneNode(true);
//   const cardImg = card.querySelector('.card__image');
//   const cardTitle = card.querySelector('.card__title');
//   cardImg.src = link;
//   cardImg.setAttribute('alt', ` ${name}.`);
//   cardTitle.textContent = name;

//   // При добавлении карточки сразу вешаем на ее кнопку удаления событие:
//   const cardDeleteBtn = card.querySelector('.card__delete');
//   cardDeleteBtn.addEventListener('click', () => deleteCard(card));
//   // также добавляем функционал лайков:
//   const like = card.querySelector('.card__like');
//   like.addEventListener('click', likeCard);
//   // и открытие попапа по клику на изображение:
//   cardImg.addEventListener('click', () => showImage(name, link));

//   // Возвращаем ссылку на карточку:
//   return card
// }

// Функция удаления карточки:
// function deleteCard(card) {
//   card.remove();
// }

// Функция простановки и снятия лайка:
// function likeCard(event) {
//   const currentLike = event.target;
//   currentLike.classList.toggle('card__like_active');
// }

// Функция открытия попапа с картинкой по клику на картинке в карточке:
function showImage(name, link) {
  // устаналиваем ссылку на нужную картинку:
  popupImage.src = link;
  // записываем название нужной карточки в alt и figcaption:
  popupImage.setAttribute('alt', ` ${name}.`);
  popupCaption.textContent = name;

  openPopup(imagePopup);
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
  // Если при закрытии попапа в форме висела ошибка валидации, то очищаем текст ошибки и скрываем ее:
  //hideErrorOnOpen(popupProfile);

  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки:
  profileFormValidator.hideErrorOnOpen();

  // Нужно проверить валидность полей при открытии.
  // Иначе, при первом запуске кнопка неактивна, при том, что поля заполнены корректно (т.к. они подтягиваются в JS):
  //toggleButtonState(inputsListEditProfileForm, buttonSubmitEditProfileForm, validationParametres.inactiveButtonClass);
});

// Сохраняем изменения профиля и закрываем форму:
profileForm.addEventListener('submit', handleProfileSubmit);

// Открываем попап для добавления нового места:
buttonAddPlace.addEventListener('click', () => {
  // очищаем импуты, на случай, если в этой сесиии форма уже заполнялась:
  newPlaceForm.reset();

  // Если при закрытии попапа в форме висела ошибка валидации, то очищаем текст ошибки и скрываем ее:
  //hideErrorOnOpen(newPlacePopup);

  // Используем публичный метод объекта валидации для очистки ошибок и переключения состояния кнопки:
  newPlaceFormValidator.hideErrorOnOpen();

  // Нужно проверить валидность полей при открытии.
  // Иначе, при повторном открытии формы после успешного добавления места, кнопка активно, при пустых инпутах:
  //toggleButtonState(inputsListNewPlaceForm, buttonSubmitNewPlaceForm, validationParametres.inactiveButtonClass);

  openPopup(newPlacePopup);
});

// Добавление нового места:
newPlaceForm.addEventListener('submit', handleNewPlaceSubmit);

// Вешаем на все конопки закрытия попапов обработчики:
// (закомментировал, т.к. функционал можно реализовать в обработчике клика мимо формы)
// popupCloseButtons.forEach(button => {
//   button.addEventListener('click', event => {
//     // Определяем, в каком именно попапе произошло нажатие кнопки закрытия:
//     const popup = event.target.closest('.popup');
//     // и передаем нужный попап в функцию закрытия попапа:
//     closePopup(popup);
//   })
// })

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

//export {imagePopup, popupImage, popupCaption, openPopup};
export { showImage }
