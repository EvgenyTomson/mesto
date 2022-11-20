'use strict';

const profileEdit = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');
const inputName = document.querySelector('#inputName');
const inputJob = document.querySelector('#inputJob');

// Открываем форму редактирования профиля:
profileEdit.addEventListener('click', () => {
  popup.classList.add('popup_opened');

  // берем значения из текущего профиля и устанавливаем в качестве начальных для input:
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

// Закрываем форму редактирования профиля без сохранения:
const closeBtn = document.querySelector('.popup__close');
closeBtn.addEventListener('click', event => {
  // отключаем действие по умолчанию. если этого не сделать, происходит submit на форме:
  event.preventDefault();

  popup.classList.remove('popup_opened');
});

// Сохраняем изменения профиля и закрываем форму:
popupForm.addEventListener('submit', event => {
  // отключаем перезагрузку страницы при отправке формы (действие по умолчанию):
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  popup.classList.remove('popup_opened');
});

// Бонус: ставим и снимаем лайки.
// Не уверен, что именно такая реализация будет нужна в дальнейшем, но пока так приятнее.
const likes = document.querySelectorAll('.elements__like');
likes.forEach(like => {
  like.addEventListener('click', event => {
    event.target.classList.toggle('elements__like_active');
  });
});
