import { passwordEl, passwordErrorEl } from '../get-element.js'
import hideInputError from '/ui/hide-input-error.js'

export default function handlePasswordFocusIn() {
  hideInputError(passwordEl, passwordErrorEl)
}
