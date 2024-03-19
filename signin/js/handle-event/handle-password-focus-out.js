import { passwordEl, passwordErrorEl } from '../get-element.js'
import validatePassword from '../utils/validate-password.js'

export default function handlePasswordFocusOut() {
  const { success, message } = validatePassword(passwordEl)
  if (!success) {
    displayInputError(passwordEl, passwordErrorEl, message)
  }
  return null
}
