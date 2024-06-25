import express from "express";
import {
  sendMessage,
  getMessage,
  deleteChat,
} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);
router.post("/delete/:id", protectRoute, deleteChat);
export default router;
