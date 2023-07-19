import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthLayout } from "../src/layouts/AuthLayout.tsx";
import { OrganizationListPage } from "../src/pages/organization/OrganizationListPage";

const MOCK_DATA = {
  items: [
    {
      name: "Organization #1",
      status: "admin",
    },
    {
      name: "Organization #2",
      status: "admin",
    },
    {
      name: "Organization #3",
      status: "member",
    },
    {
      name: "Organization #4",
      status: "member",
    },
    {
      name: "Organization #5",
      status: "archived",
    },
    {
      name: "Organization #6",
      status: "archived",
    },
  ],
};

export default {
  title: "Page/Organization/OrganizationListPage",
  component: OrganizationListPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = {
  args: {
    ...MOCK_DATA,
    summary: [{
      title: "Organizations",
      value: MOCK_DATA.items.length,
      description: "Total # of organizations"
    }]
  },
  render: (args) => (
    <div className="h-full w-full overscroll-none font-proxima">
      <MemoryRouter>
        <AuthLayout>
          <OrganizationListPage {...args} />
        </AuthLayout>
      </MemoryRouter>
    </div>
  ),
};

export const Empty = {
  ...Template,
  args: {
    items: [],
  }
};

export const Joined = {
  ...Template,
  args: {
    ...Template.args,
    items: MOCK_DATA.items.filter((a) => a.status === "member"),
  },
};
