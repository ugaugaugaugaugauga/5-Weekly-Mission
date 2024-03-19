import handleEmailFocusOut from './handle-event/handle-email-focus-out.js'
import handleEmailFocusIn from './handle-event/handle-email-focus-in.js'
import handlePasswordFocusOut from './handle-event/handle-password-focus-out.js'
import handlePasswordFocusIn from './handle-event/handle-password-focus-in.js'
import handleSubmit from './handle-event/handle-submit.js'
import handleKeyUp from './handle-event/handle-key-up.js'
import {
  confirmPasswordEl,
  confirmPasswordEyeOffIconEl,
  confirmPasswordEyeOnIconEl,
  emailEl,
  formEl,
  passwordEl,
  passwordEyeOffIconEl,
  passwordEyeOnIconEl,
} from './get-elements.js'
import handleEyeOffIconClick from './handle-event/handle-eye-off-click.js'
import handleEyeOnIconClick from './handle-event/handle-eye-on-click.js'
import handleConfirmEyeOffIconClick from './handle-event/handle-confirm-eye-off-click.js'
import handleConfirmEyeOnIconClick from './handle-event/handle-confirm-eye-on-click.js'

function onDocumentReady() {
  emailEl.addEventListener('focusout', handleEmailFocusOut)
  emailEl.addEventListener('focusin', handleEmailFocusIn)
  passwordEl.addEventListener('focusout', handlePasswordFocusOut)
  passwordEl.addEventListener('focusin', handlePasswordFocusIn)
  passwordEl.addEventListener('keyup', handleKeyUp)
  confirmPasswordEl.addEventListener('keyup', handleKeyUp)
  formEl.addEventListener('submit', handleSubmit)
  passwordEyeOffIconEl.addEventListener('click', handleEyeOffIconClick)
  passwordEyeOnIconEl.addEventListener('click', handleEyeOnIconClick)
  confirmPasswordEyeOffIconEl.addEventListener(
    'click',
    handleConfirmEyeOffIconClick,
  )
  confirmPasswordEyeOnIconEl.addEventListener(
    'click',
    handleConfirmEyeOnIconClick,
  )
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
