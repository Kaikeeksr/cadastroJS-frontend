const express = require("express")
const userController = require("./controllers/userController")

const router = express.Router()

router.get("/users", userController.getAll)

module.exports = router
