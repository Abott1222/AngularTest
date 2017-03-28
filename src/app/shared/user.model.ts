export interface IUser {
  id: number
  name: string
  imageUrl: string
  location?: {
    city: string
    country: string
  }

}
