const fetchEmployees = async () => {
  const response = await fetch('http://localhost:3333/user')
  return response.json()
}

fetchEmployees().then(function (employees) {
  window.addEventListener('DOMContentLoaded', () => {
    loader.classList.add('loader-hidden')
  })

  let placeholder = document.querySelector('#data-output')
  let out = ''
  for (let employee of employees) {
    out += `
        <tr id="linha-${employee.employee_id}">
          <td class='coluna_id'>${employee.employee_id}</td>
          <td class='coluna_nome'>${employee.employee_name}</td>
          <td class='coluna_email'>${employee.employee_email}</td>
          <td class='coluna_cpf'>${employee.employee_cpf}</td>
          <td class='coluna_tel'>${employee.employee_tel}</td>
          <td class='coluna_setor'>${employee.employee_departament}</td>
          <td class='coluna_salario'>${employee.employee_wage}</td>
          <td class='coluna_genero'>${employee.employee_gender}</td>
          <td class='coluna_dt_cadastro'>${employee.created_at}</td>
        </tr>  
    `
  }

  placeholder.innerHTML = out

  //formatando os dados para aparecer na tabela
  $('.coluna_cpf').each(function () {
    $(this).mask('000.000.000-00')
  })

  $('.coluna_tel').each(function () {
    $(this).mask('(00) 0000-0000')
  })
})
