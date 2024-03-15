import { InputType } from '/type.js'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function setError(input, error, errorMessage) {
  error.textContent = errorMessage
  input.style.border = '2px solid red'
}

function clearError(input, error) {
  error.textContent = ''
  input.style.border = '1px var(--gray-400) solid'
}

export default function checkInput(inputId, errorId, type) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(errorId)
  const trimmedValue = input.value.trim()

  switch (type) {
    case InputType.EMAIL:
      if (trimmedValue === '') {
        setError(input, error, '이메일을 입력해 주세요.')
        return
      }
      if (!emailRegex.test(trimmedValue)) {
        setError(input, error, '올바른 이메일 주소가 아닙니다.')
        return
      }
      clearError(input, error)
      break

    case InputType.PASSWORD:
      if (trimmedValue === '') {
        setError(input, error, '비밀번호를 입력해 주세요.')
        return
      }
      clearError(input, error)
      break

    default:
      break
  }
}
