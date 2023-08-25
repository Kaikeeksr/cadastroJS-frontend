const express = require("express")
const userController = require("./controllers/userController")
const employeeMiddleware = require('./middlewares/employeeMiddleware')

const router = express.Router()

router.get("/", (req, res) => res.status(200).send("O router tá funcionando"))
router.get("/user", userController.getAll)
router.post("/user", employeeMiddleware.validateBody, userController.employeeAdded)
router.delete('/user/:employee_id', userController.deleteEmployee)
router.put('/user/:employee_id', userController.updateEmployee)


module.exports = router
