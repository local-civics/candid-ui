/**
 * AssignmentModel
 */
export type AssignmentModel = {
  url?: string;
  taskURL?: string
  startURL?: string
  name?: string;
  code?: string;
  breakdown?: AssignmentBreakdownItemModel[]
  assignees?: AssigneeModel[]
  isArchived?: boolean
  isAssignor?: boolean
  grouping?: string[]
  questions?: {itemId?: string, title?: string, options?: string[]}[]
};

/**
 * AssigneeModel
 */
export type AssigneeModel = {
  name?: string
  url?: string
  group?: string
  description?: string
}

/**
 * AssignmentBreakdownItemModel
 */
export type AssignmentBreakdownItemModel = {
  assigneeName: string
  assigneeURL: string
  reflection: string
  avatarURL: string
  status: 'incomplete' | 'in progress' | 'complete'
  answers?: Record<string, {responses?: string[]}>
}