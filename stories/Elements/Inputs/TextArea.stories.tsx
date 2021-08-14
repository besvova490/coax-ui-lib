import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import TextArea from "../../../lib/elements/Input/TextArea";

import { TextAreaProps } from "../../../lib/types/ElementsProps";

export default {
  title: "Elements/Inputs",
  component: TextArea,
  decorators: [withDesign],
} as Meta;

const Template: Story<TextAreaProps> = args => <TextArea {...args}/>;

export const TextAreaStory = Template.bind({});

TextAreaStory.args = {
  placeholder: "Primary Text Area",
};

TextAreaStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A726"
  }
};
