import handleEmailFocusIn from './handle-event/handle-email-focus-in.js'
import handlePasswordFocusOut from './handle-event/handle-password-focus-out.js'
import handlePasswordFocusIn from './handle-event/handle-password-focus-in.js'
import handleSubmit from './handle-event/handle-submit.js'
import handleEmailFocusOut from './handle-event/handle-email-focus-out.js'
import handleEyeOffIconClick from './handle-event/handle-eye-off-click.js'
import handleEyeOnIconClick from './handle-event/handle-eye-on-click.js'

import {
  emailEl,
  eyeOffIconEl,
  eyeOnIconEl,
  formEl,
  passwordEl,
} from './get-element.js'

function checkTokenAndRedirect() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    window.location.href = '/folder'
  }
}

checkTokenAndRedirect()

function onDocumentReady() {
  emailEl.addEventListener('focusout', handleEmailFocusOut)
  emailEl.addEventListener('focusin', handleEmailFocusIn)
  passwordEl.addEventListener('focusout', handlePasswordFocusOut)
  passwordEl.addEventListener('focusin', handlePasswordFocusIn)
  formEl.addEventListener('submit', handleSubmit)
  eyeOffIconEl.addEventListener('click', handleEyeOffIconClick)
  eyeOnIconEl.addEventListener('click', handleEyeOnIconClick)
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
