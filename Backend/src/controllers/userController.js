const userModel = require("../models/userModel")

const getAll = async (req, res) => {
  const employees = await userModel.getAll()
  return res.status(200).json(employees)
}

const employeeAdded = async (req, res) => {
  const employeeAdded = await userModel.employeeAdded(req.body)
  return res.status(201).json(employeeAdded)
}

const deleteEmployee = async (req, res) => {
  const { employee_id } = req.params

  await userModel.deleteEmployee(employee_id)
  return res.status(204).json({message: 'o usuário foi deletado'})
}

const updateEmployee = async (req, res) => {
  const { employee_id } = req.params

  await userModel.updateEmployee(employee_id, req.body)
  return res.status(204).json({message: 'o usuário foi atualizado'})
}

module.exports = {
  getAll,
  employeeAdded,
  deleteEmployee,
  updateEmployee
}
