import express from "express";
import { getDatas, getData, deleteData, updateData, postData } from "../Controllers/Navbar.js";

const router = express.Router();

router.post("/", postData);

router.put("/:id", updateData);

router.delete("/:id", deleteData);

router.get("/:id", getData);

router.get("/", getDatas);





export default router;