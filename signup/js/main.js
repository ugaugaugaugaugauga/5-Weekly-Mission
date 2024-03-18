import handleEmailFocusOut from './handle-event/handle-email-focus-out.js'
import handleEmailFocusIn from './handle-event/handle-email-focus-in.js'
import handlePasswordFocusOut from './handle-event/handle-password-focus-out.js'
import handlePasswordFocusIn from './handle-event/handle-password-focus-in.js'
import handleSubmit from './handle-event/handle-submit.js'
import {
  showPasswordAndEyeOn,
  hidePasswordAndEyeOff,
} from './handle-event/handle-toggle-icon.js'
import handleKeyUp from './handle-event/handle-key-up.js'

const email = document.getElementById('signup-email')
const password = document.getElementById('signup-password')
const passwordEyeOffIcon = document.getElementById('eye-off')
const passwordEyeOnIcon = document.getElementById('eye-on')
const confirmPasswordEyeOffIcon = document.getElementById('confirm-eye-off')
const confirmPasswordEyeOnIcon = document.getElementById('confirm-eye-on')
const confirmPassword = document.getElementById('signup-confirm-password')
const form = document.querySelector('form')

function onDocumentReady() {
  email.addEventListener('focusout', handleEmailFocusOut)
  email.addEventListener('focusin', handleEmailFocusIn)
  password.addEventListener('focusout', handlePasswordFocusOut)
  password.addEventListener('focusin', handlePasswordFocusIn)
  password.addEventListener('keyup', handleKeyUp)
  confirmPassword.addEventListener('keyup', handleKeyUp)
  form.addEventListener('submit', handleSubmit)
  passwordEyeOffIcon.addEventListener('click', () => {
    showPasswordAndEyeOn(password, passwordEyeOffIcon, passwordEyeOnIcon)
  })
  passwordEyeOnIcon.addEventListener('click', () => {
    hidePasswordAndEyeOff(password, passwordEyeOffIcon, passwordEyeOnIcon)
  })
  confirmPasswordEyeOffIcon.addEventListener('click', () => {
    showPasswordAndEyeOn(
      confirmPassword,
      confirmPasswordEyeOffIcon,
      confirmPasswordEyeOnIcon,
    )
  })
  confirmPasswordEyeOnIcon.addEventListener('click', () => {
    hidePasswordAndEyeOff(
      confirmPassword,
      confirmPasswordEyeOffIcon,
      confirmPasswordEyeOnIcon,
    )
  })
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
