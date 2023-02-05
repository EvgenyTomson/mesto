export class Popup {
  constructor(popupSelector, closeButtonSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(closeButtonSelector);
  }

  _handleEscClose = (event) => {
    if(event.key === 'Escape') {
      this.close();
    }
  }

  open () {
    this._popup.classList.add('popup_opened');
    // устанавливаем обработчик закрытия попапа по Ecs в момент открытия попапа:
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      // закрываем попап, если клик был на оверлее или на кнопке закрытия:
      if(event.target === this._popup || event.target === this._closeButton) {
        this.close();
      }
    })
  }
}
