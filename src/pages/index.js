import { validationParametres, templateSelectors, containerSelector, closeButtonSelector,
        profilePopupSelector, placePopupSelector, imagePopupSelector, avatarPopupSelector, deleteCardPopupSelectoor,
        profileEdit, profileForm, inputName, inputJob, buttonAddPlace, newPlaceForm, avatarForm, apiOptions,
        profileAvatar } from '../utils/constants.js';
import { renderLoading } from '../utils/utils.js';
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
function handleCardDeleteSubmit(cardId, cardToDelete, submitButton) {
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.deleteCard(cardId)
    .then(() => {
        cardToDelete.remove()
        this.close();
    })
    .catch(err => console.log('Card Delete Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));
}

// Объявляем функцию открытия попапа удаления карточки:
function handleDeletePopupOpen(cardId, cardToDelete) {
  cardDeletePopup.open(cardId, cardToDelete);
}

// Коллбек постаковки/снятия лайка:
function handleLikeClick(cardId, isLiked, cardObject) {
  if(isLiked) {
    api.removeLike(cardId)
      .then(updatedCardData => {
        cardObject.updateLikesCount(updatedCardData.likes.length);
      })
      .catch(err => console.log('Remove Card Like Error: ', err))
  }else {
    api.addLike(cardId)
    .then(updatedCardData => {
      cardObject.updateLikesCount(updatedCardData.likes.length);
    })
    .catch(err => console.log('Add Card Like Error: ', err))
  }
}

// Функция создания элемента карточки:
const createCard = (cardData, handleCardClick, handleCardDeleteConfirm, currentUser) => {
  const card = new Card(cardData, templateSelectors, handleCardClick, handleCardDeleteConfirm, currentUser, handleLikeClick)
  return card.create();
}

// Объявляем коллбек для открытия попапа с картинкой:
function handleImageClick(name, link) {
  imagePopupElem.open(name, link);
}

// Объявляем коллбек сабмита формы добавления карточки:
function handlePlaceSubmit(data, submitButton) {
  const placeData = {name: data.placename, link: data.placelink};
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.addNewCard(placeData)
    .then(newCardData => {
      cardsSection.addItem(createCard(newCardData, handleImageClick, handleDeletePopupOpen, currentUser.id));
      this.close();
    })
    .catch(err => console.log('Add New Card Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));
}

// Объявляем коллбек сабмита формы редактирования профиля:
function handleProfileSubmit(data, submitButton) {
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.editUserData(data)
    .then(userData => {
      currentUser.setUserInfo({username: userData.name, userjob: userData.about});
      this.close();
    })
    .catch(err => console.log('Change User Data Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));
}

// Объявляем функцию сабмита формы изменения аватара:
function handleAvatarSubmit({avatar}, submitButton) {
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.editUserAvatar(avatar)
    .then(res => {
        profileAvatar.src = res.avatar;
        this.close();
      })
    .catch(err => console.log('Edit User Avatar Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));
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

function renderer(renderedItem, container) {
  container.prepend(renderedItem);
}

// ------------------------------------------------------------------
// Назначение обработчиков событий:

// Открываем форму изменения аватара:
const avatar = document.querySelector('.profile__avatar-button');
avatar.addEventListener('click', () => {
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

// Создаем экземпляр класса Section для рендера карточек:
const cardsSection = new Section(renderer, containerSelector);

// Получаем начальные карточки с сервера только после того, как получены данные пользователя:
Promise.all([api.getUserData(), api.getInitialCards()])
  .then(responses => {
    const userData = responses[0];
    const initialCardsData = responses[1];

    currentUser.setUserInfo({username: userData.name, userjob: userData.about});
    profileAvatar.src = userData.avatar;
    currentUser.id = userData._id;

    const initialCardElements = initialCardsData.map(data => {
      return createCard(data, handleImageClick, handleDeletePopupOpen, currentUser.id)
    })

    cardsSection.renderItems(initialCardElements);
  })
  .catch(err => console.log(err));

