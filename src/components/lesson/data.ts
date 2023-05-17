/**
 * LessonData
 */
export type LessonData = {
  title?: string
  href?: string;
  isLiked?: boolean;
  isSaved?: boolean;
  numberOfLikes?: number;
  description?: string
  estimate?: string
  tags?: string[]
  rating?: number
  preview?: {title: string}[]
  numberOfQuestions?: number
  uploadedOn?: string
}