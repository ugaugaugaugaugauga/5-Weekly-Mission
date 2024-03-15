import displayConfirmPasswordError from '../ui/display-confirm-password-error.js'
import displayEmailError from '../ui/display-email-error.js'
import displayPasswordError from '../ui/display-password-error.js'

export default function handleSubmit(e) {
  e.preventDefault()

  const form = document.getElementById('signup-form')

  const isEmailValidate = !displayEmailError()
  const isPasswordValidate = !displayPasswordError()
  const isConfirmPasswordValidate = !displayConfirmPasswordError()

  console.log(isEmailValidate, isPasswordValidate, isConfirmPasswordValidate)
  if (!isEmailValidate || !isPasswordValidate || !isConfirmPasswordValidate)
    return

  // 이후 db 조회 이후 가입 절차

  form.submit()
  window.location.href = '/folder'
}
