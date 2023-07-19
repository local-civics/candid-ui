/**
 * TaskData
 */
export type TaskData = {
  title?: string
  url?: string;
  imageURL?:string;
  numberOfLikes?: number;
  description?: string
  etc?: string
  tags?: string[]
  topics?: string[]
  avgRating?: number
  preview?: {title: string}[]
  numberOfQuestions?: number
  uploadedOn?: string
  items?: FormItemData[];
  syllabus?: SyllabusData
  level?: number
  iconURL?: string
  userTimeSpent?: number;
  userLiked?: boolean;
  userSaved?: boolean;
  userReflection?: string;
  userRating?: number
  userStatus?: "unlocked" | "in progress" | "locked" | "completed"
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
  disabled?: boolean;
  minText?: number;
  url?: string;
  userAnswer?: {
    responses?: string[];
  },
};

/**
 * SyllabusData
 */
export type SyllabusData = {
  title?: string;
  items?: SyllabusItemData[];
}

/**
 * SyllabusItemData
 */
export type SyllabusItemData = {
  url: string;
  title: string;
  description: string;
  etc: string;
  numberOfQuestions: number;
  numberOfVideos: number;
  numberOfImages: number;
};