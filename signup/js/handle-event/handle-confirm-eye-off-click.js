import showPassword from '../../../ui/show-password.js'
import toggleIcon from '../../../ui/toggle-icon.js'
import {
  confirmPasswordEl,
  confirmPasswordEyeOffIconEl,
  confirmPasswordEyeOnIconEl,
} from '../get-elements.js'

export default function handleConfirmEyeOffIconClick() {
  showPassword(confirmPasswordEl, true)
  toggleIcon(confirmPasswordEyeOnIconEl, confirmPasswordEyeOffIconEl)
}
