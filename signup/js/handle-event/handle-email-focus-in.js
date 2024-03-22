import hideInputError from '../../../ui/hide-input-error.js'
import { emailEl, emailErrorEl } from '../get-elements.js'

export default function handleEmailFocusIn() {
  hideInputError(emailEl, emailErrorEl)
}
