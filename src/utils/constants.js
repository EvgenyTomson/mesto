export const validationParametres = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Селектор для выбора шаблона карточки:
export const templateSelector = '#cardTemplate';

// Селектор для выбора контейнера карточек:
export const containerSelector = '.elements__cards';

// Селектор кнопки закрытия попапа:
export const closeButtonSelector = '.popup__close';

// Селекторы попапов:
export const profilePopupSelector = '#profileEditPopup';
export const placePopupSelector = '#newPlacePopup';
export const imagePopupSelector = '#viewImagePopup';


// Получаем кнопку редактирования профиля:
export const profileEdit = document.querySelector('.profile__edit');
// Получаем данные текущего профиля:
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__about');

// Получаем попап редактирования профиля и его элементы:
export const popupProfile = document.querySelector('#profileEditPopup');
export const profileForm = popupProfile.querySelector('.popup__form');
export const inputName = popupProfile.querySelector('#inputName');
export const inputJob = popupProfile.querySelector('#inputJob');

// Получаем кнопку добавляения нового места:
export const buttonAddPlace = document.querySelector('.profile__add-place');

// Получаем попап добавления нового места и его элементы:
export const newPlacePopup = document.querySelector('#newPlacePopup');
export const newPlaceForm = newPlacePopup.querySelector('.popup__form');
