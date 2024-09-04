//limpando caracteres especiais da string
function removeSpecialChar(str) {
  return str.replace(/[^\d]/g, '')
}

export { removeSpecialChar }
