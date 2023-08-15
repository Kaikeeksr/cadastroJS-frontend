let id_global = 0
const lista_funcionario = new Set([])

const form = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const cpfInput = document.querySelector("#cpf")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#tel")
const paymentInput = document.querySelector("#payment")
const sectionInput = document.querySelector("#section")
const submitButton = document.querySelector("#submit-button")

const errorMessage = document.querySelector(".msg")

//máscara CPF
cpfInput.addEventListener("keypress", () => {
  let inputLength = cpfInput.value.length

  if (inputLength === 3 || inputLength === 7) {
    cpfInput.value += "."
  } else if (inputLength === 11) {
    cpfInput.value += "-"
  }
})

//Máscara telefone
// telInput.addEventListener("keypress", () =>{
//   let inputLength = telInput.value.length

//   if (inputLength === 0)
// })

function cadastro(id_global) {
  const nome = nameInput.value
  const cpf = cpfInput.value
  const email = emailInput.value
  const tel = telInput.value
  const setor = sectionInput.value
  const pagamento = paymentInput.value
  const funcionario = {
    id: id_global,
    nome: nome,
    cpf: cpf,
    email: email,
    telefone: tel,
    setor: setor,
    pagamento: pagamento
  }
  //criando uma copia do objeto funcionario e adicionando essa copia dentro de lista_funcionario
  lista_funcionario.add(Object.assign({}, funcionario))
  console.log(lista_funcionario)
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  //exibindo alert se os inputs estiverem vazios ao 'enviar dados'
  if (
    nameInput.value === "" ||
    sectionInput.value === "" ||
    paymentInput.value === ""
  ) {
    ;(errorMessage.textContent = "Por favor preencha todos os campos!"),
      (errorMessage.classList = "error")
  } else {
    id_global = id_global + 1
    cadastro(id_global)

    //limpando os dados do formulário
    nameInput.value = ""
    cpfInput.value = ""
    emailInput.value = ""
    telInput.value = ""
    sectionInput.value = ""
    paymentInput.value = ""
  }
})
