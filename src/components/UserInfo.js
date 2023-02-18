export class UserInfo {
  constructor(usernameSelector, infoSelector) {
    this._user = document.querySelector(usernameSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {name: this._user.textContent, about: this._info.textContent}
  }

  setUserInfo({name, about}) {
    if (name) this._user.textContent = name;
    if (about) this._info.textContent = about;
  }
}
