//import { initialCards } from '../utils/initialData.js';
import { validationParametres, templateSelector, foreignTemplateSelector, containerSelector, closeButtonSelector,
        profilePopupSelector, placePopupSelector, imagePopupSelector, avatarPopupSelector, deleteCardPopupSelectoor,
        profileEdit, profileForm, inputName, inputJob, buttonAddPlace, newPlaceForm, avatarForm, apiOptions,
        profileAvatar } from '../utils/constants.js';
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

// Функция показа лоадера:
function renderLoading(submitButton, submitButtonText) {
  submitButton.textContent = submitButtonText;
}

// Объявляем функцию сабмита формы подтверждения удаления карточки:
function handleCardDeleteSubmit(cardId, cardToDelete, submitButton) {
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.deleteCard(cardId)
    .then(res => {
      //console.log(`deleteCard. ID: ${cardId}: `, res);
      // if(res.ok) console.log('Card Delete OK')
      res.ok ?
        //console.log('Card Delete OK')
        cardToDelete.remove()
        : Promise.reject(`addNewCard Ошибка: ${res.status}`)
    })
    .catch(err => console.log('Card Delete Error: ', err))

    .finally(() => renderLoading(submitButton, submitButtonOriginalText));

  //cardToDelete.remove();
  this.close();
}

// Объявляем функцию открытия попапа удаления карточки:
function handleDeletePopupOpen(cardId, cardToDelete) {
  //console.log('handleDeletePopupOpen: ', cardId);
  cardDeletePopup.open(cardId, cardToDelete);
}

// Коллбек постаковки/снятия лайка:
function handleLikeClick(cardId, isLiked, cardObject) {
  //console.log('handleLikeClick: ', cardId);
  if(isLiked) {
    api.removeLike(cardId)
      .then(updatedCardData => {
        //console.log('updatedCardData: ', updatedCardData);
        cardObject.updateLikesCount(updatedCardData.likes.length);
      })
      .catch(err => console.log('Remove Card Like Error: ', err))
  }else {
    api.addLike(cardId)
    .then(updatedCardData => {
      //console.log('updatedCardData: ', updatedCardData);
      cardObject.updateLikesCount(updatedCardData.likes.length);
    })
    .catch(err => console.log('Add Card Like Error: ', err))
  }
}

// Функция создания элемента карточки:
const createCard = (cardData, handleCardClick, handleCardDeleteConfirm, isOwner, isLiked) => {
  let card;
  isOwner ? card = new Card(cardData, templateSelector, handleCardClick, handleCardDeleteConfirm, isOwner, isLiked, handleLikeClick)
    : card = new Card(cardData, foreignTemplateSelector, handleCardClick, handleCardDeleteConfirm, isOwner, isLiked, handleLikeClick)
  //const card = new Card(cardData, templateSelector, handleCardClick, handleCardDeleteConfirm);
  return card.create();
}
// const createCard = (cardData, templateSelector, handleCardClick, handleCardDeleteConfirm) => {
//   const card = new Card(cardData, templateSelector, handleCardClick, handleCardDeleteConfirm);
//   return card.create();
// }

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
      //console.log('newCardData: ', newCardData);
      // cardsSection.addItem(createCard(newCardData, templateSelector, handleImageClick, handleDeletePopupOpen));
      cardsSection.addItem(createCard(newCardData, handleImageClick, handleDeletePopupOpen, true, false, handleLikeClick));
    })
    .catch(err => console.log('Add New Card Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));

  // cardsSection.addItem(createCard(placeData, templateSelector, handleImageClick, handleDeletePopupOpen));
  this.close();
}

// Объявляем коллбек сабмита формы редактирования профиля:
function handleProfileSubmit(data, submitButton) {
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.editUserData(data)
    .then(userData => {
      //console.log('NewUserData: ', userData);
      currentUser.setUserInfo({username: userData.name, userjob: userData.about});
      })
    .catch(err => console.log('Change User Fata Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));

  // currentUser.setUserInfo(data);
  this.close();
}

// Объявляем функцию сабмита формы изменения аватара:
function handleAvatarSubmit({avatar}, submitButton) {
  //console.log('Avatar submit', avatar);
  const submitButtonOriginalText = submitButton.textContent;
  renderLoading(submitButton, 'Сохранение...');

  api.editUserAvatar(avatar)
    .then(res => {
      //console.log('editUserAvatar: ', res);
      // if(res.ok) console.log('Edit User Avatar OK')
      profileAvatar.src = res.avatar;
      })
    .catch(err => console.log('Edit User Avatar Error: ', err))
    .finally(() => renderLoading(submitButton, submitButtonOriginalText));

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

// Получаем данные о пользователе с сервера:
api.getUserData()
  .then(userData => {
    //console.log('UserData: ', userData);
    currentUser.setUserInfo({username: userData.name, userjob: userData.about});
    profileAvatar.src = userData.avatar;
    currentUser.id = userData._id;
    })
  .catch(err => console.log('Get User Fata Error: ', err));

// Создаем экземпляр класса Section для рендера карточек:
const cardsSection = new Section(renderer, containerSelector);

// Получаем начальные карточки с сервера:
setTimeout(() => {
  api.getInitialCards()
    .then(initialCardsData => {
      // console.log('InitialCardsData: ', initialCardsData);
      const initialCardElements = initialCardsData.map(data => {
        // return createCard(data, foreignTemplateSelector, handleImageClick, handleDeletePopupOpen)
        const isOwner = data.owner._id === currentUser.id;
        const isLiked = data.likes.some(like => like._id === currentUser.id);
        return createCard(data, handleImageClick, handleDeletePopupOpen, isOwner, isLiked, handleLikeClick)
      });

      cardsSection.drawInitial(initialCardElements);
    })
    .catch(err => console.log('Get Initial Cards Error: ', err));
}, 500);
// api.getInitialCards()
//   .then(initialCardsData => {
//     console.log('InitialCardsData: ', initialCardsData);
//     const initialCardElements = initialCardsData.map(data => {
//       // return createCard(data, foreignTemplateSelector, handleImageClick, handleDeletePopupOpen)
//       const isOwner = data.owner._id === currentUser.id;
//       return createCard(data, handleImageClick, handleDeletePopupOpen, isOwner)
//     });

//     cardsSection.drawInitial(initialCardElements);
//   })
//   .catch(err => console.log('Get Initial Cards Error: ', err));

// Создаем массив начальных карточек из входного массива данных:
// const initialCardElements = initialCards.map(data => {
//   return createCard(data, foreignTemplateSelector, handleImageClick, handleDeletePopupOpen)
// });


// Вставляем начальные карточки из массива:
//cardsSection.drawInitial(initialCardElements);
