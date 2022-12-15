import { useMemo, useState, useEffect } from 'react'
import _ from 'lodash'
import { ThemeContext } from './theme.context'
import THEMES from './theme.scheme.json'
import './theme.variable.css'
import { ThemeName } from 'ThemeModels'
import { getStyleVariable, getThemeNameByCondition, setThemeNameIntoLocalStorage } from './theme.func'
import { getValueWithProp } from "utils"

export interface Props {
  children?: React.ReactNode
  defaultTheme?: ThemeName
  getValueFromUrl?: boolean
  urlParamKey?: string
  storeLocalStorage?: boolean
}

interface DefaultValueProps extends Props {
  defaultTheme: ThemeName
  getValueFromUrl: boolean
  urlParamKey: string
  storeLocalStorage: boolean
}

const defaultPropsValue: DefaultValueProps = {
  defaultTheme: 'light',
  getValueFromUrl: false,
  urlParamKey: 'theme',
  storeLocalStorage: false,
}

const ThemeProvider: React.FC<Props> = (props) => {
  const { defaultTheme, children, storeLocalStorage, getValueFromUrl, urlParamKey } = {
    ...defaultPropsValue,
    ...props,
  }

  const themes = useMemo(() => THEMES, [])

  const getThemeObjOrDefault = useMemo(
    () =>
      getThemeObj(getThemeNameByCondition(getValueFromUrl, urlParamKey, storeLocalStorage) as ThemeName, themes)
      || getThemeObj(defaultTheme, themes)
      || getThemeObj(defaultPropsValue.defaultTheme, themes)
    , []
  )

  const [theme, setTheme] = useState(getThemeObjOrDefault)

  useEffect(() => {
    getStyleVariable(theme).map((styleVariable) => setStyleVariableValue(styleVariable))
    if (storeLocalStorage) setThemeNameIntoLocalStorage(theme.id)
  }, [storeLocalStorage, theme])

  const setStyleVariableValue = ({ key, value }: { key: string, value: string }): void => {
    document.documentElement.style.setProperty(key, value)
  }

  const getFonts = () => _.values(_.mapValues(themes.data, 'font'))

  const getThemes = () => JSON.parse(themes.data.toString())

  const changeTheme = (themeName: ThemeName) => setTheme(getThemeObj(themeName, themes)
    || getThemeObj(defaultPropsValue.defaultTheme, themes))

  const themeProviderValue = useMemo(() => ({ theme, changeTheme, getThemes, getFonts }), [theme])

  return <ThemeContext.Provider value={themeProviderValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

const getThemeObj = (themeName: ThemeName | null, themes?: { data: Record<string, any> }) =>
  themes?.data.hasOwnProperty(themeName as string) ? getValueWithProp(themeName || '')(themes?.data) || null : null

