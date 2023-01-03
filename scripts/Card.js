import { imagePopup, popupImage, popupCaption, openPopup } from './index.js';

export class Card {
  constructor(placeData, templateSelector) {
    //const {name, link} = placeData;
    this.name = placeData.name;
    this.link = placeData.link;
    this._template = document.querySelector(templateSelector).content.querySelector('.card');
    this._card = this._template.cloneNode(true);
    this._cardImg = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._like = this._card.querySelector('.card__like');
    this._cardDeleteBtn = this._card.querySelector('.card__delete');
  }

  creator() {
    this._fillCard();
    this._setCardListeners();
    return this._card;
  }

  _fillCard() {
    this._cardImg.src = this.link;
    this._cardImg.setAttribute('alt', ` ${this.name}.`);
    this._cardTitle.textContent = this.name;
  }

  _setCardListeners() {
    // удаление карточки
    //const cardDeleteBtn = this.card.querySelector('.card__delete');
    this._cardDeleteBtn.addEventListener('click', () => this._deleteCard());
    // лайк карточки
    //const like = this.card.querySelector('.card__like');
    this._like.addEventListener('click', () => this._likeCard());
    // показ попапа с картинкой
    this._cardImg.addEventListener('click', () => this._showImage());
  }

  _deleteCard() {
    this._card.remove();
  }

  _likeCard() {
    //const currentLike = event.target;
    this._like.classList.toggle('card__like_active');
  }

  _showImage() {
    popupImage.src = this.link;
    // записываем название нужной карточки в alt и figcaption:
    popupImage.setAttribute('alt', ` ${this.name}.`);
    popupCaption.textContent = this.name;

    openPopup(imagePopup);
  }

} //Card

