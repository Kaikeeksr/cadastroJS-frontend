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
  const dateUTC = new Date(Date.now()).toUTCString()
  const query =
    "INSERT INTO tbl_employees (employee_id, employee_name, employee_cpf, employee_email, employee_tel, employee_departament, employee_gender, employee_wage, created_at)" +
    "VALUES(?,?,?,?,?,?,?,?,?)"

  const EmployeeAdded = await connection.execute(query, [
    employee_id,
    employee_name,
    employee_cpf,
    employee_email,
    employee_tel,
    employee_departament,
    employee_gender,
    employee_wage,
    dateUTC
  ])

  return EmployeeAdded[0]
}

const updateEmployee = async (employee_id, employee) => {
  const {
    employee_name,
    employee_cpf,
    employee_email,
    employee_tel,
    employee_departament,
    employee_gender,
    employee_wage
  } = employee
  const query =
    "UPDATE tbl_employees SET employee_name = ?, employee_cpf = ?, employee_email = ?, employee_tel = ?, employee_departament = ?," +
    "employee_gender = ?, employee_wage = ? WHERE employee_id = ?"

  const updatedEmployee = await connection.execute(query, [
    employee_id,
    employee_name,
    employee_cpf,
    employee_email,
    employee_tel,
    employee_departament,
    employee_gender,
    employee_wage
  ])

  return updatedEmployee
}

const deleteEmployee = async (employee_id) => {
  const query = "DELETE FROM tbl_employees WHERE employee_id = ?"
  const removedEmployee = await connection.execute(query, [employee_id])

  return removedEmployee
}

module.exports = {
  getAll,
  employeeAdded,
  deleteEmployee,
  updateEmployee
}
