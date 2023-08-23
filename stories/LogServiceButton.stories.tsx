import * as React from "react";
import { LogServiceButton } from "../src/components/logservice/LogServiceButton";
import { CandidApp } from "../src/App";

export default {
  title: "Components/LogServiceButton",
  component: LogServiceButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = {
  render: (args) => {

    return (
      <CandidApp>
        <LogServiceButton {...args} />
      </CandidApp>
    )
  }
};


export const Default = {
  ...Template,
};