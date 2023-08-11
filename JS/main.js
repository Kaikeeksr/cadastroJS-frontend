const nameInput = document.querySelector("#name")
const sectionInput = document.querySelector("#section")
const paymentInput = document.querySelector("#payment")
const submitButton = document.querySelector("#submitButton")

function cadastro() {
  let nome = nameInput.value
  let setor = sectionInput.value
  let pagamento = paymentInput.value
  const Lista = [nome, setor, pagamento]
  console.log(Lista)
  
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  cadastro()
})
