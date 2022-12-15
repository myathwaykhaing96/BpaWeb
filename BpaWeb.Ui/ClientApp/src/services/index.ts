import logger from './logger/logger.service'
import * as localStore from './localStorage/localStorage.service'
import * as sessionStore from './sessionStorage/sessionStorage.service'
import * as url from './url/url.service'

export { logger, localStore, sessionStore, url }

export const sessionStorageSessionKey = process.env.REACT_APP_SESSION_STORAGE_SESSION_KEY || ''
export const localStorageTokenKey = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_KEY || ''
export const localStorageThemeKey = process.env.REACT_APP_LOCAL_STORAGE_THEME_KEY || ''