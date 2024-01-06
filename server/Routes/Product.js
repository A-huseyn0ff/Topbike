import express from "express";
import { getProducts, getProduct, deleteProduct, updateProduct, postProduct } from "../Controllers/Product.js";

const router = express.Router();

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/:id", getProduct);

router.get("/", getProducts);





export default router;