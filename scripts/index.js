'use strict';

const profileEdit = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const inputName = document.querySelector('#inputName');
const inputJob = document.querySelector('#inputJob');
const closeBtn = document.querySelector('.popup__close');

// Объявляем функцию открытия попапа:
function openPopup() {
  popup.classList.add('popup_opened');

  // берем значения из текущего профиля и устанавливаем в качестве начальных для input:
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

// Объявляем функцию закрытия попапа:
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Объявляем функцию "отправки" формы с сохранением введенных значений:
function formSubmitHandler(event) {
  // отменяем действие по умолчанию, чтобы не перезагружать страницу:
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup();
}

// Открываем форму редактирования профиля:
profileEdit.addEventListener('click', openPopup);

// Закрываем форму редактирования профиля без сохранения:
closeBtn.addEventListener('click', closePopup);

// Сохраняем изменения профиля и закрываем форму:
popupForm.addEventListener('submit', formSubmitHandler);
