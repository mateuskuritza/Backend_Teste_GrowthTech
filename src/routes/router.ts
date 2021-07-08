import express from "express";
import postController from "../controllers/postController";
import userController from "../controllers/userController";
const router = express.Router();

router.get("/users", (req, res) => userController.getAllUsers(req, res));
router.get("/posts", (req, res) => postController.getAllPosts(req, res));

export default router;
