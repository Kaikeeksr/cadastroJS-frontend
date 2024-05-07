import { removeSpecialChar } from "../../../Helpers/clearMask"

export async function Cadastro() {
  const submitButton = document.querySelector("#submit")

  submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const nome = document.querySelector("#name").value
    const cpf = removeSpecialChar(document.querySelector("#cpf").value)
    const email = document.querySelector("#email").value
    const tel = document.querySelector("#tel").value
    const setor = document.querySelector("#departament").value
    const salario = document.querySelector("#payment").value
    const selectedGender = () => {
      let selected = document.querySelector(
        "input[name='gender']:checked"
      ).value
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
      employee_wage: salario
    }
    console.log(funcionario)
  })
}
