export function cpfValidator(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, '')

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return { isValid: false, msg: 'CPF inválido: deve conter 11 dígitos.' }
  }

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1+$/.test(cpf)) {
    return { isValid: false, msg: 'CPF inválido: todos os dígitos são iguais.' }
  }

  /*
   // Validação dos dígitos verificadores
   let sum
   let remainder

   
   // Valida o primeiro dígito verificador 
   sum = 0
   for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i)
   }
   remainder = (sum * 10) % 11
   if (remainder === 10 || remainder === 11) remainder = 0
   if (remainder !== parseInt(cpf.substring(9, 10))) {
      alert('CPF inválido: primeiro dígito verificador incorreto.')
      return false
   }

   // Valida o segundo dígito verificador
   sum = 0
   for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i)
   }
   remainder = (sum * 10) % 11
   if (remainder === 10 || remainder === 11) remainder = 0
   if (remainder !== parseInt(cpf.substring(10, 11))) {
      alert('CPF inválido: segundo dígito verificador incorreto.')
      return false
   }
    */

  return true
}
