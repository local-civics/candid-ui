import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { SearchPage } from '../src/pages/task/SearchPage';
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";

export default {
  title: 'Page/Explore/SearchPage',
  component: SearchPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const MOCK_DATA = [{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 4.567,
  "liked": true,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula. Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula. Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula. Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4.167,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 2.567,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
},{
  title: "Onboarding Badge",
  iconURL: "https://cdn.localcivics.io/v1/store/images/XkYCJEdZJXEmsEQYLWiTA7?version=RcpvwzVT7sp9z3mJetAj2m",
  description: "Introduces students to concepts and practices that concern community relationships and civic life. These introductory tasks provide students with a foundation from which they can begin to explore civic life and develop there civic identity.",
}]

const Template = {
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout
          {...args}
          defaultActiveLinkName="Home"
      >
        <SearchPage {...args} items={args.items || MOCK_DATA} title={args.title || "Results"}/>
      </AuthLayout>
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
