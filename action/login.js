export default async function login(email, password) {
  const url = 'https://bootcamp-api.codeit.kr/api/sign-in'
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
    if (!!responseData.data) {
      localStorage.setItem('accessToken', responseData.data.accessToken)
      return { success: true }
    }
    return { success: false, message: '이메일 혹은 패스워드가 잘못되었습니다.' }
  } catch (error) {
    console.error('Error:', error)
    return { success: false, message: '서버 요청에서 에러가 발생하였습니다.' }
  }
}
