import express from "express";
import { getAllEmp } from "../controller/UserController.js";

const router = express.Router()

router.get("/getAll",getAllEmp)
router.post("/addEmp", addEmp)

export default router