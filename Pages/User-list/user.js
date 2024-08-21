let loader = document.querySelector(".loader")

const fetchEmployees = async () => {
  const response = await fetch("http://localhost:3333/user")
  return response.json()
}

console.log(fetchEmployees())
fetchEmployees().then(function (employees) {
  window.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("loader-hidden")
  })
  let placeholder = document.querySelector("#data-output")
  let out = ""
  for (let employee of employees) {
    out += `
        <tr>
          <td>${employee.employee_id}</td>
          <td>${employee.employee_name}</td>
          <td>${employee.employee_email}</td>
          <td>${employee.employee_cpf}</td>
          <td>${employee.employee_tel}</td>
          <td>${employee.employee_departament}</td>
          <td>${employee.employee_wage}</td>
          <td>${employee.employee_gender}</td>
          <td>${employee.created_at}</td>
        </tr>  
    `
  }

  placeholder.innerHTML = out
})
