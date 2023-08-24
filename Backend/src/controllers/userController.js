const userModel = require("../models/userModel")

const getAll = async (req, res) => {
  const employees = await userModel.getAll()
  return res.status(200).json(employees)
}

const employeeAdded = async (req, res) => {
  const employeeAdded = await userModel.employeeAdded(req.body)
  return res.status(201).json(employeeAdded)
}

module.exports = {
  getAll,
  employeeAdded
}
