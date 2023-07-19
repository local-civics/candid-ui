import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { ClassPage } from '../src/pages/class/ClassPage';
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";

export default {
  title: 'Page/Class/ClassPage',
  component: ClassPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const MOCK_DATA = {
  name: "College & Career Readiness",
  code: "ee3mjm",
  members: [
    {
      name: "Jane Doe",
      email: "janedoe@localcivics.io",
      role: "student",
      status: 'inactive',
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    },
    {
      name: "Bobby J",
      email: "bobbyj@localcivics.io",
      role: "student",
      status: 'active',
      numberOfLessonsCompleted: 4,
      numberOfBadgesEarned: 1,
    },
    {
      name: "John Smith",
      email: "johnsmith@localcivics.io",
      role: "student",
      status: 'inactive',
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    },
    {
      name: "Benetta Marks",
      email: "benetta@localcivics.io",
      role: "educator",
      avatarURL: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg",
      status: 'active',
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    }
  ]
}

const Template = {
  args: {
    members: [],
  },
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout defaultActiveLinkName="Home">
        <ClassPage
          {...args}
          name={args.name || MOCK_DATA.name}
          code={args.code || MOCK_DATA.code}
        />
      </AuthLayout>
    </MemoryRouter>
  </div>,
}

export const Empty = {
  ...Template,
};

export const WithMembers = {
  ...Template,
  args: {
    ...Template.args,
    members: MOCK_DATA.members,
  }
};
