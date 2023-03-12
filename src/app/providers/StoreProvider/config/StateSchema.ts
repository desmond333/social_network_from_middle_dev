import { UserSchema } from "entities/User"
import { LoginSchema } from "e-features/AuthByUsername"
import { WorkTimeSchema } from "e-features/WorkTimeTracking"

export interface StateSchema {
  user: UserSchema
  workTime: WorkTimeSchema
  loginForm?: LoginSchema
}