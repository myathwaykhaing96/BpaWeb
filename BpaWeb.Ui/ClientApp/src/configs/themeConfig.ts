import { Props } from 'contexts/themeContext/ThemeProvider'

export const themeConfig: Props = {
  defaultTheme: 'light',
  getValueFromUrl: true,
  urlParamKey: 'theme',
  storeLocalStorage: true,
}

// default Theme Config 
// {
//   defaultTheme: 'light',
//   storeLocalStorage: false,
//   getValueFromUrl: false,
//   urlParamKey: 'theme',
// }