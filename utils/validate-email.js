const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function validateEmail(email) {
  if (email === '') {
    return { success: false, message: '이메일 주소를 입력해 주세요.' }
  }
  if (!emailRegex.test(email)) {
    return { success: false, message: '올바른 이메일 주소가 아닙니다.' }
  }
  return { success: true, message: '' }
}
