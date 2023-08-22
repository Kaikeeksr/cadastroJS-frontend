const connection = require("./connection")
const query = 'SELECT * FROM tbl_employee'

const getAll = async () => {
  const users = await connection.execute(query)
  return users
}

module.exports = {
  getAll
}
