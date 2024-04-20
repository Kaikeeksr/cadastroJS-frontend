import styled from "styled-components"

export const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8e89f6;

  .container {
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
  }

  .form-img {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fde3a7d7;
    padding: 1rem;

    img {
      width: 31rem;
    }
  }

  .form {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;

    .form-header {
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-between;

      h1:after {
        content: "";
        display: block;
        width: 5rem;
        height: 0.3rem;
        background-color: #6c63ff;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
      }
      button {
        margin-left: 15px;
        margin-bottom: 15px;
        border: none;
        color: #fff;
        background-color: #6c63ff;
        padding: 0.4rem 1rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: transparent;
        border: none;
      }
      img {
        cursor: pointer;
        width: 25px;
        height: 30px;
      }
    }
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around; /* Adicione esta linha */
    padding: 1rem 0;

    .input-box {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.1rem;
      width: 48%; /* Ajuste a largura conforme necessário */

      input,
      select {
        margin: 0.6rem 0;
        padding: 0.8rem 1.2rem;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 6px #0000001c;
      }

      input:hover {
        background-color: #eeeeee75;
      }

      input:focus-visible {
        outline: 1px solid #6c63ff;
      }

      input::placeholder {
        color: #000000be;
      }

      label {
        font-size: 0.75rem;
        font-weight: 600;
        color: #000000c0;
      }
    }
  }

  .gender-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
  }

  .gender-group {
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 0.5rem;
  }

  gender-inputs {
    display: flex;
    align-items: center;

    input {
      margin-right: 0.35;
    }

    label {
      font-size: 0.81;
      font-weight: 600;
      color: #000000c0;
    }
  }

  .submit-button {
    button {
      width: 100%;
      margin-top: 3.5rem;
      border: none;
      background-color: #6c63ff;
      padding: 0.62rem;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #6b63fff1;
      }
    }

    a {
      text-decoration: none;
      font-size: 0.93rem;
      font-weight: 500;
      color: #fff;
    }
  }

  dialog {
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 1em rgb(0 0 0 / 0.3);
    width: 30%;

    h1 {
      padding: 10px;
      color: #6c63ff;
      text-align: center;
      font-family: "Inter", sans-serif;
    }

    p {
      padding: 20px;
      font-family: "Inter", sans-serif;
      text-align: justify;
      text-indent: 20px;
    }
  }

  //RESPONSIVIDADE
  @media screen and (max-width: 1330px) {
    .form-image {
      display: none;
    }
    .container {
      width: 50%;
    }
    .form {
      width: 100%;
    }
  }

  @media screen and (max-width: 1064px) {
    .container {
      width: 90%;
      height: auto;
    }
    .input-group {
      flex-direction: column;
      overflow-y: scroll;
      flex-wrap: nowrap;
      max-height: 10rem;
      padding-right: 5rem;
    }
    .gender_inputs {
      margin-top: 2rem;
    }
    .gender-group {
      flex-direction: column;
    }
    .gender_input {
      margin-top: 0.5rem;
    }
  }
`

export const CloseModalButton = styled.button`
  margin-left: 15px;
  margin-bottom: 15px;
  border: none;
  color: #fff;
  background-color: #6c63ff;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  cursor: pointer;
`
