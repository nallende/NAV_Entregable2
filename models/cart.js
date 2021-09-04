let cart = null;

module.exports = class Cart {
  static save(product) {
    if (cart === null) {
      cart = { products: [], totalPrice: 0 };
    }

    const existingProductIndex = cart.products.findIndex(
      (p) => p.id == product.id
    ); // revisamos si existe el producto en el carro
    if (existingProductIndex >= 0) {
      // productos existentes
      const exsitingProduct = cart.products[existingProductIndex];
      exsitingProduct.qty += 1;
    } else {
      //si no existe producto
      product.qty = 1;
      cart.products.push(product);
    }

    cart.totalPrice += product.price;
  }

  static getCart() {
    return cart;
  }

  static delete(productId) {
    const isExisting = cart.products.findIndex((p) => p.id == productId);
    if (isExisting >= 0) {
      cart.products.splice(isExisting, 1);
    }
  }
};
