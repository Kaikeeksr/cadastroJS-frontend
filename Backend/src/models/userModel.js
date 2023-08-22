const connection = require("./connection")

const getAll = async () => {
  const query = "SELECT * FROM tbl_employees;"

  // Executa a consulta SQL e retorna os resultados
  const rows = await connection.execute(query)
  // Cria um array de funcionários.
  const employees = []
  // Percorre os resultados da consulta e adiciona cada registro ao array de funcionários.
  for (const row of rows) {
    employees.push(row)
  }
  return employees
}

module.exports = {
  getAll
}
