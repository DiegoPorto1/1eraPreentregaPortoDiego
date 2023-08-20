import { Router } from "express";

const prodsRouter = Router()

 prodsRouter.get('/', async (req, res)=> {
    const {limit} = req.query

const prods = await productManager.getProducts ()

const products = prods.slice(0, limit)

res.status (200).send (products)

 })

 prodsRouter.get('/:id', async (req, res)=> {
    const {id} = req.params

    const prod = await productManager.getProductsById (parseInt(id))

     if(prod) 
   res.status (200),send(prod)
    else 
res.status(404).send("Producto no encontrado")

 })

 prodsRouter.post('/', async(req,res) =>{
    const {code} = req.body
    const confirmacion = await  productManager.getProductsBycode(code)
    if (confirmacion) {
        req.status(404),send("Producto ya creado")
    
    } else  {
        const conf = await productManager.addProduct(req.body)
        if (conf)
        res.status(200).send("Producto creado")
    }

 })
 prodsRouter.put('/:id', async(req,res) =>{
    const {id} = req.params;
    const confirmacion = await  productManager.getProductsByID (parseInt(id))
    if (confirmacion) {
       await productManager.updateProduct(parseInt(id), req.body)
       res.status(200).send("Producto Actualizado")
    } else  {
        
        res.status(404).send("Producto no encontrado")
    }

 })

 prodsRouter.delete('/:id', async(req,res) =>{
    const {id} = req.params;
    const confirmacion = await  productManager.getProductsByID (parseInt(id))
    if (confirmacion) {
       await productManager.deleteProduct(parseInt(id), req.body)
       res.status(200).send("Producto eliminado")
    } else  {
        
        res.status(404).send("Producto no encontrado")
    }

 })



 export default prodsRouter 