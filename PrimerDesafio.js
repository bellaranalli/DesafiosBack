//Creo clase con constructor vacío
class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;
  static code = "a";
  //función para agregar los productos
  addProduct = (product) => {
    if (!product.name || !product.price || !product.description || !product.price || !product.thumbnail || !product.stock || product.id ) {
      console.log('Falta un dato');

    } else {
      product.id = ProductManager.id;
      ProductManager.id = ProductManager.id + 1; //id autoincrementable
      product.code = ProductManager.code;
      ProductManager.code = ProductManager.code + 1; //code autoincrementable
      this.products.push(product);

    }
    return this.products;
    
  }

  //Devuelvo los productos   
  getProducts = () => {
    return this.products

  }

  //Llamo a un producto por id  y sale mensaje por consola si no lo encuentra    
  getProductById = (id) => {
    const prod = this.products.filter(el => el.id === id);
    if (prod.length > 0) {
      return prod;
    }
    console.log('Producto no encontrado');

  }

}


var newProduct = new ProductManager();
newProduct.addProduct({ name: 'Zapatillas', description: 'goretex', price: 100, thumbnail: 'acá va una imagen', stock: 1 });
newProduct.addProduct({ name: 'Sandalias', description: 'Cuero', price: 90, thumbnail: 'acá va una imagen', stock: 1 });
newProduct.addProduct({ name: 'Botas', description: 'Cuero', price: 80, thumbnail: 'acá va una imagen', stock: 1 });

console.log(newProduct.getProducts());
console.log(newProduct.getProductById(9));











