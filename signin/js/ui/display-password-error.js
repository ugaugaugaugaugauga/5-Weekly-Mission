import validatePassword from '/utils/validate-password.js'

export default function displayPasswordError() {
  const password = document.getElementById('signIn-password')
  const error = document.getElementById('signIn-passwordError')

  const { success, message } = validatePassword(password)

  if (!success) {
    password.classList.add('input-error')
    error.textContent = message
    return true
  }

  password.classList.remove('input-error')
  error.textContent = message
}
