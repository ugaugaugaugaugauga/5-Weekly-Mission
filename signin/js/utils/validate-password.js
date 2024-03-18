export default function validatePassword(passwordValue) {
  if (passwordValue === '') {
    return { success: false, message: '패스워드를 입력해 주세요.' }
  }
  return { success: true, message: '' }
}
