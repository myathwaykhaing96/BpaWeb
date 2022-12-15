import { IChannel } from 'types'
import { getDelay } from './endPoints';

export type ChannelRequestProps = {
  sessionKey: string
}

export const getChannel: (props: ChannelRequestProps) => Promise<IChannel | null> = async (
  props: ChannelRequestProps
) => {
  await getDelay();
  var responseData = await fetch('/api/v1/channel', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  })
  .then(async (response) => {
    const isJson = response.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null

    // check for error response
    if (!response.ok) {
      // get error message from body or default to response status
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