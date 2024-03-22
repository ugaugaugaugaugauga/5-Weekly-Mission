import register from '../../../action/register.js'
import redirectHomePage from '../../../utils/redirect-home-page.js'
import displayInputError from '../../../ui/display-input-error.js'

import {
  confirmPasswordEl,
  confirmPasswordErrorEl,
  emailEl,
  emailErrorEl,
  passwordEl,
  passwordErrorEl,
} from '../get-elements.js'
import validateEmail from '../utils/validate-email.js'
import validatePassword from '../utils/validate-password.js'
import validateConfirmPassword from '../utils/validate-confirm-password.js'

export default async function handleSubmit(e) {
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

  const isValidConfirmPassword = validateConfirmPassword(
    passwordEl,
    confirmPasswordEl,
  )

  if (!isValidConfirmPassword.success) {
    return displayInputError(
      confirmPasswordEl,
      confirmPasswordErrorEl,
      isValidConfirmPassword.message,
    )
  }

  const email = emailEl.value
  const password = passwordEl.value

  const isRegistered = await register(email, password)
  if (!isRegistered.success) {
    return displayInputError(emailEl, emailErrorEl, isRegistered.message)
  }

  redirectHomePage()
}
