import * as React from "react";
import { BadgePage, BadgePageProps } from "./BadgePage";
import { LessonPage, LessonPageProps } from "./LessonPage";

/**
 * TaskPageProps
 */
export type TaskPageProps = BadgePageProps & LessonPageProps

/**
 * TaskPage
 * @param props
 * @constructor
 */
export function TaskPage(props: TaskPageProps) {
  if(props.syllabus){
    return <BadgePage {...props}/>
  }

  return <LessonPage {...props}/>
}