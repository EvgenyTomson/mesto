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
const profileCloseBtn = popupProfile.querySelector('.popup__close');

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

// Закрываем форму редактирования профиля без сохранения:
// стрелочная функция нужна, чтобы передать параметр (конкретный закрываемый попап) в функцию closePopup:
profileCloseBtn.addEventListener('click', () => closePopup(popupProfile));

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

// Получаем попап с изображением и добавляем обработчик на его кнопку закрытия:
const imagePopup = document.querySelector('.popup_type_big');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close');
imagePopupCloseBtn.addEventListener('click', () => closePopup(imagePopup));

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
  // получаем попап для показа картинки:
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

// Функция добавления нового места:
function addPlace(name, link) {
  // создаем DOM-элемент для будущей карточки:
  const cardElem = document.createElement('li');

  // добавляем карточке нужный css-класс:
  cardElem.classList.add('card');

  // добавляем в карточку кнопку удаления. эти статичны и данные не приходят от пользователя:
  cardElem.innerHTML = `
    <button class="card__delete" type="button" aria-label="Удалить карточку"></button>
  `;

  // создаем картинку карточки. данные могут приходить от пользователя:
  const cardImg = document.createElement('img');
  cardImg.src = link;
  cardImg.setAttribute('alt', ` ${name}.`);
  cardImg.classList.add('card__image');
  cardElem.append(cardImg);

  // создаем поле с описанием карточки:
  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card__description');
  // вставляем поле описания карточки в конец карточки:
  cardElem.append(cardDescription);

  // добавляем к описанию карточки кнопку лайка. эти статичны и данные не приходят от пользователя:
  cardDescription.innerHTML = `
    <button class="card__like" type="button" aria-label="Поставить лайк"></button>
  `;

  // создаем название карточки. данные могут приходить от пользователя:
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card__title');
  cardTitle.textContent = name;
  // вставляем название карточки в начало блока описания, перед кнопкой лайка:
  cardDescription.prepend(cardTitle);

  // вставляем нашу новую карточку именно в начало списка карточек:
  cardsHolder.prepend(cardElem);

  // При добавлении карточки сразу вешаем на ее кнопку удаления событие:
  const cardDeleteBtn = cardElem.querySelector('.card__delete');

  cardDeleteBtn.addEventListener('click', () => deleteCard(cardElem));
  // cardDeleteBtn.addEventListener('click', () => {
  //   cardElem.remove();
  // });

  // также добавляем функционал лайков:
  const like = cardElem.querySelector('.card__like');
  like.addEventListener('click', likeCard);
  // like.addEventListener('click', () => {
  //   like.classList.toggle('card__like_active');
  // });

  // и открытие попапа по клику на изображение:
  const cardImage = cardElem.querySelector('.card__image');
  cardImage.addEventListener('click', () => showImage(cardElem));
  // cardImage.addEventListener('click', () => {
  //   const popupImage = imagePopup.querySelector('.popup__image');
  //   popupImage.src = link;
  //   popupImage.setAttribute('alt', name);

  //   const popupCaption = imagePopup.querySelector('.popup__caption');
  //   popupCaption.textContent = name;

  //   openPopup(imagePopup);
  // });
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
const newPlaceCloseBtn = newPlacePopup.querySelector('.popup__close');

// Добавляем слушатель на кнопку закрытия попапа с новым местом:
newPlaceCloseBtn.addEventListener('click', () => closePopup(newPlacePopup));

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
  if (!placeName || !placeLink) {
    console.log('Не указали данные');
    return;
  }

  addPlace(placeName, placeLink);

  closePopup(newPlacePopup);
}

newPlaceForm.addEventListener('submit', submitNewPlace);

