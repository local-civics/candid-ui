import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import {AppLayout} from "../src/layouts/app/AppLayout";
import { BadgePostPage } from '../src/pages/post/BadgePostPage';

const MOCK_DESCRIPTION = 'Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.'
const MOCK_SYLLABUS_ITEMS = [
  {
    title: "The Social Media Landscape",
    description: 'This week you\'ll get an introduction to the Meta Social Media Marketing Professional Certificate program, then you\'ll dive into an introduction to marketing and social media marketing, learn about how businesses use social media and get a basic overview of the social media landscape.',
    estimate: '30m',
    videoCount: 2,
    questionCount: 10,
  },
  {
    title: "Social Media Platforms Overview",
    description: 'In week two, you\'ll learn the ins and outs of some of the major social media platforms as well as the differences between how individuals and businesses can and do use them.',
    estimate: '15m',
    questionCount: 10,
  },
  {
    title: "Goals and Planning for Success",
    description: 'In week three, you\'ll dig into two foundational skills for a marketer, defining SMART goals and key performance indicators. These are key components in building out a marketing campaign no matter what platform you operate on. At the end of the week you\'ll complete your first project and apply your learning to a real life scenario.',
    estimate: '45m',
    videoCount: 2,
    imageCount: 3,
    questionCount: 15,
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

export default {
  title: 'BadgePostPage',
  component: BadgePostPage,
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
          page=<BadgePostPage {...args}
            title={args.title || "30 Second Elevator Pitch"}
            likes={args.likes || 30000}
            href="https://www.localcivics.io/L_1uo12y431982"
            overviewDescription={args.overviewDescription || MOCK_DESCRIPTION}
            overviewEstimate={args.overviewEstimate || "30m"}
            overviewTags={args.overviewTags || MOCK_TAGS}
            syllabusItems={args.syllabusItems || MOCK_SYLLABUS_ITEMS}
          />
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
