import checkInput from './checkInput.js'
import { InputType } from '/type.js'

export default function attachFormValidation() {
  const inputEmail = document.getElementById('signIn-email')
  const inputPassword = document.getElementById('signIn-password')
  const email = 'test@codeit.com'
  const password = 'codeit101'

  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput('signIn-email', 'signIn-emailError', InputType.EMAIL)

    checkInput('signIn-password', 'signIn-passwordError', InputType.PASSWORD)

    const errors = document.querySelectorAll('.error-message')
    let hasError = false
    errors.forEach((error) => {
      if (error.textContent !== '') {
        hasError = true
      }
    })

    if (hasError) {
      return
    }

    if (inputEmail.value === email && inputPassword.value === password) {
      form.submit()
      window.location.href = '/folder'
      return
    }
  })
}
