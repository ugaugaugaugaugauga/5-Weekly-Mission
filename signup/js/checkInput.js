import { InputType } from '/type.js'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function checkInput(inputId, errorId, type) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(errorId)

  switch (type) {
    case InputType.EMAIL:
      if (input.value.trim() === '') {
        error.textContent = '이메일을 입력해 주세요.'
        input.style.border = '2px solid red'
        return
      }
      if (!emailRegex.test(input.value.trim())) {
        error.textContent = '올바른 이메일 주소가 아닙니다.'
        input.style.border = '2px solid red'
        return
      }
      error.textContent = ''
      break

    case InputType.PASSWORD:
      const passwordConfirmInput = document.getElementById(
        'signup-passwordConfirm',
      )
      const passwordConfirmError = document.getElementById(
        'signup-passwordConfirmError',
      )

      if (input.value.trim() === '') {
        error.textContent = '비밀번호를 입력해 주세요.'
        input.style.border = '2px solid red'
        return
      }
      if (
        passwordConfirmInput.value.trim() !== '' &&
        input.value.trim() !== passwordConfirmInput.value.trim()
      ) {
        passwordConfirmError.textContent = '비밀번호가 일치하지 않습니다.'
        input.style.border = '2px solid red'
        return
      }

      passwordConfirmError.textContent = ''
      break

    case InputType.PASSWORD_CONFIRM:
      const passwordInput = document.getElementById('signup-password')
      if (input.value.trim() === '') {
        error.textContent = '비밀번호 확인을 입력해 주세요.'
        input.style.border = '2px solid red'
        return
      }
      if (input.value.trim() !== passwordInput.value.trim()) {
        error.textContent = '비밀번호가 일치하지 않습니다.'
        input.style.border = '2px solid red'
        return
      }
      error.textContent = ''
      break

    default:
      break
  }
}
