//limpando caracteres especiais da string
function removeSpecialChar(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "")
}

export {removeSpecialChar}