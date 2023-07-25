import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { ClassPage } from '../src/pages/class/ClassPage';
import { CandidApp } from "../src/App";

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
  users: [
    {
      name: "Jane Doe",
      email: "janedoe@localcivics.io",
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    },
    {
      name: "Bobby J",
      email: "bobbyj@localcivics.io",
      isJoined: true,
      numberOfLessonsCompleted: 4,
      numberOfBadgesEarned: 1,
    },
    {
      name: "John Smith",
      email: "johnsmith@localcivics.io",
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    },
    {
      name: "Benetta Marks",
      email: "benetta@localcivics.io",
      isEducator: true,
      avatarURL: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg",
      isJoined: true,
      numberOfLessonsCompleted: 0,
      numberOfBadgesEarned: 0,
    }
  ]
}

const Template = {
  args: {
    users: [],
  },
  render: (args) => {
    return <div className="h-full w-full overscroll-none font-proxima">
      <MemoryRouter>
        <CandidApp defaultActiveLinkName="Home">
          <ClassPage
            {...args}
            name={args.name || MOCK_DATA.name}
            code={args.code || MOCK_DATA.code}
          />
        </CandidApp>
      </MemoryRouter>
    </div>
  },
}

export const Empty = {
  ...Template,
};

export const WithUsers = {
  ...Template,
  args: {
    ...Template.args,
    users: MOCK_DATA.users,
  }
};
