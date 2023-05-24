import { Profile } from '@/f-entities/Profile'

export interface EditableProfileCardSchema {
    isLoading: boolean
    readonly: boolean
    data?: Profile
    error?: string
}
