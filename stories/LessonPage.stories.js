import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { LessonPage } from '../src/pages/lesson/LessonPage';

const MOCK_DESCRIPTION = 'Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.'
const MOCK_QUESTIONS = [
  {
    title: "What is your favorite color?",
  },
  {
    title: "What is you least favorite food?",
  },
  {
    title: "Which country do you love the most?",
  }
]
const MOCK_TAGS = [
  "tag #1",
  "tag #2",
  "tag #3",
  "tag #4",
  "tag #5",
  "tag #6",
  "tag #7",
  "tag #8",
  "tag #9",
  "tag #10",
  "tag #11",
  "tag #12",
  "tag #13",
]

const MOCK_QUESTION_COUNT = 25

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
          page=<LessonPage {...args}
            title={args.title || "30 Second Elevator Pitch"}
            likes={args.likes || 30000}
            href="https://www.localcivics.io/L_1uo12y431982"
            overviewDescription={args.overviewDescription || MOCK_DESCRIPTION}
            overviewTags={args.overviewTags || MOCK_TAGS}
            previewItems={args.previewItems || MOCK_QUESTIONS}
            previewItemCount={args.previewItemCount || MOCK_QUESTION_COUNT}
          />
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
