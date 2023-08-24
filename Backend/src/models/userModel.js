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
  return employees[0] //retornando a primeira posição do array
}

const employeeAdded = async (employee) => {
  const {
    employee_id,
    employee_name,
    employee_cpf,
    employee_email,
    employee_tel,
    employee_departament,
    employee_gender,
    employee_wage
  } = employee
  const query =
    "INSERT INTO tbl_employees (employee_id, employee_name, employee_cpf, employee_email, employee_tel, employee_departament, employee_gender, employee_wage)" +
    "VALUES(?,?,?,?,?,?,?,?)"

  const EmployeeAdded = await connection.execute(query, [
    employee_id,
    employee_name,
    employee_cpf,
    employee_email,
    employee_tel,
    employee_departament,
    employee_gender,
    employee_wage
  ])

  return EmployeeAdded[0]
}

module.exports = {
  getAll,
  employeeAdded
}
