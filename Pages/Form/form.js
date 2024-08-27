import { removeSpecialChar } from '../../helpers/clearMask.js'
import { emailValidator } from '../../helpers/emailValidator.js'
import { cpfValidator } from '../../helpers/cpfValidator.js'

$('.info-button').click(function () {
  $('#main-form').find('input').attr('disabled', true)
  $('#submit-button').attr('disabled', true)
  $('#department').attr('disabled', true)
  $('#infoModal').show()
})

$('#closeModal').click(function () {
  $('#main-form').find('input').attr('disabled', false)
  $('#submit-button').attr('disabled', false)
  $('#department').attr('disabled', false)
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

  const e_validator = emailValidator(email)
  const c_validator = cpfValidator(cpf)

  if (e_validator.isValid == false) {
    $('.error-msg').text(e_validator.msg).show()
    $('#submit-button').attr('disabled', false)
    return
  }

  if (c_validator.isValid == false) {
    $('.error-msg').text(c_validator.msg).show()
    $('#submit-button').attr('disabled', false)
    return
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
    $('.error-msg').text('Todos os campos são obrigatórios').show()
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

async function cadastro(funcionario) {
  try {
    const response = await fetch('http://localhost:3333/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario),
    })

    if (response.ok) {
      alert('Dados cadastrados com sucesso!')
    } else {
      const data = await response.json()
      alert(`Ocorreu um erro: ${data.error}`)
    }
  } catch (error) {
    console.error(error)
    alert(`Ocorreu um erro ao tentar acessar o servidor: ${error}`)
  } finally {
    $('.error-msg').hide()
    $('#main-form').trigger('reset')
    $('#submit-button').attr('disabled', false)
  }
}
