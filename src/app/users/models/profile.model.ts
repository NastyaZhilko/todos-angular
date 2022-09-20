export interface ProfileResponse {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  github?: string
  vk?: string
  facebook?: string
  instagram?: string
  twitter?: string
  website?: string
  youtube?: string
  mainLink?: string
}
