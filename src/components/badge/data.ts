/**
 * BadgeData
 */
export type BadgeData = {
  href?: string
  title?: string
  description?: string
  status?: "available" | "in progress" | "locked" | "completed"
  level?: number
  iconURL?: string
  estimate?: string
  tags?: string[]
  syllabus?: BadgeSyllabusData
}

/**
 * BadgeSyllabusData
 */
export type BadgeSyllabusData = {
  title?: string;
  items: BadgeSyllabusItemData[];
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