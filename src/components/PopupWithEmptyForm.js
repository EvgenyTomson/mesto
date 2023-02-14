import { Popup } from "./Popup";

export class PopupWithEmptyForm extends Popup {
  constructor(popupSelector, closeButtonSelector, formSubmitHandler) {
    super(popupSelector, closeButtonSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._formSubmitHandler = formSubmitHandler;
  }

  open(cardId, cardToDelete) {
    super.open();
    this._cardId = cardId;
    this._cardToDelete = cardToDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // this._formSubmitHandler(this._cardId, this._cardToDelete);
      this._formSubmitHandler(this._cardId, this._cardToDelete, this._form.querySelector('.popup__submit'));
    });
  }
}
