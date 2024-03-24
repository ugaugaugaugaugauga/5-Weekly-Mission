import axios from 'axios'

export interface UserData {
  name: string
  email: string
  profileImageSource: string
}

export const fetchUserData = async (): Promise<UserData | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const response = await axios.get<UserData>(
      `${import.meta.env.VITE_BASE_URL}/sample/user`,
    )
    return response.data
  } catch (error) {
    console.error('요청 실패:', error)
    return null
  }
}
