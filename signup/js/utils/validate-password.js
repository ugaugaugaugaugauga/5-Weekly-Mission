const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

export default function validatePassword(passwordValue) {
  if (passwordValue === '') {
    return { success: false, message: '패스워드를 입력해 주세요.' }
  }
  if (!passwordRegex.test(passwordValue)) {
    return {
      success: false,
      message: '비밀번호는 영문과 숫자 조합 8자 이상 입력해 주세요.',
    }
  }
  return { success: true, message: '' }
}
