const connection = require("./connection")
const query = "SELECT * FROM tbl_employees"

const getAll = async () => {
  const user = await connection.execute(query)
  return user
}

module.exports = {
  getAll
}
