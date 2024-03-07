import attachFormValidation from './attachFormValidation.js'
import attachInputValidation from './attachInputValidation.js'
import { InputType } from '/type.js'

function onDocumentReady() {
  attachInputValidation('signup-email', 'signup-emailError', InputType.EMAIL)
  attachInputValidation(
    'signup-password',
    'signup-passwordError',
    InputType.PASSWORD,
  )
  attachInputValidation(
    'signup-passwordConfirm',
    'signup-passwordConfirmError',
    InputType.PASSWORD_CONFIRM,
  )

  attachFormValidation()
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
