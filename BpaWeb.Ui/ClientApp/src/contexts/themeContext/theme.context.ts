import { ThemeProps, ThemeName } from 'ThemeModels'
import React, { createContext, useContext } from 'react'

type Props = {
  theme: ThemeProps
  changeTheme: React.Dispatch<ThemeName>
  getThemes: React.Dispatch<Array<ThemeProps>>
  getFonts: React.Dispatch<Array<string>>
}

export const ThemeContext = createContext<Props>({} as Props)

export const useTheme = () => {
  const { theme, changeTheme, getThemes, getFonts } = useContext(ThemeContext)
  return { theme, changeTheme, getThemes, getFonts }
}
