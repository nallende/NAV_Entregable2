const products = [];

class Product {
  constructor(id, timestamp, name, price, imageURL, description, stock) {
    this.id = id;
    this.timestamp = timestamp;
    this.name = name;
    this.price = new Number(price);
    this.imageURL = imageURL;
    this.description = description;
    this.stock = new Number(stock);
  }

  save() {
    this.id = Math.floor(Math.random() * 100000);
    products.push(this);
  }

  static findAll() {
    return products;
  }

  static findById(prodId) {
    return products.filter((p) => p.id == prodId);
  }

  update() {
    const editProductIndex = products.findIndex((p) => p.id == this.id);
    products[editProductIndex] = this;
  }

  static deleteById(prodId) {
    const deleteProductIndex = products.findIndex((p) => p.id == prodId);
    products.splice(deleteProductIndex, 1);
  }
}

module.exports = Product;
