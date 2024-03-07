import checkInput from './checkInput.js'
export default function attachInputValidation(inputId, errorId, type) {
  const input = document.getElementById(inputId)

  input.addEventListener('focusout', () => checkInput(inputId, errorId, type))
}
