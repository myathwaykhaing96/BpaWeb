export interface IErrors {
  [key: string]: string[]
}

export interface IChannel {
  channelCode: string
  channelName: string
  channelLogo: string
  channelCountry: string
  channelCurrency: string
  channelStatus: string
}

export interface IBiller {
  billerCode: string
  billerName: string
  billerLogo: string
  categoryCode: string
  categoryName: string
}

export interface ICategory {
  categoryCode: string
  categoryName: string
}