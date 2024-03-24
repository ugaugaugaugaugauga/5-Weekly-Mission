import axios from 'axios'

interface Link {
  id: number
  createdAt: string
  url: string
  title: string
  description: string
  imageSource?: string
}

interface Owner {
  id: number
  name: string
  profileImageSource: string
}

export interface Folder {
  id: number
  name: string
  owner: Owner
  links: Link[]
  count: number
}

export const fetchFolderData = async (): Promise<Folder | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/sample/folder`,
    )
    return response.data.folder
  } catch (error) {
    console.error('요청 실패:', error)
    return null
  }
}
