import { LessonPage } from '../src/pages/LessonPage/LessonPage';
import {MemoryRouter} from "react-router-dom";
import * as React from "react";
import {AppLayout} from "../src/layouts/AppLayout/AppLayout";

export default {
  title: 'LessonPage',
  component: LessonPage,
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
          page=<LessonPage {...args}/>
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
