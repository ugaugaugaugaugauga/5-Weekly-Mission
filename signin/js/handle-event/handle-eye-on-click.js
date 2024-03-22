import showPassword from '../../../ui/show-password.js'
import toggleIcon from '../../../ui/toggle-icon.js'
import { eyeOffIconEl, eyeOnIconEl, passwordEl } from '../get-element.js'

export default function handleEyeOnIconClick() {
  showPassword(passwordEl, false)
  toggleIcon(eyeOffIconEl, eyeOnIconEl)
}
