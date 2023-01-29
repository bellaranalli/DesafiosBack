const fs = require("fs")

class ProductManager {
    constructor(products) {
        this.products = products;
    }
    // agrego todos los productos y creo .txt
    addproduct(title, description, price, thumbnail, code, stock) {
        if (this.products.some(products => products.code == code)) {
            console.error("el producto ya existe");
        }
        else {

            this.products.push({ name: title, description: description, price: price, thumbnail: thumbnail, code: code, id: producto.length + 1, stock: stock });
            fs.writeFileSync("./Productos.txt", JSON.stringify(this.products))
        }
    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        let Producto = fs.readFileSync("./Productos.txt", "utf-8")
        let producto = JSON.parse(Producto)
        if (producto.some(products => products.id == id)) {
            let producto_buscado = producto.filter(products => products.id == id)
            console.log(producto_buscado);
        }
        else {
            console.log("el producto no existe");
        }
    }
    //elimino un producto por id (en este caso el id 1 que es "zapatos" y reescribo el .txt)
    deleteProductById(id) {
        let Producto = fs.readFileSync("./Productos.txt", "utf-8")
        let producto = JSON.parse(Producto)
        if (producto.some(producto => producto.id == id)) {
            let newProducto = producto.filter(producto => producto.id != id)
            fs.writeFileSync("./Productos.txt", JSON.stringify(newProducto))

        }
    }
    //actualizo precio producto por id (en este caso el id 2 que es "botas" y reescribo el .txt)
    updateProductById(id) {
        let Producto = fs.readFileSync("./Productos.txt", "utf-8")
        let producto = JSON.parse(Producto)
        let newPrice = "250"
        producto.map(function (dato) {
            if (dato.id == id) {
                dato.price = newPrice
            }
            return dato;
        });
        fs.writeFileSync("./Productos.txt", JSON.stringify(producto))
    }


}
let Product_Manager = new ProductManager([]);


console.log(Product_Manager.getProductById(3)); //llamo por id a un producto y si no existe lo muestro por consola al mensaje
Product_Manager.deleteProductById(1) //borro producto con id 1
Product_Manager.updateProductById(2) //modifico dato de producto por id 2

if (fs.existsSync("./Productos.txt")) {
    let archivo = fs.readFileSync("./Productos.txt", "utf-8")
    let contenido = JSON.parse(archivo)
    console.log(contenido)
}

/*Esto de abajo es en caso de que quiera agregar un producto:

Product_Manager.addproduct("Zapato", "Cuero", "$100", "aca va una imagen", 90, 4);
Product_Manager.addproduct("Bota", "caña alta", "$100", "aca va una imagen", 43, 4);
Product_Manager.addproduct("Zapatilla", "running", "100", "aca va una imagen", 86, 4 );

*/
