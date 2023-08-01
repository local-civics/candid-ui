import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { TaskPage, TaskPage as LessonPage } from "../src/pages/task/TaskPage.tsx";
import { CandidApp } from "../src/App";

const MOCK_LESSON = {
  title: "30 Second Elevator Pitch",
  group: "Lessons",
  url: "https://www.localcivics.io/L_1uo12y431982",
  numberOfLikes: 30000,
  description: 'Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.',
  numberOfQuestions: 25,
  etc: "30m",
  tags: [
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
  ],
  topics: [
    "Clone or download repository from GitHub",
    "Install dependencies with yarn",
    "To start development server run npm start command",
    "Run tests to make sure your changes do not break the build",
    "Submit a pull request once you are done",
  ],
  avgRating: 4.5,
  preview: [
    {
      title: "What is your favorite color?",
    },
    {
      title: "What is you least favorite food?",
    },
    {
      title: "Which country do you love the most?",
    }
  ],
  uploadedOn: "May 23, 2023",
}

const MOCK_BADGE = {
  title: "30 Second Elevator Pitch",
  group: "Badges",
  url: "https://www.localcivics.io/L_1uo12y431982",
  numberOfLikes: 30000,
  description: 'Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.',
  etc: "30m",
  tags: [
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
  ],
  syllabus: {
    items: [
      {
        title: "The Social Media Landscape",
        description: 'This week you\'ll get an introduction to the Meta Social Media Marketing Professional Certificate program, then you\'ll dive into an introduction to marketing and social media marketing, learn about how businesses use social media and get a basic overview of the social media landscape.',
        etc: '30m',
        numberOfVideos: 2,
        numberOfQuestions: 10,
      },
      {
        title: "Social Media Platforms Overview",
        description: 'In week two, you\'ll learn the ins and outs of some of the major social media platforms as well as the differences between how individuals and businesses can and do use them.',
        etc: '15m',
        numberOfQuestions: 10,
      },
      {
        title: "Goals and Planning for Success",
        description: 'In week three, you\'ll dig into two foundational skills for a marketer, defining SMART goals and key performance indicators. These are key components in building out a marketing campaign no matter what platform you operate on. At the end of the week you\'ll complete your first project and apply your learning to a real life scenario.',
        etc: '45m',
        numberOfVideos: 2,
        numberOfImages: 3,
        numberOfQuestions: 15,
      }
    ]
  },
  topics: [
    "Clone or download repository from GitHub",
    "Install dependencies with yarn",
    "To start development server run npm start command",
    "Run tests to make sure your changes do not break the build",
    "Submit a pull request once you are done",
  ],
  avgRating: 4.5,
  uploadedOn: "May 23, 2023",
}

export default {
  title: 'Page/Task/TaskPage',
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
      <CandidApp>
        <TaskPage {...args}/>
      </CandidApp>
    </MemoryRouter>
  </div>,
}

export const Lesson = {
  ...Template,
  args: MOCK_LESSON,
};

export const Badge = {
  ...Template,
  args: MOCK_BADGE,
};
