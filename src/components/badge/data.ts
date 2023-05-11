/**
 * BadgeData
 */
export type BadgeData = {
  href?: string
  displayName?: string
  description?: string
  status?: "available" | "in progress" | "locked" | "completed"
  level?: number
  iconURL?: string
}

/**
 * BadgeSyllabusData
 */
export type BadgeSyllabusData = {
  syllabusTitle?: string;
  syllabusItems: BadgeSyllabusItemData[];
}

/**
 * BadgeSyllabusItemData
 */
export type BadgeSyllabusItemData = {
  title: string;
  description: string;
  estimate: string;
  questionCount: number;
  videoCount?: number;
  imageCount?: number;
};