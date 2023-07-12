import { TaskData } from "../task/data";

/**
 * UserData
 */
export type UserData = {
  fullName: string
  firstName: string
  lastName: string
  email: string
  avatarURL: string
  impactStatement: string
  badges: TaskData[]
}