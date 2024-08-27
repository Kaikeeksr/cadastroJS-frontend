export function emailValidator(email) {
  // Expressão regular para validar e-mail
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (emailPattern.test(email)) {
    return { isValid: true, msg: 'ok' }
  } else {
    return { isValid: false, msg: 'Insira um e-mail válido' }
  }
}
