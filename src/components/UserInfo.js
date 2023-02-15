export class UserInfo {
  constructor(usernameSelector, infoSelector) {
    this._user = document.querySelector(usernameSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {user: this._user.textContent, info: this._info.textContent}
  }

  setUserInfo({username, userjob}) {
    if (username) this._user.textContent = username;
    if (userjob) this._info.textContent = userjob;
  }
}
