import handleEmailFocusOut from './handle-event/handle-email-focus-out.js'
import handleEmailFocusIn from './handle-event/handle-email-focus-in.js'
import handlePasswordFocusOut from './handle-event/handle-password-focus-out.js'
import handlePasswordFocusIn from './handle-event/handle-password-focus-in.js'
import handleSubmit from './handle-event/handle-submit.js'
import {
  showPasswordAndEyeOn,
  hidePasswordAndEyeOff,
} from './handle-event/handle-toggle-icon.js'

const email = document.getElementById('signIn-email')
const password = document.getElementById('signIn-password')
const form = document.querySelector('form')
const eyeOffIcon = document.getElementById('eye-off')
const eyeOnIcon = document.getElementById('eye-on')

function onDocumentReady() {
  email.addEventListener('focusout', handleEmailFocusOut)
  email.addEventListener('focusin', handleEmailFocusIn)
  password.addEventListener('focusout', handlePasswordFocusOut)
  password.addEventListener('focusin', handlePasswordFocusIn)
  form.addEventListener('submit', handleSubmit)
  eyeOffIcon.addEventListener('click', showPasswordAndEyeOn)
  eyeOnIcon.addEventListener('click', hidePasswordAndEyeOff)
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
