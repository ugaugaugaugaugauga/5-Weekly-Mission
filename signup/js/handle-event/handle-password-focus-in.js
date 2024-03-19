import hideInputError from '../../../ui/hide-input-error.js'
import { passwordEl, passwordErrorEl } from '../get-elements.js'

export default function handlePasswordFocusIn() {
  hideInputError(passwordEl, passwordErrorEl)
}
