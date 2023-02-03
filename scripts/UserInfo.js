export class UserInfo {
  constructor(usernameSelector, infoSelector) {
    this._user = document.querySelector(usernameSelector);
    this._info = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {user: this._user.textContent, info: this._info.textContent}
  }

  setUserInfo({user, info}) {
    //console.log(user, info);
    this._user.textContent = user;
    this._info.textContent = info;
  }
}
