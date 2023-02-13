export class Card {
  constructor(placeData, templateSelector, handleCardClick, handleCardDeleteConfirm) {
    this.name = placeData.name;
    this.link = placeData.link;
    this._likes = placeData.likes.length;
    this._id = placeData._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    //console.log(handleCardDeleteConfirm);
    this._handleCardDeleteConfirm = handleCardDeleteConfirm;
  }

  _getCardTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
  }

  create() {
    this._card = this._getCardTemplate();
    this._cardImg = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._like = this._card.querySelector('.card__like');
    // устанавливаем количество лайков:
    this._card.querySelector('.card__likes-count').textContent = this._likes ? this._likes : 0;

    if (this._templateSelector === '#cardTemplate') {
      this._cardDeleteBtn = this._card.querySelector('.card__delete');
    }

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
    if (this._templateSelector === '#cardTemplate') {
      this._cardDeleteBtn.addEventListener('click', () => this._deleteCard());
    }
    // лайк карточки
    this._like.addEventListener('click', () => this._likeCard());
    // показ попапа с картинкой
    this._cardImg.addEventListener('click', () => this._handleCardClick(this.name, this.link));
  }

  _deleteCard() {
    this._handleCardDeleteConfirm(this._id);
    this._card.remove();
    this._card = null;
    // this._element = null;
  }

  _likeCard() {
    this._like.classList.toggle('card__like_active');
  }
}

