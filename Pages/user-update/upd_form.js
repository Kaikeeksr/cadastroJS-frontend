import { removeSpecialChar } from '../../helpers/clearMask.js'
import { emailValidator } from '../../helpers/emailValidator.js'
import { cpfValidator } from '../../helpers/cpfValidator.js'

//RECUPERANDO OS DADOS DO FUNCIONARIO A PARTIR DO LOCALSTORAGE
const employeeData = JSON.parse(localStorage.getItem('employeeData'))

if (employeeData) {
  /* 
    Colocando as máscaras diretamente no valor com regex 
    pq a máscara do jquery só está funcionando quando o campo é digitado
  */
  const maskedCpf = employeeData.e_cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4'
  )

  const cleanedTel = employeeData.e_tel.replace(/\s+/g, '')
  const maskedTel = cleanedTel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

  const maskedPayment = employeeData.e_wage
    .replace(/\D/g, '') // Remove tudo que não é dígito
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    .replace(/^/, 'R$ ')

  $('#name').val(employeeData.e_name)
  $('#cpf').val(maskedCpf)
  $('#email').val(employeeData.e_email)
  $('#tel').val(maskedTel)
  $('#payment').val(maskedPayment)
  $('#department').val(employeeData.e_departament)
  $(`input[name="gender"][value="${employeeData.e_gender}"]`).prop(
    'checked',
    true
  )
}

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
      e_id: employeeData.e_id,
      e_name: nome,
      e_cpf: removeSpecialChar(cpf),
      e_email: email,
      e_tel: removeSpecialChar(tel),
      e_departament: setor,
      e_gender: selectedGender(),
      e_wage: removeSpecialChar(pagamento),
    }
    console.log(funcionario)
    await update(funcionario)
  }
})

async function update(funcionario) {
  try {
    const response = await fetch(
      `http://localhost:3333/user/update/${funcionario}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(funcionario),
      }
    )

    if (response.ok) {
      alert('Dados atualizados com sucesso!')
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
    localStorage.setItem('editedEmployeeID', JSON.stringify(employeeData.e_id))
    window.location.href = '../User-list/user-list.html'
  }
}
