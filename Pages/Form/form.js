import { removeSpecialChar } from '../../helpers/clearMask.js'

$('.info-button').click(function () {
  $('#infoModal').show()
})

$('#closeModal').click(function () {
  $('#infoModal').hide()
})

//const errorMessage = document.querySelector(".msg")

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', async (e) => {
  e.preventDefault()

  $('#submit-button').attr('disabled', true)

  const nome = $('#name').val().trim()
  const cpf = $('#cpf').val().trim()
  const email = $('#email').val().trim()
  const tel = $('#tel').val().trim()
  const setor = $('#department').val().trim()
  const pagamento = $('#payment').val().trim()
  const selectedGender = () => {
    const selected = document.querySelector("input[name='gender']:checked")
    return selected ? selected.value : null
  }

  //O método some() verifica se pelo menos um elemento do array satisfaz uma determinada condição.
  const has_falsy_value = [
    nome,
    cpf,
    email,
    tel,
    setor,
    pagamento,
    selectedGender(),
  ].some((item) => !item)

  if (has_falsy_value) {
    alert('Todos os campos são obrigatório')
    $('#submit-button').attr('disabled', false)
    return
  } else {
    const funcionario = {
      employee_id: null,
      employee_name: nome,
      employee_cpf: removeSpecialChar(cpf),
      employee_email: email,
      employee_tel: removeSpecialChar(tel),
      employee_departament: setor,
      employee_gender: selectedGender(),
      employee_wage: removeSpecialChar(pagamento),
    }
    console.log(funcionario)
    await cadastro(funcionario)
  }
})

function clearFields() {
  $('#main-form').trigger('reset')
}

async function cadastro(funcionario) {
  try {
    const response = await fetch('http://localhost:3333/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario),
    })

    alert('Dados cadastrados com sucesso!')

    return await response.JSON()
  } catch (error) {
    console.error(error)
    alert(`Ocorreu um erro ao tentar acessar o servidor: ${error}`)
  } finally {
    clearFields()
    $('#submit-button').attr('disabled', false)
  }
}
