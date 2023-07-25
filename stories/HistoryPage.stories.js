import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { HistoryPage } from '../src/pages/task/HistoryPage';
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";

export default {
  title: 'Page/Task/HistoryPage',
  component: HistoryPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const MOCK_TASKS = [{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 4.567,
  "liked": true,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": new Date().toDateString(),
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 4.567,
  "liked": true,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": new Date(new Date().setDate(new Date().getDate()-1)).toDateString(),
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4.167,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": new Date(new Date().setDate(new Date().getDate()-1)).toDateString(),
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": new Date(new Date().setDate(new Date().getDate()-1)).toDateString(),
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 2.567,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": new Date(new Date().setDate(new Date().getDate()-1)).toDateString(),
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 4.567,
  "liked": true,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": "May 26, 2022",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4.167,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": "May 26, 2022",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach",
  "category": "Lesson Opportunity",
  "rating": 4,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": "May 26, 2022",
},{
  "imageURL": "https://cdn.localcivics.io/hub/landing.jpg",
  "title": "Verudela Beach w. A Side of Fries",
  "category": "Badge Opportunity",
  "rating": 2.567,
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  "userViewedAt": "May 26, 2022",
}]

const Template = {
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout defaultActiveLinkName="Home">
        <HistoryPage {...args} items={args.items || MOCK_TASKS}/>
      </AuthLayout>
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};