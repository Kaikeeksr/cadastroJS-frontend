import { removeSpecialChar } from "./helpers/clearMask.js"
// MODAL
const infoButton = document.querySelector(".info-button")
const modal = document.querySelector("#infoModal")
const closeModal = document.querySelector("#closeModal")

infoButton.onclick = function () {
  modal.showModal()
}

closeModal.onclick = function () {
  modal.close()
}

const errorMessage = document.querySelector(".msg")
//departmentInput.value = "" //inicia o select setor vazio

const submitButton = document.querySelector("#submit-button")
submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  const nome = $('#name').val()
  const cpf = $('#cpf').val()
  const email = $('#email').val()
  const tel = $('#tel').val()
  const setor = $('#departament').val()
  const pagamento = $('#payment').val()
  //const selectedGender = () => {
    //let selected = document.querySelector("input[name='gender']:checked").value
    //return selected
  //}

  const funcionario = {
    employee_id: null,
    employee_name: nome,
    employee_cpf: removeSpecialChar(cpf),
    employee_email: email,
    employee_tel: removeSpecialChar(tel),
    employee_departament: setor,
    //employee_gender: selectedGender(),
    employee_wage: removeSpecialChar(pagamento)
  }

  console.log(funcionario)

  //exibindo alert se os inputs estiverem vazios ao 'enviar dados'
  if (
    nome === "" ||
    cpf === "" ||
    email === "" ||
    tel === "" ||
    setor === "" ||
    pagamento === "" 
    //genderInputs.value === ""
    //melhorar validação dps
  ) {
      (errorMessage.textContent = "Por favor preencha todos os campos!"),
      (errorMessage.classList = "error")
  } else {
    cadastro(funcionario)

    //limpando os dados do formulário
    $('#name').val('')
    $('#cpf').val('')
    $('#email').val('')
    $('#tel').val('')
    $('#depatament').val('')
    $('#payment').val('')
    //genderInputs.value = ""

    //exibindo um alerta de sucesso
    alert("Dados cadastrados com sucesso!")
  }
})

function cadastro(funcionario) {  
  // fazendo um POST com os dados do funcionário no body
  fetch("http://localhost:3333/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(funcionario)
  })
  return response.JSON()
  }