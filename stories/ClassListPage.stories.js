import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { ClassListPage } from '../src/pages/enrollment/ClassListPage';

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
  title: 'Page/ClassListPage',
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
    },
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AppLayout
          {...args}
          page=<ClassListPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const NoClasses = {
  ...Template,
};

export const WithClasses = {
  ...Template,
  args: {
    ...Template.args,
    data: MOCK_DATA,
  }
};

export const Joined = {
  ...Template,
  args: {
    ...Template.args,
    data: {
      ...MOCK_DATA,
      classes: MOCK_DATA.classes.filter(a => a.status === 'member')
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
    }
  }
};
