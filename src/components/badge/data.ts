/**
 * BadgeData
 */
export type BadgeData = {
  href?: string
  displayName?: string
  status?: "available" | "in progress" | "locked" | "completed"
  level?: number
  iconURL?: string
}