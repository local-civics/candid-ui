import * as React from "react";
import {MemoryRouter} from "react-router-dom";
import { SavedForLaterPage } from '../src/pages/task/SavedForLaterPage';
import {AuthLayout} from "../src/layouts/AuthLayout.tsx";

export default {
  title: 'Page/Library/SavedForLaterPage',
  component: SavedForLaterPage,
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
  "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
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
}]

const Template = {
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <AuthLayout
          {...args}
          defaultActiveLinkName="Home"
          page=<SavedForLaterPage {...args} data={args.data || MOCK_DATA}/>
      />
    </MemoryRouter>
  </div>,
}

export const Default = {
  ...Template,
};
