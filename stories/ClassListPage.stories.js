import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";
import { ClassListPage } from '../src/pages/class/ClassListPage';

const MOCK_DATA = {
  members: [
    [
      { value: 'react', label: 'React'},
      { value: 'ng', label: 'Angular'},
      { value: 'next', label: 'Next.js'},
      { value: 'blitz', label: 'Blitz.js'},
      { value: 'gatsby', label: 'Gatsby.js'},
      { value: 'vue', label: 'Vue'},
      { value: 'jq', label: 'jQuery'},
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
      { value: 'np', label: 'NumPy' },
      { value: 'dj', label: 'Django' },
      { value: 'fl', label: 'Flask' },
    ],
  ],
  classes: [
    {
      name: 'Class #1',
      status: 'admin',
    },
    {
      name: 'Class #2',
      status: 'admin',
    },
    {
      name: 'Class #3',
      status: 'member',
    },
    {
      name: 'Class #4',
      status: 'member',
    },
    {
      name: 'Class #5',
      status: 'archived',
    },
    {
      name: 'Class #6',
      status: 'archived',
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
    data: {
      members: MOCK_DATA.members,
      classes: [],
      summary: [{
        title: "Classes",
        value: MOCK_DATA.classes.length,
        description: "Total # of classes"
      },{
        title: "Students",
        value: 10,
        description: "Total # of students"
      }]
    },
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout
          {...args}
          page=<ClassListPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const Empty = {
  ...Template,
};

export const WithClasses = {
  ...Template,
  args: {
    ...Template.args,
    data: {
      ...MOCK_DATA,
      summary: [{
        title: "Classes",
        value: MOCK_DATA.classes.length,
        description: "Total # of classes"
      },{
        title: "Students",
        value: 10,
        description: "Total # of students"
      }]
    },
  }
};

export const Joined = {
  ...Template,
  args: {
    ...Template.args,
    data: {
      ...MOCK_DATA,
      classes: MOCK_DATA.classes.filter(a => a.status === 'member'),
      summary: [{
        title: "Classes",
        value: MOCK_DATA.classes.length,
        description: "Total # of classes"
      },{
        title: "Students",
        value: 10,
        description: "Total # of students"
      }]
    },
  }
};

export const Archived = {
  ...Template,
  args: {
    ...Template.args,
    data: {
      ...MOCK_DATA,
      classes: MOCK_DATA.classes.filter(a => a.status === 'archived'),
      summary: [{
        title: "Classes",
        value: MOCK_DATA.classes.length,
        description: "Total # of classes"
      },{
        title: "Students",
        value: 10,
        description: "Total # of students"
      }]
    }
  }
};
