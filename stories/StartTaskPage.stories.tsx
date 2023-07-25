import * as React from "react";
import { StartTaskPage } from "../src/pages/task/StartTaskPage";
import { TaskModel } from "../src/models/task";
import { MemoryRouter } from "react-router-dom";
import { CandidApp} from "../src";

const MOCK_PARKS_AND_GREEN_TASK: TaskModel = {
  title: "Apply the Parks & Green Spaces Civic Lens ",
  description:
    "Civic Lenses are filters we can use to closely examine our community by focusing deeply on one particular area. Applying different Civic Lenses can help shift our perspective around community issues and reveal assets/resources and connections to other aspects of community that maybe we didn't notice before!\n\nIn this task, you will apply the parks & green spaces civic lens to your local neighborhood and community. This means you will consider strengths and areas of improvement for access to recreation and nature for all people.\n",
  imageURL:
    "https://uploads-ssl.webflow.com/5ead22f7b41a94042ab113cd/623b30c8692b05e095358eae_civicMilestone_parks.png",
  etc: "15m",
  items: [
    {
      itemId: "db038ce6-d961-44dc-8ad1-8ea5a352d60a",
      title: "Watch the following video on New York City's Central Park:",
      format: "embed",
      url: "https://www.youtube.com/embed/9GJD8bhFeaE",
    },
    {
      itemId: "a0d44064-57ef-4ae8-b97e-bdb55c02dd46",
      title:
        'Now use Google Maps to explore a new park near your home or school. You can click on the name for more information and even read reviews to learn more. In some parks, you can use Google Maps "Street View" to explore further. ',
      format: "image",
      url: "https://lh5.googleusercontent.com/_Iq88GX6PoEqCu3kBoQl5MFWVVuPtM_CxZdLNV5TQUbI51ciQdr2ZLl8O2sZXmr6BaaW5XQshGDx2gwMWuiaG0bdEw1SFsBlVhN-Mc5Y0b8VzQSpASzkjifROLpD_WOx5w",
    },
    {
      itemId: "f11f46ef-f98d-4031-8726-ff691c4560c3",
      title: "What types of assets/resources do you see in the park/green space you chose?",
      description: "Select all that apply!",
      format: "question",
      questionType: "checkbox",
      options: [
        "Trees/bushes & other plants",
        "Flowers",
        "Open spaces with grass",
        "Trash cans",
        "Recycling bins",
        "Sports fields",
        "Walking/biking paths",
        "Public restrooms",
        "Animals/insects",
        "Public Art (murals/sculptures)",
        "Benches",
        "",
      ],
      userAnswer: {responses: []},
      required: true,
    },
  ],
};
const MOCK_PUBLIC_SPEAKING_TASK: TaskModel = {
  title: "Public Speaking",
  description:
    "Public speaking is a huge part of getting the job done when it comes to enacting change in the world. We need to be able to effectively communicate our views while keeping in mind the audience and their unique knowledge, point of view, and wants/needs.\n\nIn this task, you will analyze the effectiveness of content and delivery with regard to a particular purpose and the speaker's intended audience.",
  imageURL: "https://uploads-ssl.webflow.com/5ead22f7b41a94042ab113cd/623a0f01f2c0f77af763932c_publicSpeaking.png",
  etc: "30m",
  items: [
    {
      itemId: "2d8ea25f-cb7b-49c7-a67d-5882b907a7a3",
      title: "Choose ONE of the 5-min. videos below and respond to the questions that follow.",
      description:
        "You may wish to scroll down and preview the questions so you know what you are looking for in the video!",
      format: "text",
    },
    {
      itemId: "32e327f0-2b07-4524-b302-ce43ba5f1fe2",
      title: "Graduation Speech at Harvard Graduate School of Education — Donovan Livingston",
      format: "embed",
      url: "https://www.youtube.com/embed/9XGUpKITeJM",
    },
    {
      itemId: "08b40fa4-5baf-465c-ad32-90f7a93aa843",
      title: "Speech at the United Nations — Severn Suzuki",
      format: "embed",
      url: "https://www.youtube.com/embed/d1I6ljzaY9k",
    },
    {
      itemId: "967b43f1-31ba-4745-856b-2c8d4ff6944c",
      title:
        "Virgin Island History Month Speech at the U.S. House of Representatives — Congresswoman Stacey Plaskett",
      format: "embed",
      url: "https://www.youtube.com/embed/kQTPT9BFaSU",
    },
    {
      itemId: "6f2d63e8-cd08-4fad-ab6f-f7b06c4bbd44",
      title:
        "Write a brief overview of the speech you chose. Who is the speaker? What is the purpose of their speech? Where and when is the speech being given?",
      description: "(2-3 sentences)",
      format: "question",
      questionType: "text",
      paragraph: true,
      required: true,
    },
    {
      itemId: "a78fbdf6-640d-458e-ab0b-0d4ff963260c",
      title:
        'Who is the *audience* for this speech? What are their "needs"/what type of message are they expecting to hear in this space?',
      description: "(1-2 sentences)",
      format: "question",
      questionType: "text",
      paragraph: true,
      required: true,
    },
    {
      itemId: "7d829693-2fed-4281-b095-666b98b5a697",
      title: "Which of the following verbal techniques did you hear the speaker use?",
      description: "(Select all that apply!)",
      format: "question",
      questionType: "checkbox",
      options: [
        "Proper volume/loudness",
        "Proper speed/pace (not too fast or too slow)",
        'Avoid filler words (few "ums," "uhs," "ya knows," etc.)',
        "Good voice quality (not breathy, not nasally, not too harsh or raspy)",
        "Correct pronunciation (saying the words correctly)",
        "Clear articulation (each word is clear and words do not mix together)",
        "Expressive (uses emphasis and pauses to highlight important moments)",
        "Energetic (shows passion and excitement to increase audience engagement)",
      ],
      required: true,
    },
    {
      itemId: "7d829693-2fed-4281-b095-666b98b5a617",
      title: "Which of the following verbal techniques did you hear the speaker use?",
      description: "(Select one)",
      format: "question",
      questionType: "radio",
      options: [
        "Proper volume/loudness",
        "Proper speed/pace (not too fast or too slow)",
        'Avoid filler words (few "ums," "uhs," "ya knows," etc.)',
        "Good voice quality (not breathy, not nasally, not too harsh or raspy)",
        "Correct pronunciation (saying the words correctly)",
        "Clear articulation (each word is clear and words do not mix together)",
        "Expressive (uses emphasis and pauses to highlight important moments)",
        "Energetic (shows passion and excitement to increase audience engagement)",
      ],
      required: true,
    },
    {
      itemId: "7d829693-2fed-4281-b095-666b98b5a691",
      title: "Which of the following verbal techniques did you hear the speaker use?",
      description: "(Select one)",
      format: "question",
      questionType: "drop down",
      options: [
        "Proper volume/loudness",
        "Proper speed/pace (not too fast or too slow)",
        'Avoid filler words (few "ums," "uhs," "ya knows," etc.)',
        "Good voice quality (not breathy, not nasally, not too harsh or raspy)",
        "Correct pronunciation (saying the words correctly)",
        "Clear articulation (each word is clear and words do not mix together)",
        "Expressive (uses emphasis and pauses to highlight important moments)",
        "Energetic (shows passion and excitement to increase audience engagement)",
      ],
      required: true,
    },
    {
      itemId: "7d829693-2fed-4281-b095-666b98b5a690",
      title: "Upload a document describing what you liked best about this task.",
      description: "(Show your work)",
      format: "question",
      questionType: "file upload",
      required: true,
    },
    {
      itemId: "a881cee9-72c1-4015-84cc-bb4443f5edde",
      title: "Which of the following non-verbal techniques did you see the speaker use?",
      description: "(Select all that apply!)",
      format: "question",
      questionType: "checkbox",
      options: [
        "Eye contact (does not read from notes the entire time)",
        "Hand gestures (without being too distracting!)",
        "Facial expression (without being too distracting!)",
        "Correct posture (stands tall and does not hunch or fidget)",
        "Professional appearance (looks appropriately dressed for the event)",
      ],
      required: true,
    },
    {
      itemId: "11fe271a-afc7-45b7-a45c-1c4c92fc1020",
      title: "Overall, do you think the speaker was *effective* in this speech? Why or why not?",
      description: "(2-3 sentences)",
      format: "question",
      questionType: "text",
      paragraph: true,
      required: true,
    },
    {
      itemId: "658834a6-996e-4df7-b608-f7400e16f43e",
      title:
        "How could the speaker have *improved* their speech? Think about both verbal and non-verbal techniques, as well as the actual content.",
      description: "(2-3 sentences)",
      format: "question",
      questionType: "text",
      paragraph: true,
      required: true,
    },
    {
      itemId: "3903a359-dd04-4789-b659-86e88f6757c4",
      title:
        "REFLECTION: What are some public speaking techniques (both verbal & non-verbal) that YOU want to practice? How would practicing those skills improve your confidence and abilities speaking publicly?",
      description: "(1-2 sentences)",
      format: "question",
      questionType: "text",
      paragraph: true,
      required: true,
    },
    {
      itemId: "e14dab06-d5e9-4da3-b5c2-a6029d02d0f5",
      title: 'After you press "Submit," be sure to submit a reflection and rating for this task.',
      description:
        "Tell us a bit about what you learned, how this task helped you on your civic leadership journey, or share any feedback/questions in your reflection!",
      format: "text",
    },
  ],
};

const MOCK_BADGE = {
  title: "College Explorer Badge",
  group: "Badges",
  level: 1,
  iconURL: "https://cdn.localcivics.io/v1/store/images/NXCee9aQQbf4K7WofxkSaw?version=6dnicD9NiKDbP66ToNXScs",
  url: "https://www.localcivics.io/L_1uo12y431982",
  numberOfLikes: 30000,
  description: 'Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.',
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
        isUserFinished: true,
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
  uploadedOn: "12th of May 2023",
}

export default {
  title: "Page/Task/StartTaskPage",
  component: StartTaskPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = {
  render: (args) => <div className="h-full w-full overscroll-none font-proxima">
    <MemoryRouter>
      <CandidApp>
        <StartTaskPage {...args} />
      </CandidApp>
    </MemoryRouter>
  </div>,
}

export const PublicSpeaking = {
  ...Template,
  args: {
    ...MOCK_PUBLIC_SPEAKING_TASK,
    userFullName: "Jane Doe",
  },
};

export const ParksAndGreenSpaces = {
  ...Template,
  args: {
    ...MOCK_PARKS_AND_GREEN_TASK,
    userFullName: "Jane Doe",
  },
};

export const Badge = {
  ...Template,
  args: {
    ...MOCK_BADGE,
    userFullName: "Jane Doe",
  },
};

export const AnonymousUser = {
  ...Template,
  args: MOCK_PARKS_AND_GREEN_TASK,
};
