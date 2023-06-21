import db from "../config/mongo.js";

const Products = db.collection("Products");
export default Products;