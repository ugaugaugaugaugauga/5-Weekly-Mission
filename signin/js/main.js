import attachFormValidation from './attachFormValidation.js'
import attachInputValidation from './attachInputValidation.js'
import attachTogglePasswordView from './attachTogglePasswordView.js'
import { InputType } from '/type.js'

function onDocumentReady() {
  attachInputValidation('signIn-email', 'signIn-emailError', InputType.EMAIL)
  attachInputValidation(
    'signIn-password',
    'signIn-passwordError',
    InputType.PASSWORD,
  )
  attachFormValidation()
  attachTogglePasswordView()
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
