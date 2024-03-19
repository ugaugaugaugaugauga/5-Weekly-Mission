import login from '../../../action/login.js'
import {
  emailEl,
  emailErrorEl,
  passwordEl,
  passwordErrorEl,
} from '../get-element.js'
import displayInputError from '/ui/display-input-error.js'
import validateEmail from '../utils/validate-email.js'
import validatePassword from '../utils/validate-password.js'

export default async function handleSubmit(e) {
  e.preventDefault()
  const isValidEmail = validateEmail(emailEl)
  if (!isValidEmail.success) {
    displayInputError(emailEl, emailErrorEl, isValidEmail.message)
    return
  }

  const isValidPassword = validatePassword(passwordEl)

  if (!isValidPassword.success) {
    displayInputError(passwordEl, passwordErrorEl, isValidPassword.message)
    return
  }

  const email = emailEl.value
  const password = passwordEl.value
  const isLogin = await login(email, password)

  if (!isLogin.success) {
    displayInputError(emailEl, emailErrorEl, isLogin.message)
    return
  }

  window.location.href = '/folder'
}
