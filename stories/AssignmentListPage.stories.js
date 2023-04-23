import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { AssignmentListPage } from '../src/pages/assignment/AssignmentListPage';

const MOCK_ASSIGMENT_DATA = [
  {
    title: 'Assignment #1',
    status: 'open',
  },
  {
    title: 'Assignment #2',
    status: 'open',
  },
  {
    title: 'Assignment #3',
    status: 'assigned to me',
  },
  {
    title: 'Assignment #4',
    status: 'assigned to me',
  },
  {
    title: 'Assignment #5',
    status: 'archived',
  },
  {
    title: 'Assignment #6',
    status: 'archived',
  },
]

const MOCK_ASSIGNEE_DATA = [
  [
    { value: 'react', label: 'React', group: 'Classes'},
    { value: 'ng', label: 'Angular', group: 'Classes' },
    { value: 'next', label: 'Next.js', group: 'Classes' },
    { value: 'blitz', label: 'Blitz.js' , group: 'Students'},
    { value: 'gatsby', label: 'Gatsby.js', group: 'Students' },
    { value: 'vue', label: 'Vue', group: 'Students' },
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

export default {
  title: 'AssignmentListPage',
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
    assignments: [],
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AppLayout
          {...args}
          page=<AssignmentListPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const SignInRequired = {
  ...Template,
  args: {
    ...Template.args,
    permissionRequired: true,
  }
};

export const NoAssignments = {
  ...Template,
};

export const WithAssignments = {
  ...Template,
  args: {
    ...Template.args,
    assignments: MOCK_ASSIGMENT_DATA,
  }
};

export const AssignedToMe = {
  ...Template,
  args: {
    ...Template.args,
    assignments: MOCK_ASSIGMENT_DATA.filter(a => a.status === 'assigned to me'),
  }
};

export const Archived = {
  ...Template,
  args: {
    ...Template.args,
    assignments: MOCK_ASSIGMENT_DATA.filter(a => a.status === 'archived'),
  }
};
