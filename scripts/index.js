'use strict';
// ------------------------------------------------------------------
// Объявление всех глобальных переменных:

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

// Получаем попап с изображением:
const imagePopup = document.querySelector('.popup_type_big');
// получаем элемент картинки попапа:
const popupImage = imagePopup.querySelector('.popup__image');
// и описание картинки попапа:
const popupCaption = imagePopup.querySelector('.popup__caption');

// Получаем шаблон карточки:
const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');

// Получаем контейнер для карточек:
const cardsHolder = document.querySelector('.elements__cards');

// Получаем кнопку добавляения нового места:
const buttonAddPlace = document.querySelector('.profile__add-place');

// Получаем попап добавления нового места и его элементы:
const newPlacePopup = document.querySelector('#newPlacePopup');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');
const newPlaceName = newPlacePopup.querySelector('#placeName');
const newPlaceLink = newPlacePopup.querySelector('#placeLink');

// Получаем все кнопки закрытия попапов:
const popupCloseButtons = document.querySelectorAll('.popup__close');

// ------------------------------------------------------------------
// Объявление всех глобальных функций:

// Объявляем функцию открытия попапа (общую для всех 3-х):
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Объявляем функцию закрытия попапа (общую для всех 3-х):
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
function createCard(placeData) {
  const {name, link} = placeData;
  const card = cardTemplate.cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  cardImg.src = link;
  cardImg.setAttribute('alt', ` ${name}.`);
  cardTitle.textContent = name;

  // При добавлении карточки сразу вешаем на ее кнопку удаления событие:
  const cardDeleteBtn = card.querySelector('.card__delete');
  cardDeleteBtn.addEventListener('click', () => deleteCard(card));

  // также добавляем функционал лайков:
  const like = card.querySelector('.card__like');
  like.addEventListener('click', likeCard);

  // и открытие попапа по клику на изображение:
  cardImg.addEventListener('click', () => showImage(name, link));

  // Возвращаем ссылку на карточку:
  return card
}

// Функция удаления карточки:
function deleteCard(card) {
  card.remove();
}

// Функция простановки и снятия лайка:
function likeCard(event) {
  const currentLike = event.target;
  currentLike.classList.toggle('card__like_active');
}

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
  // Создаем карточку и получаем монтируем ее в начало секции с карточками:
  cardsHolder.prepend(createCard(placeData));
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
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

// Сохраняем изменения профиля и закрываем форму:
profileForm.addEventListener('submit', handleProfileSubmit);

// Открываем попап для добавления нового места:
buttonAddPlace.addEventListener('click', () => {
  // очищаем импуты, на случай, если в этой сесиии форма уже заполнялась:
  newPlaceName.value = '';
  newPlaceLink.value = '';

  openPopup(newPlacePopup);
});

// Добавление нового места:
newPlaceForm.addEventListener('submit', handleNewPlaceSubmit);

// Вешаем на все конопки закрытия попапов обработчики:
popupCloseButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Определяем, в каком именно попапе произошло нажатие кнопки закрытия:
    const popup = event.target.closest('.popup');
    // и передаем нужный попап в функцию закрытия попапа:
    closePopup(popup);
  })
})

// ------------------------------------------------------------------
// Общий функционал:

// Вставляем начальные карточки из массива:
initialCards.forEach(card => {
  // addPlace(card.name, card.link);
  addPlace(card);
});
