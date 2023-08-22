const userModel = require("../models/userModel")

const getAll = async (req, res) => {
  const user = userModel.getAll()
  return res.status(200).json({ message: "A conexão ta funcionando" })
}

module.exports = {
  getAll
}
