import api from '@/lib/api'
import { Folder } from '@/model'

export const getFolderData = async (): Promise<Folder> => {
  const response = await api<{ folder: Folder }>('GET', '/sample/folder')
  return response.data.folder
}
