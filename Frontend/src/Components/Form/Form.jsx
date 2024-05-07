import { FormWrapper, CloseModalButton } from "./style"
import form_img from "../../Imgs/undraw_hiring_re_yk5n.svg"
import info_img from "../../Imgs/icons8-info.svg"
import { useRef, useState } from "react"
import { Cadastro } from "./JS/form"

export function Form() {
  //Estado para controlar se a dialog está aberta ou não
  const [dialogopen, setDialogOpen] = useState(false)

  //Referência
  const dialogRef = useRef(null)

  //Função para abrir/fechar a dialog
  function toggleDialog(open) {
    if (open) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
    setDialogOpen(open)
  }
  //MÁSCARA DO CPF
  const [cpf, setCpf] = useState("")
  const handleCpfChange = (event) => {
    let value = event.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2")
    setCpf(value)
  }

  //MÁSCARA DO TELEFONE
  const [tel, setTel] = useState("")
  const handleTelChange = (event) => {
    let value = event.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d{4})(\d)/, "$1-$2")
    setTel(value)
  }

  //MÁSCARA DO SALÁRIO
  const [payment, setPayment] = useState("")
  const handlePaymentChange = (event) => {
    let value = event.target.value
    value = value.replace(/\D/g, "") // remove any non-digit characters
    value = value.replace(/(\d)(\d{2})$/, "$1,$2") // adds a comma before the last two digits
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") // adds a dot every three digits before the comma
    setPayment(`R$ ${value}`)
  }
  return (
    <>
      <FormWrapper>
        <div className="container">
          <div className="form-img">
            <img src={form_img} alt=" "></img>
          </div>
          <div className="form">
            <dialog ref={dialogRef}>
              <h1>Atenção!</h1>

              <p>
                Esse é um projeto de portifólio, porém as funcionalidades da
                aplicação permitem a gravação de dados dentro de um servidor
                real.
              </p>
              <p>
                As informações passadas no cadastro serão guardadas dentro de um
                banco de dados em nuvem. Evite colocar dados sensíveis ou dados
                reais nessa aplicação.
              </p>
              <br />
              <CloseModalButton
                className="closeModal"
                onClick={() => toggleDialog(false)}
              >
                Entendi!
              </CloseModalButton>
            </dialog>
            <form action="#">
              {/* CABEÇALHO DO FORMULÁRIO*/}
              <div className="form-header">
                <div className="title">
                  <h1>Cadastro</h1>
                </div>
                <div className="info_button">
                  <button onClick={() => toggleDialog(true)}>
                    <img src={info_img} className="info" />
                  </button>
                </div>
              </div>
              <div>
                {/* INPUTS */}
                <div className="input-group">
                  <div className="input-box">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite o nome do funcionário"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="cpf">CPF</label>
                    <input
                      mask="999.999.999-99"
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite o CPF do funcionário"
                      maxLength="14"
                      required
                      value={cpf}
                      onChange={handleCpfChange}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite o e-mail do funcionário"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="tel">Telefone</label>
                    <input
                      type="text"
                      name="tel"
                      id="tel"
                      placeholder="(XX) XXXX-XXXX"
                      maxLength="15"
                      required
                      value={tel}
                      onChange={handleTelChange}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="payment">Salário</label>
                    <input
                      type="text"
                      name="payment"
                      id="payment"
                      placeholder="Digite o salário do funcionário"
                      required
                      maxLength="20"
                      value={payment}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="departament">Setor</label>
                    <select name="departament" id="departament">
                      <option value="design">design</option>
                      <option value="logistics">Logística</option>
                      <option value="support">Suporte</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="gender-group">
                  <div className="gender-title">Gênero</div>
                  <div className="gender-inputs">
                    <input type="radio" name="gender" id="gender" value="F" />
                    <label htmlFor="female">Feminino</label>
                  </div>
                  <div className="gender-inputs">
                    <input type="radio" name="gender" id="gender" value="M" />
                    <label htmlFor="male">Masculino</label>
                  </div>
                  <div className="gender-inputs">
                    <input type="radio" name="gender" id="gender" value="O" />
                    <label htmlFor="other">Outro</label>
                  </div>
                  <div className="gender-inputs">
                    <input type="radio" name="gender" id="gender" value="N" />
                    <label htmlFor="none">Preferiu não dizer</label>
                  </div>
                </div>
              </div>
              <div className="submit-button">
                <button type="submit-button" onClick={Cadastro}>
                  Confirmar
                </button>
              </div>
              <div className="msg"></div>
            </form>
          </div>
        </div>
      </FormWrapper>
    </>
  )
}
