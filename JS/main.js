let id_global = 0
const lista_funcionario = new Set([])

const form = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const sectionInput = document.querySelector("#section")
const paymentInput = document.querySelector("#payment")
const submitButton = document.querySelector("#submitButton")

const errorMessage = document.querySelector(".msg")

function cadastro(id_global) {
  const nome = nameInput.value
  const setor = sectionInput.value
  const pagamento = paymentInput.value
  const funcionario = {
    id: id_global,
    nome: nome,
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
  if (nameInput.value === "" || sectionInput.value === "" || paymentInput.value === '') {
    (errorMessage.textContent = "Por favor preencha todos os campos!"),
    (errorMessage.classList = "error")
  } else {
    id_global = id_global + 1
    cadastro(id_global)

    //limpando os dados do formulário
    nameInput.value = ""
    sectionInput.value = ""
    paymentInput.value = ""
  }
})
