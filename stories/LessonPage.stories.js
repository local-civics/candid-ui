import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";
import { TaskPage as LessonPage } from '../src/pages/task/TaskPage.tsx';

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

const MOCK_TOPICS = [
  "Clone or download repository from GitHub",
  "Install dependencies with yarn",
  "To start development server run npm start command",
  "Run tests to make sure your changes do not break the build",
  "Submit a pull request once you are done",
]

export default {
  title: 'Page/Task/LessonPage',
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
      <AuthLayout>
        <LessonPage {...args}
                    title={args.title || "30 Second Elevator Pitch"}
                    numberOfLikes={args.numberOfLikes || 30000}
                    href="https://www.localcivics.io/L_1uo12y431982"
                    description={args.description || MOCK_DESCRIPTION}
                    tags={args.tags || MOCK_TAGS}
                    etc={args.etc || "30m"}
                    preview={args.preview || MOCK_QUESTIONS}
                    numberOfQuestions={args.numberOfQuestions || MOCK_QUESTION_COUNT}
                    topics={args.topics || MOCK_TOPICS}
                    avgRating={args.avgRating || 4.5}
                    uploadedOn={args.uploadedOn || "12th of May 2023"}
        />
      </AuthLayout>
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
