import Products from "../models/products.js";
import messages from "../utils/messages.js";
import { ObjectId } from "mongodb";

const getProduct = async (req, res) => {
    try {
        const data = await Products.find().toArray();

        messages(res, 200, "All product", data);
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

const getProductByID = async (req, res) => {
    const id = req.params.id;

    try {
        const _id = new ObjectId(id);
        const data = await Products.findOne({ _id });

        if(data) return messages(res, 200, "Detail Product", data);

        messages(res, 404, "Product not found");
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const _id = new ObjectId(id);
        const data = await Products.deleteOne({ _id });

        if(data) return messages(res, 200, "Delete product succes");

        messages(res, 404, "Product not found");
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

const createProduct = async (req, res) => {
    const { name, price, stock } = req.body;

    try {
        const newData = await Products.insertOne({name, price, stock });

        messages(res, 201, "Create product success", newData);
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const _id = new ObjectId(id);
        const product = await Products.findOne({ _id });

        if(product) {
            await Products.updateOne({ _id }, { $set: { ...data }});
            messages(res, 200, "Update product success");
        }
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

export { getProduct, getProductByID, deleteProduct, createProduct, updateProduct };