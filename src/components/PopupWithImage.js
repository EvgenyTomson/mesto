import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, closeButtonSelector) {
    super(popupSelector, closeButtonSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    // устаналиваем ссылку на нужную картинку:
    this._image.src = link;
    // записываем название нужной карточки в alt и figcaption:
    this._image.setAttribute('alt', ` ${name}.`);
    this._caption.textContent = name;

    super.open();
  }
}
