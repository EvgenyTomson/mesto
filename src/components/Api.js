export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // загрузка карточек с сервера:
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: this._headers,
      })
        .then(res => {
          //console.log('getInitialCards: ', res);
          return res.ok ? res.json() : Promise.reject(`getInitialCards Ошибка: ${res.status}`)
        })
  }

  // загрузка данных пользователя с сервера:
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
      })
        .then(res => {
          //console.log('getUserData: ', res);
          return res.ok ? res.json() : Promise.reject(`getUserData Ошибка: ${res.status}`)
        })
  }

  // Редактирование профиля пользователя на сервере:
  editUserData({username, userjob}) {
    //PATCH `${this._baseUrl}/users/me`; //https://mesto.nomoreparties.co/v1/cohortId/users/me
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: username, //userData.name,
          about: userjob, //userData.about
        })
      })
        .then(res => {
          //console.log('editUserData: ', res);
          return res.ok ? res.json() : Promise.reject(`editUserData Ошибка: ${res.status}`)
        })
  }

  // Добавление новой карточки:
  addNewCard(cardData) {
    //console.log('addNewCard: ', cardData);
    //POST `${this._baseUrl}/cards`; //https://mesto.nomoreparties.co/v1/cohortId/cards
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(cardData)
      })
        .then(res => {
          //console.log('addNewCard: ', res);
          return res.ok ? res.json() : Promise.reject(`addNewCard Ошибка: ${res.status}`)
        })
  }

  // Удаление СВОЕЙ карточки с сервера:
  deleteCard(cardId) {
    //DELETE `${this._baseUrl}/cards/${cardId}`; //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      })
  }

  // Постановка и снятие лайка:
  addLike(cardId) {
    //PUT `${this._baseUrl}/cards/${cardId}/likes` //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
        .then(res => {
          //console.log('addLike: ', res);
          return res.ok ? res.json() : Promise.reject(`addLike Ошибка: ${res.status}`)
        })
  }

  removeLike(cardId) {
    //DELETE  `${this._baseUrl}/cards/${cardId}/likes` //https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
        .then(res => {
          //console.log('removeLike: ', res);
          return res.ok ? res.json() : Promise.reject(`removeLike Ошибка: ${res.status}`)
        })
  }

  // Обновление аватара пользователя:
  editUserAvatar(avatarUrl) {
    //PATCH `${this._baseUrl}/users/me/avatar` //https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar : avatarUrl
        })
      })
        .then(res => {
          console.log('editUserAvatar: ', res);
          return res.ok ? res.json() : Promise.reject(`editUserAvatar Ошибка: ${res.status}`)
        })
  }
}
