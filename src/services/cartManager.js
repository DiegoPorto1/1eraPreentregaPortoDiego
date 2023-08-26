 import crypto from 'crypto'
 import { promises as fs} from 'fs'
import config from '../config.js'  
import cartRouter from '../routes/carts.routes.js'

 class Cart {
    constructor (id){
        this.id = id
        this.products = []
       

    }
 }
class CartManager {
    constructor(){
    
        this.carts = []
        this.path= config.PRODUCTS_FILE_PATH_CART
    }

    clearCart () {
        const cart= new Cart(crypto.randomUUID())
        this.carts.push(cart)
        return cart
    }
    getCartById = async (id) => {
        const carts = JSON.parse ( await fs.readFile (this.path, 'utf-8'))
        const cart = carts.find(carrito => carrito.id === id)
        if(cart)
        return cart
    else 
    return false
    }

    addProduct (cid, pid) {
        const cart = this.getCartById(cid)
        const prodIndex = cart.products.findIndex(prod => prod.id === pid)
      if (prodIndex != -1){
      cart.products[prodIndex].quantity += 1 
   
    } else {
        cart.products.push({ id: pid, quantity: 1})
    }

    return true
    }
    async createCart() {
        const cart = this.clearCart();
        const cartsJSON = JSON.stringify(this.carts);

        try {
            await fs.writeFile(this.path, cartsJSON, 'utf-8');
            return cart;
        } catch (error) {
            console.error("Error creating cart:", error);
            return null;
        }
    }
}



export default CartManager