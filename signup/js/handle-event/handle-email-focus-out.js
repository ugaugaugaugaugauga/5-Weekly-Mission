import displayInputError from '../../../ui/display-input-error.js'
import { emailEl, emailErrorEl } from '../get-elements.js'
import validateEmail from '../utils/validate-email.js'

export default function handleEmailFocusOut() {
  const { success, message } = validateEmail(emailEl)
  if (!success) {
    displayInputError(emailEl, emailErrorEl, message)
  }
  return null
}
