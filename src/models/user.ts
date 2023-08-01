import { TaskModel } from "./task";

/**
 * UserModel
 */
export type UserModel = {
  fullName?: string
  firstName?: string
  lastName?: string
  email?: string
  avatarURL?: string
  impactStatement?: string
  badges?: TaskModel[]
}