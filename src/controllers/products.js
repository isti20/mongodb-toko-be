import Products from "../models/products.js";
import messages from "../utils/messages.js";

const getProduct = async (req, res) => {
    try {
        const data = await Products.find().toArray();

        messages(res, 200, "All product", data);
    } catch (error) {
        messages(res, 500, error?.messages || "Internal server error");
    }
};

export { getProduct };