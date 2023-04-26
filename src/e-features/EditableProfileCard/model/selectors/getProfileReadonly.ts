import { StateSchema } from "@/app/providers/StoreProvider"

export const getProfileReadonly = (state: StateSchema) => state.editableProfileCard?.readonly