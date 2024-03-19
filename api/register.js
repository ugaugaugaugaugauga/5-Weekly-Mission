export default function register(email, password) {
  if (email === 'test@codeit.com') {
    return {
      success: false,
      error: 'email',
      message: '이미 존재하는 이메일 입니다.',
    }
  }
  return { success: true }
}
