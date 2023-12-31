import express from "express";
import cors from "cors";
import r_products from "./src/routers/products.js";

const PORT = 4000
const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true}));

app.use("/api/v1/", r_products);

app.listen(PORT, () => console.log("Server running on port", PORT));