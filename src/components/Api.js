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
          return res.ok ? res.json() : Promise.reject(`getUserData Ошибка: ${res.status}`)
        })
  }

  // Редактирование профиля пользователя на сервере:
  editUserData({username, userjob}) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: username,
          about: userjob,
        })
      })
        .then(res => {
          return res.ok ? res.json() : Promise.reject(`editUserData Ошибка: ${res.status}`)
        })
  }

  // Добавление новой карточки:
  addNewCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(cardData)
      })
        .then(res => {
          return res.ok ? res.json() : Promise.reject(`addNewCard Ошибка: ${res.status}`)
        })
  }

  // Удаление СВОЕЙ карточки с сервера:
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      })
  }

  // Постановка и снятие лайка:
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
        .then(res => {
          return res.ok ? res.json() : Promise.reject(`addLike Ошибка: ${res.status}`)
        })
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
        .then(res => {
          return res.ok ? res.json() : Promise.reject(`removeLike Ошибка: ${res.status}`)
        })
  }

  // Обновление аватара пользователя:
  editUserAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar : avatarUrl
        })
      })
        .then(res => {
          return res.ok ? res.json() : Promise.reject(`editUserAvatar Ошибка: ${res.status}`)
        })
  }
}
