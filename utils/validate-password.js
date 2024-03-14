export default function validatePassword(password) {
  if (password.value === '') {
    return { success: false, message: '패스워드를 입력해 주세요.' }
  }
  return { success: true, message: '' }
}
