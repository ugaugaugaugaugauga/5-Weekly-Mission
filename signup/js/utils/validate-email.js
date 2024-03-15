const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function validateEmail(emailValue) {
  if (emailValue === '') {
    return { success: false, message: '이메일 주소를 입력해 주세요.' }
  }
  if (!emailRegex.test(emailValue)) {
    return { success: false, message: '올바른 이메일 주소가 아닙니다.' }
  }
  if (emailValue === 'test@codeit.com') {
    return { success: false, message: '이미 사용중인 이메일입니다.' }
  }
  return { success: true, message: '' }
}
