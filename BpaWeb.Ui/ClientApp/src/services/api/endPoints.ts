export const endPoints = {
  channelInfo: '/v1/bpa/channels/info',
  categoryList: '/v1/bpa/billers/categories',
  billerList: '/v1/bpa/billers/list',
  billerProduct: '/v1/bpa/billers/products',
  billerInquiry: '/v1/bpa/inquiry',
  billerConfirm: '/v1/bpa/confirm',
}

export const getDelay: () => Promise<null> = () => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(null)
      ,
      1000,
    ),
  )
}