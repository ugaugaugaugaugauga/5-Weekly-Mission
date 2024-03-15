import validateConfirmPassword from '../utils/validate-confirm-password.js'

export default function displayConfirmPasswordError() {
  const password = document.getElementById('signup-password')
  const confirmPassword = document.getElementById('signup-confirm-password')
  const error = document.getElementById('signup-confirm-password-error')

  const { success, message } = validateConfirmPassword(
    password.value,
    confirmPassword.value,
  )

  if (!success) {
    confirmPassword.classList.add('input-error')
    error.textContent = message
    return true
  }

  confirmPassword.classList.remove('input-error')
  error.textContent = message
}
