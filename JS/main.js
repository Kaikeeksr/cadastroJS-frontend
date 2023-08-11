let id_global = 0
const lista_funcionario = new Set([])

const nameInput = document.querySelector("#name")
const sectionInput = document.querySelector("#section")
const paymentInput = document.querySelector("#payment")
const submitButton = document.querySelector("#submitButton")

function cadastro() {
  let nome = nameInput.value
  let setor = sectionInput.value
  let pagamento = paymentInput.value
  const funcionario = {
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

  // id_global = id_global + 1
  cadastro(id_global)
})
