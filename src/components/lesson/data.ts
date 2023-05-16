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
  preview?: {title: string}[]
  numberOfQuestions?: number
}