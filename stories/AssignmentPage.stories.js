import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { AssignmentPage } from '../src/pages/assignment/AssignmentPage';

const MOCK_ASSIGMENT_DATA = {
  name: 'Assignment #1',
  status: 'open',
  summary: [
    {
      name: "An example question",
      submissions: [["An example response"], ["Another example response"]],
    },
    {
      name: "Another example question",
      submissionCount: 5,
    },
    {
      name: "A chart example question",
      chart: true,
      options: ["A. An example response", "B. Another example response", "C. Three", "D. Four", "E. Five"],
      submissions: [["A. An example response"], ["B. Another example response"], ["B. Another example response"]]
    },
  ],
  breakdown: [{
    assignee: "John Doe",
    status: "In Progress",
    reflection: "",
    "Lesson #1": "In Progress",
    "An example question?": "An example response"
  }],
}

export default {
  title: 'Page/AssignmentPage',
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
      <AppLayout
          {...args}
          page=<AssignmentPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const Lesson = {
  ...Template,
  args: {
    ...Template.args,
    columns: [{
      accessorKey: "An example question?",
      header: "An example question?"
    }]
  }
};

export const Badge = {
  ...Template,
  args: {
    ...Template.args,
    summary: [
      {
        name: "Lesson #1",
        submissionCount: 5,
      },
    ],
    columns: [{
      accessorKey: "Lesson #1",
      header: "Lesson #1",
      filterVariant: "select",
      mantineFilterSelectProps: {
        data: ["Incomplete", "In Progress", "Complete"],
      },
      size: 200,
    }],
  }
};