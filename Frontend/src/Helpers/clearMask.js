//limpando caracteres especiais da string
export function removeSpecialChar(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "")
}
