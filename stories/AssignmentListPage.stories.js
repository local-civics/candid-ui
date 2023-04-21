import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { AssignmentListPage } from '../src/pages/assignment/AssignmentListPage';

const MOCK_DATA = [
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
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AppLayout
          page=<AssignmentListPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const NoAssignments = {
  ...Template,
  args: {
    assignments: [],
  }
};

export const WithAssignments = {
  ...Template,
  args: {
    assignments: MOCK_DATA,
  }
};

export const AssignedToMe = {
  ...Template,
  args: {
    assignments: MOCK_DATA.filter(a => a.status === 'assigned to me'),
  }
};

export const Archived = {
  ...Template,
  assignments: MOCK_DATA.filter(a => a.status === 'archived'),
};
