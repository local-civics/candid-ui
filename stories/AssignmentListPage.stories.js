import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { AssignmentListPage } from '../src/pages/assignment/AssignmentListPage';
import { CandidApp } from "../src/App";

const MOCK_ASSIGMENT_DATA = [
  {
    name: 'Assignment #1',
    isAssignor: true,
  },
  {
    name: 'Assignment #2',
    isAssignor: true,
  },
  {
    name: 'Assignment #3',
  },
  {
    name: 'Assignment #4',
  },
  {
    name: 'Assignment #5',
    isArchived: true,
  },
  {
    name: 'Assignment #6',
    isArchived: true,
    isAssignor: true,
  },
]

const MOCK_ASSIGNEE_DATA = [
  { url: 'react', name: 'React', group: "Classes"},
  { url: 'ng', name: 'Angular', group: "Classes"},
  { url: 'next', name: 'Next.js', group: "Classes"},
  { url: 'blitz', name: 'Blitz.js', group: "Classes" , description: 'blitz@js.io'},
  { url: 'gatsby', name: 'Gatsby.js', group: "Classes", description: 'gatsby@js.io'},
  { url: 'vue', name: 'Vue', group: "Classes", description: 'vue@js.io'},
  { url: 'jq', name: 'jQuery', group: "Classes"},
  { url: 'sv', name: 'Svelte', group: "Users" },
  { url: 'rw', name: 'Redwood', group: "Users" },
  { url: 'np', name: 'NumPy', group: "Users" },
  { url: 'dj', name: 'Django', group: "Users" },
  { url: 'fl', name: 'Flask', group: "Users" },
];

const MOCK_TASK_DATA = [
  { url: 'react', title: 'React', group: 'Lessons'},
  { url: 'ng', title: 'Angular', group: 'Lessons' },
  { url: 'next', title: 'Next.js', group: 'Lessons' },
  { url: 'blitz', title: 'Blitz.js' , description: 'blitz@js.io', group: 'Badges'},
  { url: 'gatsby', title: 'Gatsby.js', description: 'gatsby@js.io', group: 'Badges' },
  { url: 'vue', title: 'Vue', description: 'vue@js.io', group: 'Badges' },
  { url: 'jq', title: 'jQuery', group: 'Lessons' },
];

export default {
  title: 'Page/Assignment/AssignmentListPage',
  component: AssignmentListPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = {
  args: {
    assigneeOptions: MOCK_ASSIGNEE_DATA,
    taskOptions: MOCK_TASK_DATA,
    items: [],
    summary: [{
      title: "Assignments",
      value: 10,
      description: "Total # of assignments"
    }]
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <CandidApp>
        <AssignmentListPage {...args}/>
      </CandidApp>
    </MemoryRouter>
  </div>,
}

export const Empty = {
  ...Template,
};

export const WithAssignments = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_ASSIGMENT_DATA,
  }
};

export const AssignedToMe = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_ASSIGMENT_DATA.filter(a => !a.isAssignor),
  }
};

export const Archived = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_ASSIGMENT_DATA.filter(a => a.isArchived),
  }
};
