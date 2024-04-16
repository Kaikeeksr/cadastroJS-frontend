import React from "react"
import { StyledButton } from "./style"
import { useNavigate } from "react-router-dom"

export function Button({ children, href }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (href) {
      navigate(href)
    }
  }

  return <StyledButton onClick={handleClick}>{children}</StyledButton>
}
