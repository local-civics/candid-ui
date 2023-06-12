/**
 * ClassData
 */
export type ClassData = {
  name: string
  status: "admin" | "member" | "archived"
  code: string
  members: ClassMemberData[]
}

/**
 * ClassMemberData
 */
export type ClassMemberData = {
  name: string
  email: string
  role: "student" | "educator"
  avatarURL: string
  status: "active" | "inactive"
  numberOfBadgesEarned: number
  numberOfLessonsCompleted: number
  impactStatement: string
}