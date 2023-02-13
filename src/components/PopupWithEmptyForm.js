import { Popup } from "./Popup";

export class PopupWithEmptyForm extends Popup {
  constructor(popupSelector, closeButtonSelector, formSubmitHandler) {
    super(popupSelector, closeButtonSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._formSubmitHandler = formSubmitHandler;
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._cardId);
    });
  }
}
