import { IBiller } from 'types'
import { getDelay } from './endPoints';

export type BillerRequestProps = {
  sessionKey: string,
  billerCode: string,
}

export type BillersRequestProps = {
  sessionKey: string,
}


export const getBiller: (props: BillerRequestProps) => Promise<IBiller | null> = async (
  props: BillerRequestProps
) => {
  await getDelay();
  var responseData = await fetch('/api/v1/biller', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  })
  .then(async (response) => {
    const isJson = response.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null
    if (!response.ok) {
      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }
    return data
  })
  .then((data) => {
    return data
  })
  .catch((error) => {
    console.error('Error:', error)
  })
  return responseData || null
}

export const getBillers: (props: BillersRequestProps) => Promise<Array<IBiller> | null> = async (
  props: BillersRequestProps
) => {
  await getDelay();
  const data = { sessionKey: props.sessionKey } as BillersRequestProps
  var responseData = await fetch('/api/v1/biller/list', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(async (response) => {
    const isJson = response.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null
    if (!response.ok) {
      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }
    return data
  })
  .then((data) => {
    return data
  })
  .catch((error) => {
    console.error('Error:', error)
  })
  return responseData || null
}

