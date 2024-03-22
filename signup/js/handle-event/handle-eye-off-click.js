import showPassword from '../../../ui/show-password.js'
import toggleIcon from '../../../ui/toggle-icon.js'
import {
  passwordEl,
  passwordEyeOffIconEl,
  passwordEyeOnIconEl,
} from '../get-elements.js'

export default function handleEyeOffIconClick() {
  showPassword(passwordEl, true)
  toggleIcon(passwordEyeOnIconEl, passwordEyeOffIconEl)
}
