import { UserSchema } from "entities/User"
import { LoginSchema } from "e-features/AuthByUsername"

export interface StateSchema {
  user: UserSchema
  loginForm?: LoginSchema
}