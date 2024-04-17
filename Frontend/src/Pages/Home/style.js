import styled from "styled-components"

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #e6e6fa;
  margin-bottom: 3rem;
`
export const MainWrapper = styled.main`
  overflow: hidden;

  header {
    position: fixed;
    width: 95%;
    padding: 10px 40px;
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
  section {
    padding: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2%;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 5%;
    padding: 5% 10px;
    gap: 0.2rem;
  }

  .right img {
    width: 50vh;
    height: 500px;
    margin-bottom: 1rem;
    padding: 5% 10px;
  }
`
