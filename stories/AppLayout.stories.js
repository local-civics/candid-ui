import * as React from "react";
import { AppLayout } from '../src/layouts/app/AppLayout';
import {MemoryRouter} from "react-router-dom";

export default {
  title: 'AppLayout',
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
    name: 'Jane Doe',
    email: 'jane.doe@site.com',
    image: '',
  },
};

export const LoggedOut = {
  ...Template,
};

export const SignInRequired = {
  ...Template,
  args: {
    ...Template.args,
    signInRequired: true,
    signInRequiredTitle: 'Track progress on your assignments',
    signInRequiredDescription: 'Sign in to access Assignments',
  }
};

export const PermissionRequired = {
  ...Template,
  args: {
    ...Template.args,
    permissionRequired: true,
  }
};
