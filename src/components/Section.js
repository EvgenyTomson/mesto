export class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(containerSelector);
  }

  drawInitial() {
    this._items.forEach(item => {
      this._renderer(item, this._container);
    })
  }

  addItem(item) {
    this._renderer(item, this._container);
  }
}
