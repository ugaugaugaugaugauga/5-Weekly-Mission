import axios from 'axios'

export interface UserData {
  name: string
  email: string
  profileImageSource: string
}

export const getUserData = async (): Promise<UserData> => {
  const response = await axios.get<UserData>(
    `${import.meta.env.VITE_BASE_URL}/sample/user`,
  )
  return response.data
}
