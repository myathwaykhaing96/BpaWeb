import { IChannelInfo } from 'types'

declare module 'MyModels' {
  export interface AuthProps {
    isAuthenticated: boolean
    channel?: IChannelInfo | null
  }
}
