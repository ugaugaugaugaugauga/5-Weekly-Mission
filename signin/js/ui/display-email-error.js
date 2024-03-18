import validateEmail from '../utils/validate-email.js'

export default function displayEmailError() {
  const email = document.getElementById('signIn-email')
  const error = document.getElementById('signIn-emailError')

  const { success, message } = validateEmail(email.value)

  if (!success) {
    email.classList.add('input-error')
    error.textContent = message
    return true
  }

  email.classList.remove('input-error')
  error.textContent = message
}
