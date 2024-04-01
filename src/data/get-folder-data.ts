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

export const getFolderData = async (): Promise<Folder> => {
  const response = await axios.get<{ folder: Folder }>(
    `${import.meta.env.VITE_BASE_URL}/sample/folder`,
  )
  return response.data.folder
}
