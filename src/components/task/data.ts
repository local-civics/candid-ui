/**
 * TaskData
 */
export type TaskData = {
  title?: string
  href?: string;
  imageURL?:string;
  totalNumberOfLikes?: number;
  description?: string
  etc?: string
  tags?: string[]
  avgRating?: number
  preview?: {title: string}[]
  numberOfQuestions?: number
  uploadedOn?: string
  items?: FormItemData[];
  timeSpent?: number;
  elapsedTime?: number;
  stopWatchStarted?: boolean;
  status?: "available" | "in progress" | "locked" | "completed"
  syllabus?: BadgeSyllabusData
  level?: number
  iconURL?: string
  userLiked?: boolean;
  userSaved?: boolean;
  userReflection?: string;
  userRating?: number
};

export type FormItemData = {
  displayName?: string;
  itemId?: string;
  description?: string;
  format?: "question" | "image" | "embed" | "text";
  questionType?: "radio" | "checkbox" | "drop down" | "file upload" | "text" | "date" | "time";
  options?: string[];
  paragraph?: boolean;
  required?: boolean;
  reflection?: string;
  rating?: number;
  disabled?: boolean;
  url?: string;
  answerId?: string;
  journalId?: string;
  questionId?: string;
  responses?: string[];
  minText?: number;
};

/**
 * BadgeSyllabusData
 */
export type BadgeSyllabusData = {
  title?: string;
  items?: BadgeSyllabusItemData[];
}

/**
 * BadgeSyllabusItemData
 */
export type BadgeSyllabusItemData = {
  title: string;
  description: string;
  estimate: string;
  questionCount: number;
  videoCount: number;
  imageCount: number;
};