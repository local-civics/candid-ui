import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { AssignmentListPage } from '../src/pages/assignment/AssignmentListPage';

export default {
  title: 'AssignmentListPage',
  component: AssignmentListPage,
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
          page=<AssignmentListPage {...args}
          />
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
