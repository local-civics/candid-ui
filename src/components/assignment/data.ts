/**
 * AssignmentData
 */
export type AssignmentData = {
  name: string;
  status: "open" | "assigned to me" | "archived"
  summary: AssignmentSummaryItemData[]
  breakdown: AssignmentBreakdownItemData[]
  grouping?: string[]
  columns: {
    accessorKey: string,
    header: string,
    filterVariant?: "select" | "text" | "checkbox" | "date" | "date-range" | "multi-select" | "range",
    mantineFilterSelectProps?: {data: any},
    size?: number
  }[]
};

/**
 * AssignmentSummaryItemData
 */
export type AssignmentSummaryItemData = {
  name: string
  submissions?: string[][]
  submissionCount: number
  options?: string[]
  chart?: boolean
}

/**
 * AssignmentBreakdownItemData
 */
export type AssignmentBreakdownItemData = {
  assignee: string
  reflection: string
  avatarURL: string
  status: 'incomplete' | 'in progress' | 'complete'
}