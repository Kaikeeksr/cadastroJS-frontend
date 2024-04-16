import styled from "styled-components"

export const HeaderWrapper = styled.header`
  header {
    position: relative;
    width: 96%;
    padding: 40px 60px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: auto; /* Adiciona margem à esquerda para alinhar à direita */
    flex-wrap: wrap; /* Adiciona quebra de linha */
  }

  nav ul li a {
    color: #fff;
    font-size: 1.2rem;
    border-bottom: 3px solid transparent;
    transition: all 0.5s;
  }

  nav ul li a:hover {
    border-bottom: 3px solid #fff;
  }
`
