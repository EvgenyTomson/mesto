export class FormValidator {
  constructor(validationParametres, formElement) {
    this.form = formElement;
    this.inputList = Array.from(this.form.querySelectorAll(validationParametres.inputSelector));
    this.submitButton = this.form.querySelector(validationParametres.submitButtonSelector);
    this._validationParametres = validationParametres;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const {inactiveButtonClass, inputErrorClass, errorClass} = this._validationParametres;

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this.form, inputElement, inputErrorClass, errorClass);
        this._toggleButtonState(inactiveButtonClass);
      });
    });
  }

  _toggleButtonState(inactiveButtonClass) {
    if(this._hasInvalidInput(this.inputList)) {
      this.submitButton.classList.add(inactiveButtonClass);
      this.submitButton.setAttribute('disabled', 'disabled');
    }else {
      this.submitButton.classList.remove(inactiveButtonClass);
      this.submitButton.removeAttribute('disabled');
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(input => !input.validity.valid)
  }

  _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      this._hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  }

  _showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }

  hideErrorOnOpen() {

  this.inputList.forEach(inputElement => {
    this._hideInputError(this.form, inputElement, this._validationParametres.inputErrorClass, this._validationParametres.errorClass);
  })

  this._toggleButtonState(this._validationParametres.inactiveButtonClass);
}

}
