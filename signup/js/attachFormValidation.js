import { InputType } from '/type.js'
import checkInput from './checkInput.js'

export default function attachFormValidation() {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput('signup-email', 'signup-emailError', InputType.EMAIL)

    checkInput('signup-password', 'signup-passwordError', InputType.PASSWORD)

    checkInput(
      'signup-passwordConfirm',
      'signup-passwordConfirmError',
      InputType.PASSWORD_CONFIRM,
    )

    const errors = document.querySelectorAll('.error-message')
    let hasError = false
    errors.forEach((error) => {
      if (error.textContent !== '') {
        hasError = true
      }
    })

    if (!hasError) {
      form.submit()
    }
  })
}
