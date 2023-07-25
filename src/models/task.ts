/**
 * TaskModel
 */
export type TaskModel = {
  title?: string
  url?: string;
  startURL?: string
  advanceURL?: string
  finishURL?: string
  group?: string;
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
  items?: TaskFormatItemModel[];
  isReflectionRequired?: boolean
  syllabus?: SyllabusModel
  level?: number
  iconURL?: string
  userFullName?: string
  userTimeSpent?: number;
  userLiked?: boolean;
  userSaved?: boolean;
  userReflection?: string;
  userRating?: number
  userStatus?: "not started" | "in progress" | "locked" | "completed"
  userViewedAt?: string
};

/**
 * TaskFormatItemModel
 */
export type TaskFormatItemModel = {
  title?: string;
  itemId?: string;
  description?: string;
  format?: "question" | "image" | "embed" | "text";
  questionType?: "radio" | "checkbox" | "drop down" | "file upload" | "text" | "date" | "time";
  options?: string[];
  paragraph?: boolean;
  required?: boolean;
  url?: string;
  userAnswer?: TaskAnswerModel,
};

/**
 * TaskAnswerModel
 */
export type TaskAnswerModel = {
  responses?: string[];
}

/**
 * SyllabusModel
 */
export type SyllabusModel = {
  title?: string;
  items?: SyllabusItemModel[];
}

/**
 * SyllabusItemModel
 */
export type SyllabusItemModel = {
  url?: string;
  startURL?: string
  title?: string;
  description?: string;
  etc?: string;
  numberOfQuestions?: number;
  numberOfVideos?: number;
  numberOfImages?: number;
  isUserFinished?: boolean
};