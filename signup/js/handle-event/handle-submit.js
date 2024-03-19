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
import register from '../../../api/register.js'

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
  // 이후 db 조회 이후 가입 절차
  const isRegistered = register(email, password)
  if (!isRegistered.success && isRegistered.error == 'email') {
    return displayInputError(emailEl, emailErrorEl, isRegistered.message)
  }

  if (isRegistered.success) {
    window.location.href = '/folder'
  }
}
