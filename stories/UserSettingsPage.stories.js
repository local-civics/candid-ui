import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { UserSettingsPage } from '../src/pages/user/UserSettingsPage.tsx';
import {AppLayout} from "../src/layouts/app/AppLayout";

export default {
  title: 'Page/User/UserSettingsPage',
  component: UserSettingsPage,
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
          page=<UserSettingsPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
  args: {
    fullName: 'Jane Doe',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@site.com',
    avatarURL: '',
    impactStatement: 'I would like to encourage my community to become more educated on issues that directly affect us, as well as make sure my community is a place where everyone is welcome.',
  }
};
