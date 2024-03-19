import hideInputError from '../../../ui/hide-input-error.js'
import { confirmPasswordEl, confirmPasswordErrorEl } from '../get-elements.js'

export default function handleConfirmPasswordFocusIn() {
  hideInputError(confirmPasswordEl, confirmPasswordErrorEl)
}
