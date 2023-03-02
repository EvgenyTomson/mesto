export class FormValidator {
  constructor(validationParametres, formElement) {
    this._form = formElement;
    this._inputList = Array.from(this._form.querySelectorAll(validationParametres.inputSelector));
    this._submitButton = this._form.querySelector(validationParametres.submitButtonSelector);
    this._validationParametres = validationParametres;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._submitButton.classList.add(this._validationParametres.inactiveButtonClass);
      this._submitButton.setAttribute('disabled', 'disabled');
    }else {
      this._submitButton.classList.remove(this._validationParametres.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid)
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationParametres.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationParametres.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationParametres.inputErrorClass);
    errorElement.classList.remove(this._validationParametres.errorClass);
    errorElement.textContent = '';
  }

  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    })
    this._toggleButtonState();
  }
}
