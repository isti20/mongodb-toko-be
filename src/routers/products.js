import express from "express";
import { 
    getProduct, 
    getProductByID, 
    deleteProduct, 
    createProduct, 
    updateProduct } from "../controllers/products.js";

const Router = express.Router();

Router.get("/products", getProduct);
Router.get("/products/:id", getProductByID);
Router.delete("/products/:id", deleteProduct);
Router.post("/products", createProduct);
Router.put("/products/:id", updateProduct);

export default Router;