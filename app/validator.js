class Validator {
  constructor(passwords){
    this.passwords = passwords.split("\n")
    this.errorMessages = ''
  }

  execute(){
    let input = document.getElementById('password-value')
    const value = input.value
    let result = this.isValid(value)
    const message = this.parseResultMessage(result)
    let paragraph = document.getElementById("message")
    this.errorMessages = ''
    paragraph.innerHTML = ''
    input.value = ''
    const text = document.createTextNode(`${message}`)
    paragraph.appendChild(text)
  }

  parseResultMessage(result){
    if (result) {
      return 'Password is Valid!'
    }
    else {
      return this.errorMessages
    }
  }

  isValid(value){
    return (
      this.isValidCharacterLength(value) &&
      this.isOnlyASCIICharacters(value)  &&
      this.isNotCommonPassword(value)
    )
  }

  isValidCharacterLength(value){
    const result = value.length >= 8 && value.length <= 64
    if (!result) {
      this.addErrorMessage('Password length must be between 8 and 64 characters')
    }
    return result
  }

  isOnlyASCIICharacters(value){
    const ascii = /^[ -~\t\n\r]+$/
    const result = ascii.test(value)
    if (!result) {
      this.addErrorMessage('Password must contain only ASCII characters')
    }
    return result
  }

  isNotCommonPassword(value){
    const result = !this.passwords.includes(value)
    if (!result) {
      this.addErrorMessage('Password must be more unique')
    }
    return result
  }

  addErrorMessage(errorMessage){
    this.errorMessages += errorMessage
  }
}

module.exports = Validator
