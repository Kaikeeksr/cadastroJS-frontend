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
          <td class='coluna_id'>${employee.e_id}</td>
          <td class='coluna_nome'>${employee.e_name}</td>
          <td class='coluna_email'>${employee.e_email}</td>
          <td class='coluna_cpf'>${employee.e_cpf}</td>
          <td class='coluna_tel'>${employee.e_tel}</td>
          <td class='coluna_setor'>${employee.e_departament}</td>
          <td class='coluna_salario'>${employee.e_wage}</td>
          <td class='coluna_genero'>${employee.e_gender}</td>
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

  $('.coluna_setor').each(function () {
    var valor = $(this).val()
    $(this).val(valor.toUpperCase())
  })
})
