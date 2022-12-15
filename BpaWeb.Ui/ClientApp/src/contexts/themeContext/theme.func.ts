import { ThemeName, ThemeProps } from "ThemeModels"
import { localStore, localStorageThemeKey, url } from "services"
import { generateBlackToTargetColor } from "utils"
import { keyValueProps } from "UtilTypes"
import _ from "lodash"

// Create css custom variable for theme
const styleVariablePrefix = '--theme'

export const getStyleVariable = (theme?: ThemeProps): keyValueProps[] => {
  let styleVariables: keyValueProps[] = []
  createStyleVariables(theme?.style, styleVariablePrefix, (obj: keyValueProps) =>
    styleVariables.push(obj),
  )
  return styleVariables
}

export const createStyleVariables = (obj: any, prefix: string, addVariable: CallableFunction) => {
  for (const key in obj) {
    if (_.isObject(obj[key])) {
      createStyleVariables(obj[key], [prefix, key].join('-'), addVariable)
    } else {
      switch (key) {
        case 'icon':
          addVariable({ key: [prefix, key].join('-'), value: generateBlackToTargetColor(obj[key]) })
          break
        default:
          addVariable({ key: [prefix, key].join('-'), value: obj[key] })
          break
      }
    }
  }
}

// Theme getting, setting by condition(urlSearchParam, localStorage)
export const getThemeNameByCondition = (
  getValueFromUrl?: boolean, urlParamKey?: string, storeLocalStorage?: boolean,
) => {
  return (getValueFromUrl ? getThemeNameFromUrlParam(urlParamKey) : null) ||
    (storeLocalStorage ? getThemeNameFromLocalStorage() : null)
}

const getThemeNameFromUrlParam = (urlParamKey?: string) => url.getSearchParam(urlParamKey || '') || null

const getThemeNameFromLocalStorage = () => localStore.get<string>(localStorageThemeKey) || null

export const setThemeNameIntoLocalStorage = (themeName: ThemeName) => localStore.set<string>(localStorageThemeKey, themeName)