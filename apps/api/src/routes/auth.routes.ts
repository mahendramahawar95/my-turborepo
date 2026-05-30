import express from "express";
// import { register } from "../controllers/auth.controller";
import { registerController } from "../controllers/auth.controller";

const router: express.Router = express.Router();

router.post("/register", registerController);

export default router;
