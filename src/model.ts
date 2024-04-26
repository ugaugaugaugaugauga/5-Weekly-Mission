export interface Link {
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

export interface UserData {
  id: number
  created_at: string
  name: string
  image_source: string
  email: string
  auth_id: string
}
export interface Category {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {
    count: number
  }
}
export interface UserLink {
  id: number
  created_at: string
  updated_at?: string
  url: string
  title?: string
  description?: string
  image_source?: string
  folder_id?: number
}
