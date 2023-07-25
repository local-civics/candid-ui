import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { ClassListPage } from '../src/pages/class/ClassListPage';
import { CandidApp } from "../src/App";

const MOCK_DATA = {
  summary: [{
    title: "Classes",
    value: 6,
    description: "Total # of classes"
  },{
    title: "Students",
    value: 10,
    description: "Total # of students"
  }],
  users: [
    { url: 'react', name: 'React'},
    { url: 'ng', name: 'Angular'},
    { url: 'next', name: 'Next.js'},
    { url: 'blitz', name: 'Blitz.js'},
    { url: 'gatsby', name: 'Gatsby.js'},
    { url: 'vue', name: 'Vue'},
    { url: 'jq', name: 'jQuery'},
  ],
  items: [
    {
      name: 'Class #1',
      isManager: true,
    },
    {
      name: 'Class #2',
      isManager: true,
    },
    {
      name: 'Class #3',
    },
    {
      name: 'Class #4',
    },
    {
      name: 'Class #5',
      isArchived: true
    },
    {
      name: 'Class #6',
      isArchived: true
    },
  ]
}

export default {
  title: 'Page/Class/ClassListPage',
  component: ClassListPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = {
  args: {
    ...MOCK_DATA,
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <CandidApp>
        <ClassListPage {...args}/>
      </CandidApp>
    </MemoryRouter>
  </div>,
}

export const Empty = {
  ...Template,
  args: {
    ...Template.args,
    items: [],
  }
};

export const WithClasses = {
  ...Template,
};

export const Joined = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_DATA.items.filter(a => !a.isManager),
  }
};

export const Archived = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_DATA.items.filter(a => a.isArchived),
  }
};
