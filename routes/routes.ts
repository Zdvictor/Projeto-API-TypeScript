import express from "express"
import HomeController from "../controllers/HomeController"
import UserController from "../controllers/UserController"
const router = express.Router()




router.get('/', HomeController.index)
router.get("/users", UserController.index)
router.post('/register', UserController.create)
router.put("/update/:id", UserController.update)
router.delete("/delete/:id", UserController.remove)


export default router
