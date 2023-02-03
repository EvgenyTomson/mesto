import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, closeButtonSelector) {
    super(popupSelector, closeButtonSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    this._image.src = '';
    this._image.setAttribute('alt', '');
    this._caption.textContent = '';
    // устаналиваем ссылку на нужную картинку:
    this._image.src = link;
    // записываем название нужной карточки в alt и figcaption:
    this._image.setAttribute('alt', ` ${name}.`);
    this._caption.textContent = name;

    this._popup.classList.add('popup_opened');
    // устанавливаем обработчик закрытия попапа по Ecs в момент открытия попапа:
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    });
  }
}
