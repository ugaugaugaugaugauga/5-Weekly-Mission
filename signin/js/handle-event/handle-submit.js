import displayEmailError from '../ui/display-email-error.js'
import displayPasswordError from '../ui/display-password-error.js'

export default function handleSubmit(e) {
  e.preventDefault()

  const email = document.getElementById('signIn-email')
  const password = document.getElementById('signIn-password')

  const emailValue = email.value
  const passwordValue = password.value

  const testEmail = 'test@codeit.com'
  const testPassword = 'codeit101'

  const isEmailValidate = !displayEmailError()
  const isPasswordValidate = !displayPasswordError()

  console.log(isEmailValidate, isPasswordValidate)

  if (emailValue !== testEmail) {
    console.log('존재하지 않는 이메일')
    return
  }

  if (passwordValue !== testPassword) {
    console.log('패스워드가 일치하지 않습니다.')
    return
  }

  // db조회 이후 auth로직

  form.submit()
  window.location.href = '/folder'
}
