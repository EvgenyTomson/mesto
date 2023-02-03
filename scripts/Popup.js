export class Popup {
  constructor(popupSelector) {
    //console.log(popupSelector);
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(event) {
    //console.log('handleEsc');
    if(event.key === 'Escape') {
      // находим открытый попап и закрываем его:
      //closePopup(document.querySelector('.popup_opened'));
      //console.log(this);
      this.close();
    }
  }

  open() {
    //console.log('Open', this._popup);
    this._popup.classList.add('popup_opened');
    // устанавливаем обработчик закрытия попапа по Ecs в момент открытия попапа:
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    });
  }

  close() {
    //console.log('Close', this._popup);
    this._popup.classList.remove('popup_opened');
    // удаляем обработчик закрытия попапа по Ecs в момент закрытия попапа:
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      // закрываем попап, если клик был все формы или на кнопке закрытия:
      if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        //console.log(this._popup);
        this.close();
      }
    })
  }
}
