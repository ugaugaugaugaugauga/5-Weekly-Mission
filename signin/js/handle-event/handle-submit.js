import login from '/api/login.js'
import {
  emailEl,
  emailErrorEl,
  passwordEl,
  passwordErrorEl,
} from '../get-element.js'
import displayInputError from '/ui/display-input-error.js'
import validateEmail from '../utils/validate-email.js'
import validatePassword from '../utils/validate-password.js'

export default function handleSubmit(e) {
  e.preventDefault()

  const isValidEmail = validateEmail(emailEl)

  if (!isValidEmail.success) {
    return displayInputError(emailEl, emailErrorEl, isValidEmail.message)
  }

  const isValidPassword = validatePassword(passwordEl)

  if (!isValidPassword.success) {
    return displayInputError(
      passwordEl,
      passwordErrorEl,
      isValidPassword.message,
    )
  }

  const email = emailEl.value
  const password = passwordEl.value

  const isLogin = login(email, password)

  if (!isLogin.success && isLogin.error === 'email') {
    displayInputError(emailEl, emailErrorEl, isLogin.message)
  }
  if (!isLogin.success && isLogin.error === 'password') {
    displayInputError(passwordEl, passwordErrorEl, isLogin.message)
  }
  if (isLogin.success) {
    window.location.href = '/folder'
  }
}
