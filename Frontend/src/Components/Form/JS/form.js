import { useState } from "react"
import { removeSpecialChar } from "../../../Helpers/clearMask"

export function Form() {
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [setor, setSetor] = useState("")
  const [salario, setSalario] = useState("")
  const [gender, setGender] = useState("")

  const Cadastro = async (e) => {
    e.preventDefault()

    const funcionario = {
      employee_id: null,
      employee_name: nome,
      employee_cpf: removeSpecialChar(cpf),
      employee_email: email,
      employee_tel: removeSpecialChar(tel),
      employee_departament: setor,
      employee_gender: gender,
      employee_wage: removeSpecialChar(salario)
    }

    console.log(funcionario)
  }
}
//   const response = await fetch("https://your-endpoint.com", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(funcionario)
//   })

//   if (response.ok) {
//     console.log("Funcionario cadastrado com sucesso!")
//   } else {
//     console.log("Erro ao cadastrar funcionario.")
//   }
// }
