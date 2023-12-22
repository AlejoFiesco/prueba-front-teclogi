export default interface GameDetails {
  info: {
    title: string,
    steamAppID: string,
    thumb: string
  },
  cheapestPriceEver: {
    price: string,
    date: string
  },
  deals: any[]
}
