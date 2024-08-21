import { removeSpecialChar } from "../../helpers/clearMask.js"

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
submitButton.addEventListener("click", async (e) => {
  e.preventDefault()

  const nome = $('#name').val()
  const cpf = $('#cpf').val()
  const email = $('#email').val()
  const tel = $('#tel').val()
  const setor = $('#departament').val()
  const pagamento = $('#payment').val()
  const selectedGender = () => {
    const selected = document.querySelector("input[name='gender']:checked");
    return selected ? selected.value : null;
  }

  const funcionario = {
    employee_id: null,
    employee_name: nome,
    employee_cpf: removeSpecialChar(cpf),
    employee_email: email,
    employee_tel: removeSpecialChar(tel),
    employee_departament: setor,
    employee_gender: selectedGender(),
    employee_wage: removeSpecialChar(pagamento)
  }

  console.log(funcionario)

  //exibindo alert se os inputs estiverem vazios ao 'enviar dados'
  if ([nome, email].includes(Boolean)) {
    errorMessage.textContent = "Por favor preencha todos os campos!"
    errorMessage.classList = "error"
    return
  } 

  await cadastro(funcionario)
})

function clearFields () {
  $('#name').val('')
  $('#cpf').val('')
  $('#email').val('')
  $('#tel').val('')
  $('#depatament').val('')
  $('#payment').val('')
}

async function cadastro(funcionario) {  
  try {
    const response = await fetch("http://localhost:3333/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(funcionario)
    })

    alert("Dados cadastrados com sucesso!")

    return await response.JSON()
  } catch (error) {
    console.error(error)
    alert(`Ocorreu um erro ao tentar acessar o servidor: ${error}`)
  } finally {
    clearFields()
  }
}