import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";
import { AssignmentListPage } from '../src/pages/assignment/AssignmentListPage';

const MOCK_ASSIGMENT_DATA = [
  {
    name: 'Assignment #1',
    status: 'open',
  },
  {
    name: 'Assignment #2',
    status: 'open',
  },
  {
    name: 'Assignment #3',
    status: 'assigned to me',
  },
  {
    name: 'Assignment #4',
    status: 'assigned to me',
  },
  {
    name: 'Assignment #5',
    status: 'archived',
  },
  {
    name: 'Assignment #6',
    status: 'archived',
  },
]

const MOCK_ASSIGNEE_DATA = [
  [
    { value: 'react', label: 'React', group: 'Classes'},
    { value: 'ng', label: 'Angular', group: 'Classes' },
    { value: 'next', label: 'Next.js', group: 'Classes' },
    { value: 'blitz', label: 'Blitz.js' , description: 'blitz@js.io', group: 'Students'},
    { value: 'gatsby', label: 'Gatsby.js', description: 'gatsby@js.io', group: 'Students' },
    { value: 'vue', label: 'Vue', description: 'vue@js.io', group: 'Students' },
    { value: 'jq', label: 'jQuery', group: 'Classes' },
  ],
  [
    { value: 'sv', label: 'Svelte' },
    { value: 'rw', label: 'Redwood' },
    { value: 'np', label: 'NumPy' },
    { value: 'dj', label: 'Django' },
    { value: 'fl', label: 'Flask' },
  ],
];

const MOCK_ACTIVITY_DATA = [
  { value: 'react', label: 'React', group: 'Lessons'},
  { value: 'ng', label: 'Angular', group: 'Lessons' },
  { value: 'next', label: 'Next.js', group: 'Lessons' },
  { value: 'blitz', label: 'Blitz.js' , description: 'blitz@js.io', group: 'Badges'},
  { value: 'gatsby', label: 'Gatsby.js', description: 'gatsby@js.io', group: 'Badges' },
  { value: 'vue', label: 'Vue', description: 'vue@js.io', group: 'Badges' },
  { value: 'jq', label: 'jQuery', group: 'Lessons' },
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
    assignees: MOCK_ASSIGNEE_DATA,
    tasks: MOCK_ACTIVITY_DATA,
    items: [],
    summary: [{
      title: "Assignments",
      value: 10,
      description: "Total # of assignments"
    }]
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout>
        <AssignmentListPage {...args}/>
      </AuthLayout>
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
    items: MOCK_ASSIGMENT_DATA.filter(a => a.status === 'assigned to me'),
  }
};

export const Archived = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_ASSIGMENT_DATA.filter(a => a.status === 'archived'),
  }
};
