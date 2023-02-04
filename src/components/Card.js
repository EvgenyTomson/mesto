export class Card {
  constructor(placeData, templateSelector, handleCardClick) {
    this.name = placeData.name;
    this.link = placeData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
  }

  create() {
    this._card = this._getCardTemplate();
    this._cardImg = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._like = this._card.querySelector('.card__like');
    this._cardDeleteBtn = this._card.querySelector('.card__delete');

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
    this._cardDeleteBtn.addEventListener('click', () => this._deleteCard());
    // лайк карточки
    this._like.addEventListener('click', () => this._likeCard());
    // показ попапа с картинкой
    this._cardImg.addEventListener('click', () => this._handleCardClick(this.name, this.link));
  }

  _deleteCard() {
    this._card.remove();
    this._element = null;
  }

  _likeCard() {
    this._like.classList.toggle('card__like_active');
  }
}

