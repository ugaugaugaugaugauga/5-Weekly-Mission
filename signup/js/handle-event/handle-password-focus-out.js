import displayInputError from '../../../ui/display-input-error.js'
import { passwordEl, passwordErrorEl } from '../get-elements.js'
import validatePassword from '../utils/validate-password.js'

export default function handlePasswordFocusOut() {
  const { success, message } = validatePassword(passwordEl)
  if (!success) {
    displayInputError(passwordEl, passwordErrorEl, message)
  }
  return null
}
