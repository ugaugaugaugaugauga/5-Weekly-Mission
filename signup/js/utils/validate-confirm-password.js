const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

export default function validateConfirmPassword(
  passwordValue,
  confirmPasswordValue,
) {
  if (passwordValue !== confirmPasswordValue) {
    return { success: false, message: '비밀번호가 일치하지 않아요.' }
  }
  return { success: true, message: '' }
}
