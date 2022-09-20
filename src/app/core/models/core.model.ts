export interface AuthMeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}
export type SeverityType = 'error' | 'success' | 'info' | 'warning'
