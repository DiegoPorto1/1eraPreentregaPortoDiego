import express from "express"
import prodsRouter from "./routes/products.routes.js";
import { __dirname } from "./path.js";
import path from 'path';
import ProductManager from "./services/ProductoManager.js";
import cartRouter from "./routes/carts.routes.js";
const app = express()
const PORT =8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Routes
app.use('/api/products', prodsRouter)
app.use('/api/carts', cartRouter)
app.use('/static',express.static(path.join(__dirname, '/public')))

app.listen(PORT, ()=> {
console.log(`Server on port ${PORT}`)
} )


