import * as React from "react";
import { AppLayout } from '../src/layouts/app/AppLayout';
import {MemoryRouter} from "react-router-dom";

export default {
  title: 'Layout/AppLayout',
  component: AppLayout,
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
      <AppLayout {...args}/>
    </MemoryRouter>
  </div>,
}

export const LoggedIn = {
  ...Template,
  args: {
    userFullName: 'Jane Doe',
    userEmail: 'jane.doe@site.com',
    userProfilePictureURL: '',
  },
};

export const LoggedOut = {
  ...Template,
};

export const SignInRequired = {
  ...Template,
  args: {
    ...Template.args,
    isSignInRequired: true,
    signInRequiredTitle: 'Track progress on your assignments',
    signInRequiredDescription: 'Sign in to access Assignments',
  }
};

export const PermissionRequired = {
  ...Template,
  args: {
    ...Template.args,
    userFullName: 'Jane Doe',
    userEmail: 'jane.doe@site.com',
    isPermissionRequired: true,
  }
};
