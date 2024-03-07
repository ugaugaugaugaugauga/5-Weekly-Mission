import { InputType } from '/type.js'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function checkInput(inputId, errorId, type) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(errorId)

  switch (type) {
    case InputType.EMAIL:
      if (input.value.trim() === '') {
        error.textContent = '이메일을 입력해 주세요.'
        return
      }
      if (!emailRegex.test(input.value.trim())) {
        error.textContent = '올바른 이메일 주소가 아닙니다.'
        return
      }
      error.textContent = ''
      break

    case InputType.PASSWORD:
      error.textContent =
        input.value.trim() === '' ? '비밀번호를 입력해 주세요.' : ''
      break

    default:
      break
  }
}
