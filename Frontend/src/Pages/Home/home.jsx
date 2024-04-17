import React from "react"
import { Button } from "../../Components/Button/Button"
import { Title, MainWrapper } from "./style"
import home_img from "../../Imgs/home-img.svg"

export default function Home() {
  return (
    <>
      <MainWrapper>
        <body>
          <header>
            <nav>
              <a href="#" class="logo"></a>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="https://github.com/Kaikeeksr">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kaikerocha/">LinkedIn</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <section>
              <div className="left">
                <Title>
                  Experimente o nosso sistema de cadastro de funcionários!
                </Title>
                <Button href="#">Cadastre um funcionário!</Button>
                <Button href="#">Veja os cadastros</Button>
              </div>
              <div className="right">
                <img
                  src={home_img}
                  alt="uma ilustração de um avatar olhando currículos e avaliando-os"
                ></img>
              </div>
            </section>
          </main>
        </body>
      </MainWrapper>
    </>
  )
}
