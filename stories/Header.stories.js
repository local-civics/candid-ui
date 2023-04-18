import { Header } from '../src/components/Header/Header';
import {MemoryRouter} from "react-router-dom";
import {AppShell} from "@mantine/core";
import * as React from "react";

export default {
  title: 'Header',
  component: Header,
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
      <AppShell
          padding="md"
          header={<Header {...args}/>}
      >
        {/* Your application here */}
      </AppShell>
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
