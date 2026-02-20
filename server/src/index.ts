import express from 'express'
import { ENV } from './config/env'
import cors from "cors";
const app = express()
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./router/userRoutes";
import productRoutes from "./router/productRoutes";
import commentRoutes from "./router/commentRoutes";

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(clerkMiddleware());


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);




app.get('/', (req, res)=>{
    res.json({message: "Hello from the server"})
})


app.listen(ENV.PORT, ()=>{
    console.log(`Server is running at port ${ENV.PORT}`)
})