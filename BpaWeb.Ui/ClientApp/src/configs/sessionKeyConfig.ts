import { Props } from 'contexts/sessionKeyContext/SessionKeyProvider'

export const sessionKeyConfig: Props = {
  defaultSession: null,
  getValueFromUrl: true,
  urlParamKey: 'session',
  storeSessionStorage: true,
}

// default Theme Config 
// {
  // defaultSession: null,
  // getValueFromUrl: false,
  // urlParamKey: 'session',
  // storeSessionStorage: true,
// }