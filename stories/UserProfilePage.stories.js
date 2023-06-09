import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { UserProfilePage } from '../src/pages/user/UserProfilePage.tsx';
import {AppLayout} from "../src/layouts/app/AppLayout";

export default {
  title: 'Page/User/UserProfilePage',
  component: UserProfilePage,
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
          {...args}
          page=<UserProfilePage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const MyProfile = {
  ...Template,
  args: {
    fullName: 'Jane Doe',
    email: 'jane.doe@site.com',
    avatarURL: '',
    impactStatement: 'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.',
    badges: [
      {
        displayName: "Onboarding Badge",
        iconURL: "https://cdn.localcivics.io/v1/store/images/XkYCJEdZJXEmsEQYLWiTA7?version=RcpvwzVT7sp9z3mJetAj2m",
        description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
      },
      {
        displayName: "College Explorer Badge",
        iconURL: "https://cdn.localcivics.io/v1/store/images/NXCee9aQQbf4K7WofxkSaw?version=6dnicD9NiKDbP66ToNXScs",
        description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
      },
      {
        displayName: "Civic Lens Badge",
        iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",
        description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
      },
      {
        displayName: "Civic Lens 2 Badge",
        level: 1,
        iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",
        description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
      },
      {
        displayName: "Civic Lens 3 Badge",
        level: 2,
        iconURL: "https://cdn.localcivics.io/v1/store/images/KW8tojvnMi3rj4Dv2sCRcw?version=Ce9anGUvVwTeJs4zB4FrZK",
        description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
      }
    ],
    ctaLabel: 'Edit Profile',
  }
};

export const StudentProfile = {
  ...Template,
  args: {
    fullName: 'Jane Doe',
    email: 'jane.doe@site.com',
    avatarURL: '',
    impactStatement: 'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.',
    ctaLabel: 'Add to class',
  }
};
