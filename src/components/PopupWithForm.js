import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, closeButtonSelector, formSubmitHandler) {
    super(popupSelector, closeButtonSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._formSubmitHandler = formSubmitHandler;
  }

  _getInputValues() {
    const result = {};
    this._inputList.forEach(input => result[input.name] = input.value);
    return result
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues(), this._form.querySelector('.popup__submit'));
    });
  }
}
