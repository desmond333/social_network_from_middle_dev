import { TCountry, TCurrency } from '@/g-shared/const/common'

export interface Profile {
    firstName: string
    lastName: string
    age: string
    currency: TCurrency
    country: TCountry
    city: string
    username: string
    avatar: string
}
