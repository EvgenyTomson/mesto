export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // загрузка карточек с сервера:
  getInitialCards() {
   //GET `${this._baseUrl}/cards`;  //https://mesto.nomoreparties.co/v1/cohortId/cards
    fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  // загрузка данных пользователя с сервера:
  getUserData() {
    //GET `${this._baseUrl}/users/me`; // https://nomoreparties.co/v1/cohortId/users/me
    fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  // Редактирование профиля пользователя на сервере:
  editUserData(userData) {
    //PATCH `${this._baseUrl}/users/me`; //https://mesto.nomoreparties.co/v1/cohortId/users/me
    fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    });
  }

  // Добавление новой карточки:
  addNewCard(cardData) {
    //POST `${this._baseUrl}/cards`; //https://mesto.nomoreparties.co/v1/cohortId/cards
    fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    });
  }

  // Удаление СВОЕЙ карточки с сервера:
  deleteCard(cardId) {
    //DELETE `${this._baseUrl}/cards/${cardId}`; //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId
    fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  // Постановка и снятие лайка:
  addLike(cardId) {
    //PUT `${this._baseUrl}/cards/${cardId}/likes` //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
    fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  removeLike(cardId) {
    //DELETE  `${this._baseUrl}/cards/${cardId}/likes` //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
    fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  // Обновление аватара пользователя:
  editUserAvatar(avatarUrl) {
    //PATCH `${this._baseUrl}/users/me/avatar` //https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar
    fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar : avatarUrl
      })
    });
  }
}
