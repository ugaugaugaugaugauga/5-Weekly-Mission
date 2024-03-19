const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

export default function validateConfirmPassword(passwordEl, confirmPasswordEl) {
  if (passwordEl.value !== confirmPasswordEl.value) {
    return { success: false, message: '비밀번호가 일치하지 않아요.' }
  }
  return { success: true, message: '' }
}
