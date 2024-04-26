import api from '@/lib/api'
import { Category, UserData, UserLink } from '@/model'

export const getUserData = async (): Promise<UserData[]> => {
  const response = await api<{ data: UserData[] }>('GET', '/users/1')
  return response.data.data
}

export const getUserCategories = async (): Promise<Category[]> => {
  const response = await api<{ data: Category[] }>('GET', '/users/1/folders')
  return response.data.data
}

export const getUserLinks = async (): Promise<UserLink[]> => {
  const response = await api<{ data: UserLink[] }>('GET', '/users/1/links')
  return response.data.data
}
