import React from "react"
import { Header } from "../../Components/Header/Header"
import { Button } from "../../Components/Button/Button"
import { Title, TitleDiv, Section } from "./style"

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ overflow: "hidden" }}>
        <Section>
          <TitleDiv>
            <Title>
              Experimente o nosso sistema de cadastro de funcionários!
            </Title>
          </TitleDiv>
          <Button href="#">Teste</Button>
        </Section>
      </main>
    </>
  )
}
