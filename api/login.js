import getUserByEmail from '../data/get-user-by-email.js'

export default function login(email, password) {
  const user = getUserByEmail()

  if (!user) {
    return {
      success: false,
      error: 'user',
      message: '존재하지 않는 유저입니다.',
    }
  }

  if (user.email !== email) {
    return {
      success: false,
      error: 'email',
      message: '존재하지 않는 이메일 입니다.',
    }
  }
  if (user.password !== password) {
    return {
      success: false,
      error: 'password',
      message: '패스워드를 확인하세요.',
    }
  }
  return { success: true }
}
