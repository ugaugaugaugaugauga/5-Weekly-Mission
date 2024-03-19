import displayInputError from '../../../ui/display-input-error.js'
import hideInputError from '../../../ui/hide-input-error.js'
import {
  confirmPasswordEl,
  confirmPasswordErrorEl,
  passwordEl,
} from '../get-elements.js'
import validateConfirmPassword from '../utils/validate-confirm-password.js'

export default function handleKeyUp() {
  const { success, message } = validateConfirmPassword(
    passwordEl,
    confirmPasswordEl,
  )
  if (!success) {
    displayInputError(confirmPasswordEl, confirmPasswordErrorEl, message)
    return
  }
  hideInputError(confirmPasswordEl, confirmPasswordErrorEl)
}
