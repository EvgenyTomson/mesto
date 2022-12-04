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

const cardHolder = document.querySelector('.elements__cards');

function newPlace(name, link) {
  let cardElem = document.createElement('li');
  cardElem.innerHTML = `
    <button class="card__delete" type="button" aria-label="Удалить карточку"></button>
    <img src="${link}" alt=" ${name}." class="card__image">
    <div class="card__description">
      <h2 class="card__title">${name}</h2>
      <button class="card__like" type="button" aria-label="Поставить лайк"></button>
    </div>
  `;
  cardElem.classList.add('card');

  // вставляем карточку именно в начало списка
  cardHolder.prepend(cardElem);

  // При добавлении карточки сразу вешаем на ее кнопку удаления событие:
  let delBtn = cardElem.querySelector('.card__delete');

  delBtn.addEventListener('click', e => {
    const cardToDelete = e.target.closest('.card');
    if (!cardToDelete) return;
    cardToDelete.remove();
  });

}

// Вставляем начальные карточки из массива:
initialCards.forEach(card => {
  newPlace(card.name, card.link);
});

// initialCards.forEach(card => {
//   let cardElem = document.createElement('li');
//   cardElem.innerHTML = `
//     <button class="card__delete" type="button" aria-label="Удалить карточку"></button>
//     <img src="${card.link}" alt=" ${card.name}." class="card__image">
//     <div class="card__description">
//       <h2 class="card__title">${card.name}</h2>
//       <button class="card__like" type="button" aria-label="Поставить лайк"></button>
//     </div>
//   `;
//   cardElem.classList.add('card');

//   cardHolder.append(cardElem);
// });

const addPlace = document.querySelector('.profile__add-place');

const newPlacePopup = document.querySelector('#newPlacePopup');
const newPlacePopupForm = newPlacePopup.querySelector('.popup__form');
const newPlacePopupPlaceName = newPlacePopup.querySelector('#placeName');
const newPlacePopupPlaceLink = newPlacePopup.querySelector('#placeLink');
const newPlacePopupCloseBtn = newPlacePopup.querySelector('.popup__close');

// newPlacePopupCloseBtn.addEventListener('click', closePopup);

addPlace.addEventListener('click', () => {
  newPlacePopup.classList.add('popup_opened');
  newPlacePopupPlaceName.value = '';
  newPlacePopupPlaceLink.value = '';
});

function formNewPlaceSubmitHandler(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  let placeName = newPlacePopupPlaceName.value;
  let placeLink = newPlacePopupPlaceLink.value;

  if (!placeName || !placeLink) {
    console.log('Не указали данные');
    return;
  }

  newPlace(placeName, placeLink);

  closePopup(newPlacePopup);
}

newPlacePopupForm.addEventListener('submit', formNewPlaceSubmitHandler);

// const cardDeleteBtns = document.querySelectorAll('.card__delete');

// cardDeleteBtns.forEach(button => {
//   button.addEventListener('click', e => {
//     const cardToDelete = e.target.closest('.card');
//     if (!cardToDelete) return;
//     cardToDelete.remove();
//   });
// });
