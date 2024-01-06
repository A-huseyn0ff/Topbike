import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import ProductsRoute from "./Routes/Product.js";
import NavbarRoute from './Routes/Navbar.js'

const app=express()
app.use(express.json())
app.use(cors())
app.use("/products", ProductsRoute);
app.use('/navbar',NavbarRoute)
dotenv.config()


const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log('Welcome dana');
})