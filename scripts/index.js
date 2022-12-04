'use strict';

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

// Объявляем функцию открытия попапа (общую для всех 3-х):
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Объявляем функцию закрытия попапа (общую для всех 3-х):
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Объявляем функцию "отправки" формы редактирования профиля с сохранением введенных значений:
function submitProfile(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(popupProfile);
}

// Открываем форму редактирования профиля:
profileEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

// Сохраняем изменения профиля и закрываем форму:
profileForm.addEventListener('submit', submitProfile);

//--------------------------------------------------------------------------
// Часть 2
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Получаем шаблон карточки:
const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');

// Функция создания элемента карточки:
function createCard(name, link) {
  const card = cardTemplate.cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  cardImg.src = link;
  cardImg.setAttribute('alt', ` ${name}.`);
  cardTitle.textContent = name;

  cardsHolder.prepend(card);

  // Возвращаем ссылку на карточку и ее изображение, чтобы не получать эти элементы в других функциях:
  return [card, cardImg]
}

// Получаем попап с изображением:
const imagePopup = document.querySelector('.popup_type_big');

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
function showImage(card) {
  // получаем элемент картинки попапа:
  const popupImage = imagePopup.querySelector('.popup__image');
  // достаем ссылку на картинку для нужной карточки:
  const link = card.querySelector('.card__image').src;
  popupImage.src = link;
  // достаем название нужной карточки и записываем его в alt и figcaption:
  const name = card.querySelector('.card__title').textContent;
  popupImage.setAttribute('alt', ` ${name}.`);
  const popupCaption = imagePopup.querySelector('.popup__caption');
  popupCaption.textContent = name;

  openPopup(imagePopup);
}

// Получаем контейнер для карточек:
const cardsHolder = document.querySelector('.elements__cards');

// Функция добавления нового места (карточки со всем её функционалом):
function addPlace(name, link) {

  // Создаем карточку и получаем в переменные cardElem и cardImage ссылки на созданную карточку и ее картинку:
  const [cardElem, cardImage] = [...createCard(name, link)];

  // При добавлении карточки сразу вешаем на ее кнопку удаления событие:
  const cardDeleteBtn = cardElem.querySelector('.card__delete');

  cardDeleteBtn.addEventListener('click', () => deleteCard(cardElem));

  // также добавляем функционал лайков:
  const like = cardElem.querySelector('.card__like');
  like.addEventListener('click', likeCard);

  // и открытие попапа по клику на изображение:
  cardImage.addEventListener('click', () => showImage(cardElem));
}

// Вставляем начальные карточки из массива:
initialCards.forEach(card => {
  addPlace(card.name, card.link);
});

// Получаем кнопку добавляения нового места:
const addPlaceBtn = document.querySelector('.profile__add-place');

// Получаем попап добавления нового места и его элементы:
const newPlacePopup = document.querySelector('#newPlacePopup');
const newPlaceForm = newPlacePopup.querySelector('.popup__form');
const newPlaceName = newPlacePopup.querySelector('#placeName');
const newPlaceLink = newPlacePopup.querySelector('#placeLink');

// Открываем попап для добавления нового места:
addPlaceBtn.addEventListener('click', () => {
  openPopup(newPlacePopup);
  // очищаем импуты, на случай, если в этой сесиии форма уже заполнялась:
  newPlaceName.value = '';
  newPlaceLink.value = '';
});

// Добавляем новое место:
function submitNewPlace(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  const placeName = newPlaceName.value;
  const placeLink = newPlaceLink.value;

  //защита от пустой строки:
  // if (!placeName || !placeLink) {
  //   console.log('Не указали данные');
  //   return;
  // }

  addPlace(placeName, placeLink);

  closePopup(newPlacePopup);
}

newPlaceForm.addEventListener('submit', submitNewPlace);

// Получаем все кнопки закрытия попапов:
const popupCloseButtons = document.querySelectorAll('.popup__close');

// и вешаем на все конпки закрытия попапов обработчики:
popupCloseButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Определяем, в каком именно попапе произошло нажатие кнопки закрытия:
    const popup = event.target.closest('.popup');
    // и передаем нужный попап в функцию закрытия попапа:
    closePopup(popup);
  })
})

