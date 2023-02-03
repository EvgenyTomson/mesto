import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, closeButtonSelector, formSubmitHandler) {
    super(popupSelector, closeButtonSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._formSubmitHandler = formSubmitHandler;
  }

  _getInputValues() {
    return this._inputList.map(input => input.value);
  }

  close() {
    this._form.reset();
    this._popup.classList.remove('popup_opened');
    // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      // закрываем попап, если клик был на оверлее или на кнопке закрытия:
      if(event.target === this._popup || event.target === this._closeButton) {
        this.close();
      }
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
      this.close();
    });
  }
}
