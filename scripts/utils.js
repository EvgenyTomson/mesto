// Получаем попап с изображением:
const imagePopup = document.querySelector('.popup_type_big');
// // получаем элемент картинки попапа:
const popupImage = imagePopup.querySelector('.popup__image');
// и описание картинки попапа:
const popupCaption = imagePopup.querySelector('.popup__caption');

// Функция открытия попапа с картинкой по клику на картинке в карточке:
function showImage(name, link) {
  // устаналиваем ссылку на нужную картинку:
  popupImage.src = link;
  // записываем название нужной карточки в alt и figcaption:
  popupImage.setAttribute('alt', ` ${name}.`);
  popupCaption.textContent = name;

  openPopup(imagePopup);
}

// Функция закрытия попапа по Esc:
function handlerEscPopupClose(event) {
  if(event.key === 'Escape') {
    // находим открытый попап и закрываем его:
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  // устанавливаем обработчик закрытия попапа по Ecs в момент открытия попапа:
  document.addEventListener('keydown', handlerEscPopupClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  // очищаем данные по картинке, если это попап с картинкой.
  // иначе, при открытии попапа с недоступной картинкой сачала на секунду появляется предудущая.
  if (popup.classList.contains('popup_type_big')) {
    popupImage.src = '';
    popupImage.setAttribute('alt', '');
    popupCaption.textContent = '';
  }
  // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
  document.removeEventListener('keydown', handlerEscPopupClose);
}

// export { imagePopup, popupImage, popupCaption, showImage, handlerEscPopupClose, openPopup, closePopup }
export { showImage, openPopup, closePopup }
