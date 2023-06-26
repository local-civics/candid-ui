
export type FormItemData = {
  displayName?: string | React.ReactNode;
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
 * LessonData
 */
export type LessonData = {
  formId?:string;
  title?: string
  href?: string;
  imageURL?:string;
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
  reflection?: string;
  items?: FormItemData[];
  timeSpent?: number;
  elapsedTime?: number;
  stopWatchStarted?: boolean;
}

