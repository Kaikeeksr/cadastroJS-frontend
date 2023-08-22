const express = require("express")
const userController = require("./controllers/userController")

const router = express.Router()

router.get("/", (req, res) => res.status(200).send("O router tá funcionando"))
router.get("/user", userController.getAll)

module.exports = router
