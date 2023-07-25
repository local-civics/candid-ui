/**
 * ClassModel
 */
export type ClassModel = {
  name?: string
  url?: string
  memberURL?: string
  inviteURL?: string
  assignmentsURL?: string
  isArchived?: boolean
  isManager?: boolean
  code?: string
  users?: ClassUserModel[]
}

/**
 * ClassUserModel
 */
export type ClassUserModel = {
  name?: string
  url?: string
  email?: string
  avatarURL?: string
  isEducator?: boolean
  isArchived?: boolean
  isJoined?: boolean
  impactStatement?: string
}