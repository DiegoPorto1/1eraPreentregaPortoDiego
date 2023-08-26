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
    }

    clearCart () {
        const cart= new Cart(crypto.randomUUID())
        this.carts.push(cart)
        return cart
    }
    getCartById (id)
    {
        const cart = this.carts.find(carrito => carrito.id === id)
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

}

export default CartManager