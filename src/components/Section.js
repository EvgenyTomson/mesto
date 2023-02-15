export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item, this._container);
    })
  }

  addItem(item) {
    this._renderer(item, this._container);
  }
}
