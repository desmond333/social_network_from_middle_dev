import { StateSchema } from '@/app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => state.editableProfileCard?.error
