// import { BaseResponse } from 'types'

// export interface UserSession {
//   AccessToken: string
//   CredentialKey: string
//   Uuid: string
// }

// export interface UserSessionKeyResponse extends BaseResponse {
//   data?: string | null
// }

// export interface UserSessionResponse extends BaseResponse {
//   data?: UserSession | null
// }

// export const setUserSession: () => Promise<UserSessionKeyResponse | null> = async () => {
//   await fetch('/api/v1/webview/about', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return { data } as UserSessionKeyResponse
//     })
//     .catch((error) => {
//       console.error('Error:', error)
//       return {
//         ErrorCode: error.code,
//         ErrorMessage: error.message,
//       } as UserSessionKeyResponse
//     })
//   return null
// }

// export const getUserSession: () => Promise<UserSessionResponse | null> = async () => {
//   await fetch('/api/v1/webview/getSession', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // body: JSON.stringify({ Id: props }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return { data } as UserSessionResponse
//     })
//     .catch((error) => {
//       console.error('Error:', error)
//       return {
//         ErrorCode: error.code,
//         ErrorMessage: error.message,
//       } as UserSessionResponse
//     })
//   return null
// }

export const test = null