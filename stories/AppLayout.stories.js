import * as React from "react";
import { AuthLayout } from '../src/layouts/AuthLayout.tsx';
import {MemoryRouter} from "react-router-dom";
import { CandidApp } from "../src/App.tsx";

export default {
  title: 'Layout/AppLayout',
  component: AuthLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = {
  render: (args) => {
    const [isMenuOpen, setMenuOpen] = React.useState(false)
    return <div className="h-full w-full overscroll-none font-proxima">
      <MemoryRouter>
        <CandidApp {...args} isMenuOpen={isMenuOpen} onMenuClick={setMenuOpen}>Welcome</CandidApp>
      </MemoryRouter>
    </div>
  },
}

export const LoggedIn = {
  ...Template,
  args: {
    fullName: 'Jane Doe',
    email: 'jane.doe@site.com',
    avatarURL: '',
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
    fullName: 'Jane Doe',
    email: 'jane.doe@site.com',
    isPermissionRequired: true,
  }
};
