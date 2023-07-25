import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";
import { AssignmentPage } from '../src/pages/assignment/AssignmentPage';

const MOCK_ASSIGMENT_DATA = {
  name: 'Assignment #1',
  questions: [{
    itemId: "1",
    title: "An example question?"
  },{
    itemId: "2",
    title: "Another example question"
  },{
    itemId: "3",
    title: "A chart example question",
    options: ["A. An example response", "B. Another example response", "C. Three", "D. Four", "E. Five"],
  }],
  breakdown: [{
    assignee: "John Doe",
    assigneeURL: "jd",
    status: "in progress",
    reflection: "",
    answers: {"1": {responses: ["An example response"]}, "3": {responses: ["A. An example response"]}},
  },{
    assignee: "Johnna Doe",
    assigneeURL: "jjd",
    status: "in progress",
    reflection: "",
    answers: {"1": {responses: ["An example response"]}, "3": {responses: ["B. Another example response"]}},
  },{
    assignee: "Lucy Jimmy",
    assigneeURL: "lj",
    status: "in progress",
    reflection: "",
    answers: {"3": {responses: ["B. Another example response"]}},
  }],
}

export default {
  title: 'Page/Assignment/AssignmentPage',
  component: AssignmentPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = {
  args: MOCK_ASSIGMENT_DATA,
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout>
        <AssignmentPage {...args}/>
      </AuthLayout>
    </MemoryRouter>
  </div>,
}

export const Lesson = {
  ...Template,
  args: {
    ...Template.args,
  }
};

export const Badge = {
  ...Template,
  args: {
    ...Template.args,
    questions: [],
  }
};