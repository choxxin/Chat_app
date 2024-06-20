import expres from "express";
const router = expres.Router();
import { login, logout, signup } from "../controllers/auth.controllers.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
export default router;
