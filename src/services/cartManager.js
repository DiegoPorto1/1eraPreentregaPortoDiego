 import crypto from 'crypto'
import cartRouter from '../routes/carts.routes'

 class Cart {
    constructor (id){
        this.id = id
        this.products = []

    }
 }
class cartManager {
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