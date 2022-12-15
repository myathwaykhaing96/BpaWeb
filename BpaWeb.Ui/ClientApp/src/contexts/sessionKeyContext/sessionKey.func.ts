import { sessionStorageSessionKey, sessionStore, url } from "services"

// Session-key getting, setting by condition(urlSearchParam, sessionStorage)

export const getSessionKeyByCondition = (
  getValueFromUrl?: boolean, urlParamKey?: string, storeSessionStorage?: boolean,
) => {
  return (getValueFromUrl ? getSessionKeyFromUrlParam(urlParamKey) : null) ||
    (storeSessionStorage ? getSessionKeyFromSessionStorage() : null)
}

const getSessionKeyFromUrlParam = (urlParamKey?: string) => url.getSearchParam(urlParamKey || '') || null

const getSessionKeyFromSessionStorage = () => sessionStore.get<string>(sessionStorageSessionKey) || null

export const setSessionKeyIntoSessionStorage = (sessionKey: string) => sessionStore.set<string>(sessionStorageSessionKey, sessionKey)