const userModel = require("../models/userModel")

const getAll = async (req, res) => {
  const employees = await userModel.getAll()
  return res.status(200).json(employees)
}

module.exports = {
  getAll
}
