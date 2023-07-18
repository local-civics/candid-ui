import { TaskData } from "./task";

/**
 * UserData
 */
export type UserData = {
  fullName?: string
  firstName?: string
  lastName?: string
  email?: string
  avatarURL?: string
  impactStatement?: string
  badges?: TaskData[]
}