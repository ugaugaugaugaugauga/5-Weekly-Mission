import { emailEl, emailErrorEl } from '../get-element.js'
import hideInputError from '/ui/hide-input-error.js'

export default function handleEmailFocusIn() {
  hideInputError(emailEl, emailErrorEl)
}
