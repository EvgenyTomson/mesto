import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    //console.log(this._popup);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._formSubmitHandler = formSubmitHandler;
    //console.log(this._inputList);
  }

  _getInputValues() {
    //console.log(this._inputList);
    return this._inputList.map(input => input.value);
  }

  close() {
    this._form.reset();
    //console.log('Close', this._popup);
    this._popup.classList.remove('popup_opened');
    // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      // закрываем попап, если клик был все формы или на кнопке закрытия:
      if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        //console.log(this._popup);
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
