import { FormWrapper, CloseModalButton } from "./style"
import form_img from "../../Imgs/undraw_hiring_re_yk5n.svg"
import info_img from "../../Imgs/icons8-info.svg"
import { useRef, useState } from "react"

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

  return (
    <>
      <FormWrapper>
        <body>
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
                  As informações passadas no cadastro serão guardadas dentro de
                  um banco de dados em nuvem. Evite colocar dados sensíveis ou
                  dados reais nessa aplicação.
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
                      <label for="name">Nome</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite o nome do funcionário"
                        required
                      />
                    </div>
                    <div class="input-box">
                      <label for="cpf">CPF</label>
                      <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="Digite o CPF do funcionário"
                        maxlength="14"
                        required
                      />
                    </div>
                    <div class="input-box">
                      <label for="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o e-mail do funcionário"
                        required
                      />
                    </div>
                    <div class="input-box">
                      <label for="tel">Telefone</label>
                      <input
                        type="text"
                        name="tel"
                        id="tel"
                        placeholder="(XX) XXXX-XXXX"
                        required
                      />
                    </div>
                    <div class="input-box">
                      <label for="payment">Salário</label>
                      <input
                        type="text"
                        name="payment"
                        id="payment"
                        placeholder="Digite o salário do funcionário"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <label for="departament">Setor</label>
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
                      <label for="female">Feminino</label>
                    </div>
                    <div className="gender-inputs">
                      <input type="radio" name="gender" id="gender" value="M" />
                      <label for="male">Masculino</label>
                    </div>
                    <div className="gender-inputs">
                      <input type="radio" name="gender" id="gender" value="O" />
                      <label for="other">Outro</label>
                    </div>
                    <div className="gender-inputs">
                      <input type="radio" name="gender" id="gender" value="N" />
                      <label for="none">Preferiu não dizer</label>
                    </div>
                  </div>
                </div>
                <div className="submit-button">
                  <button type="submit-button">Confirmar</button>
                </div>
                <div className="msg"></div>
              </form>
            </div>
          </div>
        </body>
      </FormWrapper>
    </>
  )
}
