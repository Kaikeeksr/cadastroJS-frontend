//limpando caracteres especiais da string
function removeSpecialChar(str) {
  let str_formatted

  str_formatted = str.replace(/[^a-zA-Z0-9 ]/g, "")
  str_formatted = str_formatted.replace(/\s+/g, '')
  return str_formatted
}

export {removeSpecialChar}