import { instance } from '@/lib/utils'

interface Link {
  created_at: string
  description: string | null
  folder_id: number | null
  id: number
  image_source: string | null
  title: string | null
  updated_at: string | null
  url: string
}

export const getLinksData = async () => {
  const data = await instance.get<{ data: Link[] }>('/users/1/links')
  return data.data.data
}

interface LinkCategory {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {
    count: number
  }
}

export const getLinkCategories = async () => {
  const data = await instance.get<{ data: LinkCategory[] }>('/users/1/folders')

  return data.data.data
}
