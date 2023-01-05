// Параметры валидации:
import { validationParametres } from './initialData.js';
// export const validationParametres = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// };

// --------------------------------------------

export class FormValidator {
  constructor(validationParametres, formElement) {
    this.form = formElement;
    this.inputList = Array.from(this.form.querySelectorAll(validationParametres.inputSelector));
    this.submitButton = this.form.querySelector(validationParametres.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners(validationParametres);
  }

  _setEventListeners(validationParametres) {
    //const {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = validationParametres;
    const {inactiveButtonClass, inputErrorClass, errorClass} = validationParametres;
    //const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    //const buttonElement = formElement.querySelector(submitButtonSelector);
    // комментирую строку, т.к. все равно идет проверка при каждом открытии формы.
    //this._toggleButtonState(this.inputList, this.submitButton, inactiveButtonClass);

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this.form, inputElement, inputErrorClass, errorClass);
        //this._toggleButtonState(this.inputList, this.submitButton, inactiveButtonClass);
        this._toggleButtonState(inactiveButtonClass);
      });
    });
  }

  _toggleButtonState(inactiveButtonClass) {
    if(this._hasInvalidInput(this.inputList)) {
      // buttonElement.classList.add(inactiveButtonClass);
      // buttonElement.setAttribute('disabled', 'disabled');
      this.submitButton.classList.add(inactiveButtonClass);
      this.submitButton.setAttribute('disabled', 'disabled');
    }else {
      // buttonElement.classList.remove(inactiveButtonClass);
      // buttonElement.removeAttribute('disabled');
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
  //const formElement = popup.querySelector(validationParametres.formSelector);
  //const inputElements = formElement.querySelectorAll(validationParametres.inputSelector);
  this.inputList.forEach(inputElement => {
    this._hideInputError(this.form, inputElement, validationParametres.inputErrorClass, validationParametres.errorClass);
  })

  // this._toggleButtonState(this.inputList, this.submitButton, validationParametres.inactiveButtonClass);
  this._toggleButtonState(validationParametres.inactiveButtonClass);
}

} // FormValidator


// --------------------------------------------

// Объявление глобальных функций:
// Функция показа ошибки валидации:
// function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// };

// // Функция скрытия ошибки валидации:
// function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// // Функция проверки валидности инпута:
// function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
//   } else {
//     hideInputError(formElement, inputElement, inputErrorClass, errorClass);
//   }
// };

// // Функция проверки валидности каждого инпута в форме:
// function hasInvalidInput(inputList) {
//   return inputList.some(input => !input.validity.valid)
// }

// // Функция переключения состояний кнопки 'submit':
// function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
//   if(hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.setAttribute('disabled', 'disabled');
//   }else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// }

// // Функция, скрывающая ошибку и очищающая текст ошибки при закрытии попапа:
// function hideErrorOnOpen(popup) {
//   const formElement = popup.querySelector(validationParametres.formSelector);
//   const inputElements = formElement.querySelectorAll(validationParametres.inputSelector);
//   inputElements.forEach(inputElement => {
//     hideInputError(formElement, inputElement, validationParametres.inputErrorClass, validationParametres.errorClass);
//   });
// }

// // ----------------------------------------------------

// // Установка слушателей:
// // Функция установки слушателей 'input' на все инпуты всех форм:
// function setEventListeners(formElement, validationParametres) {
//   const {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = validationParametres;
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   // комментирую строку, т.к. все равно идет проверка при каждом открытии формы.
//   // toggleButtonState(inputList, buttonElement, inactiveButtonClass);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });
// };

// // Функция включения валидации всех форм (установка слушателей на инпуты всех форм):
// function enableValidation(validationParametres) {
//   const formList = Array.from(document.querySelectorAll(validationParametres.formSelector));

//   formList.forEach((formElement) => {
//     setEventListeners(formElement, validationParametres);
//   });
// }
