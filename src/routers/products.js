import express from "express";
import { getProduct } from "../controllers/products.js";

const Router = express.Router();

Router.get("/products", getProduct);

export default Router;