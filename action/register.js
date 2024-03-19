export default async function register(email, password) {
  const url = 'https://bootcamp-api.codeit.kr/api/sign-up'
  const data = {
    email,
    password,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (responseData.error) {
      return {
        success: false,
        message: '이미 존재하는 이메일 입니다.',
      }
    }
    if (!!responseData.data) {
      localStorage.setItem('accessToken', responseData.data.accessToken)
      return { success: true }
    }
    return { success: false, message: '서버 에러' }
  } catch (error) {
    console.log('Error:', error)
    return { success: false, message: '서버 에러' }
  }
}
