import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../src/pages/home/HomePage";
import { AppLayout } from "../src/layouts/app/AppLayout";

export default {
  title: "Page/HomePage",
  component: HomePage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const MOCK_POSTS = [
  {
    image: "https://cdn.localcivics.io/hub/landing.jpg",
    title: "Verudela Beach w. A Side of Fries",
    category: "Badge Opportunity",
    rating: 4.567,
    liked: true,
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  },
  {
    image: "https://cdn.localcivics.io/hub/landing.jpg",
    title: "Verudela Beach",
    category: "Lesson Opportunity",
    rating: 4.167,
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  },
  {
    image: "https://cdn.localcivics.io/hub/landing.jpg",
    title: "Verudela Beach",
    category: "Lesson Opportunity",
    rating: 4,
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  },
  {
    image: "https://cdn.localcivics.io/hub/landing.jpg",
    title: "Verudela Beach w. A Side of Fries",
    category: "Badge Opportunity",
    rating: 2.567,
    description:
      "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  },
];

const Template = {
  render: (args) => (
    <div className="h-full w-full overscroll-none font-proxima">
      <MemoryRouter>
        <AppLayout {...args} defaultActiveLinkName="Home" page=<HomePage {...args} data={args.data || MOCK_POSTS} /> />
      </MemoryRouter>
    </div>
  ),
};

export const Default = {
  ...Template,
};
