import express from "express";
import { getProduct, deleteProduct, updateProduct, postProduct, getAll,getProductlarById } from "../Controllers/Product.js";

const router = express.Router();

router.post("/", postProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/:id", getProduct);

router.get("/", getAll);

router.get('/productlar/:id', getProductlarById);



export default router;