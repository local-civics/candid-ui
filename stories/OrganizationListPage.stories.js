import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { OrganizationListPage } from '../src/pages/enrollment/OrganizationListPage';

const MOCK_DATA = {
  organizations: [
    {
      name: 'Organization #1',
      status: 'admin',
    },
    {
      name: 'Organization #2',
      status: 'admin',
    },
    {
      name: 'Organization #3',
      status: 'member',
    },
    {
      name: 'Organization #4',
      status: 'member',
    },
    {
      name: 'Organization #5',
      status: 'archived',
    },
    {
      name: 'Organization #6',
      status: 'archived',
    },
  ]
}

export default {
  title: 'Page/OrganizationListPage',
  component: OrganizationListPage,
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
      organizations: [],
    },
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AppLayout
          {...args}
          page=<OrganizationListPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const NoOrganizations = {
  ...Template,
};

export const Joined = {
  ...Template,
  args: {
    ...Template.args,
    data: {
      ...MOCK_DATA,
      organizations: MOCK_DATA.organizations.filter(a => a.status === 'member')
    },
  }
};
