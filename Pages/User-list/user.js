const fetchEmployees = async () => {
  const response = await fetch('http://localhost:3333/user')
  return response.json()
}

const edited_id = JSON.parse(localStorage.getItem('editedEmployeeID'))

fetchEmployees().then(function (employees) {
  window.addEventListener('DOMContentLoaded', () => {
    loader.classList.add('loader-hidden')
  })

  // Ordena o array de employees em ordem alfabética pelo nome
  employees.sort((a, b) => a.e_name.localeCompare(b.e_name))

  let placeholder = document.querySelector('#data-output')
  let out = ''
  for (let employee of employees) {
    out += `
        <tr id="linha-${employee.e_id}">
          <td class='coluna_id' style='width: 60px'>${employee.e_id}</td>
          <td class='coluna_nome'>${employee.e_name}</td>
          <td class='coluna_email'>${employee.e_email}</td>
          <td class='coluna_cpf'>${employee.e_cpf}</td>
          <td class='coluna_tel'>${employee.e_tel}</td>
          <td class='coluna_setor'>${employee.e_departament}</td>
          <td class='coluna_salario'>${employee.e_wage}</td>
          <td class='coluna_genero'>${employee.e_gender}</td>
          <td class='coluna_dt_cadastro'>${employee.created_at}</td>
          <td class='coluna_btn' style='width: 68px'>
          <div class="btn_container">
            <div class="btn_editar" style="cursor: pointer;" onclick="editEmployee(${employee.e_id})" title="Editar">
              <i class="fa fa-pencil-square-o" aria-hidden="true" style="color: #6c63ff;"></i>
            </div>
            <div class="btn_excluir" style="cursor: pointer;" onclick="deleteEmployee(${employee.e_id}, '${employee.e_name}')" title="Excluir">
              <i class="fa fa-trash" aria-hidden="true" style="color: rgb(255, 92, 92);"></i>
            </div>
          </div>
          </td>
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

  if (edited_id) {
    const editedRow = $(`#linha-${edited_id}`)
    editedRow.addClass('blink')

    setTimeout(() => {
      editedRow.removeClass('blink')
    }, 10000) // 10 segundos

    localStorage.clear()
  }
})

async function deleteEmployee(id, name) {
  const userConfirmed = confirm(
    `Você tem certeza que deseja desativar o funcionário id: ${id}, ${name}?`
  )

  if (userConfirmed) {
    try {
      const response = await fetch(`http://localhost:3333/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: id.toString(),
      })

      if (response.ok) {
        alert(`O funcionário id: ${id}, ${name} foi desativado.`)
      } else {
        const data = await response.json()
        alert(`Ocorreu um erro: ${data.error}`)
      }
    } catch (error) {
      console.error(error)
      alert(`Ocorreu um erro ao tentar acessar o servidor: ${error}`)
    } finally {
      location.reload()
    }
  }
}

async function editEmployee(id) {
  try {
    const response = await fetch(`http://localhost:3333/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados do funcionário')
    }

    const data = await response.json()

    //armazenando os dados no localStorage
    localStorage.setItem('employeeData', JSON.stringify(data))

    window.location.href = '../user-update/upd_form.html'
  } catch (error) {
    console.error(error)
    alert(`Ocorreu um erro ao tentar acessar o servidor: ${error}`)
  }
}
