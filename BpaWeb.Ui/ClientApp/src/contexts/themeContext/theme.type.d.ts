declare module 'ThemeModels' {
  export interface ThemeProps {
    id: string
    name: string
    style: {
      colors?: {
        header?: {
          text: string
          background: string
        }
        body?: string
        text?: string
        button?: {
          text: string
          background: string
        }
        link?: {
          text: string
          opacity: number
        }
        icon?: string
        footer?: {
          text: string
          background: string
        }
      }
      font?: string
    }
  }

  export type ThemeName =
    | 'light'
    | 'dark'
    | 'material'
    | 'sharp'
    | 'calm'
    | 'cherryBonBon'
    | 'seaWave'
    | 'other'

}
