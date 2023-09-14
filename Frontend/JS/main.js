import { removeSpecialChar } from "./helpers/clearMask.js"

//const form = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const cpfInput = document.querySelector("#cpf")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#tel")
const paymentInput = document.querySelector("#payment")
const departmentInput = document.querySelector("#department")
const genderInputs = document.querySelectorAll("input[name='gender']")
const submitButton = document.querySelector("#submit-button")

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
departmentInput.value = "" //inicia o select setor vazio

// máscara CPF
cpfInput.addEventListener("keypress", () => {
  let inputLength = cpfInput.value.length

  if (inputLength === 3 || inputLength === 7) {
    cpfInput.value += "."
  } else if (inputLength === 11) {
    cpfInput.value += "-"
  }
})

function cadastro() {
  const nome = nameInput.value
  const cpf = removeSpecialChar(cpfInput.value)
  const email = emailInput.value
  const tel = removeSpecialChar(telInput.value)
  const setor = departmentInput.value
  const pagamento = removeSpecialChar(paymentInput.value)
  const selectedGender = () => {
    let selected = document.querySelector("input[name='gender']:checked").value
    return selected
  }
  const funcionario = {
    employee_id: null,
    employee_name: nome,
    employee_cpf: cpf,
    employee_email: email,
    employee_tel: tel,
    employee_departament: setor,
    employee_gender: selectedGender(),
    employee_wage: pagamento
  }
  console.log(funcionario)

  // fazendo um POST com os dados do funcionário no body
  fetch("http://localhost:3333/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(funcionario)
  })
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  //exibindo alert se os inputs estiverem vazios ao 'enviar dados'
  if (
    nameInput.value === "" ||
    departmentInput.value === "" ||
    paymentInput.value === ""
  ) {
    (errorMessage.textContent = "Por favor preencha todos os campos!"),
      (errorMessage.classList = "error")
  } else {
    cadastro()

    //limpando os dados do formulário
    nameInput.value = ""
    cpfInput.value = ""
    emailInput.value = ""
    telInput.value = ""
    departmentInput.value = ""
    paymentInput.value = ""
    genderInputs.value = ""

    //exibindo um alerta de sucesso
    alert("Dados cadastrados com sucesso!")
  }
})
