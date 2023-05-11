import { BadgeData } from "../badge/data";

/**
 * UserData
 */
export type UserData = {
  userFullName?: string
  userEmail?: string
  userAvatarURL?: string
  userImpactStatement?: string
  userBadgeAchievements?: BadgeData[]
}