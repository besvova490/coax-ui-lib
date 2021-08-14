import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Checkbox } from "../../lib/elements/Checkbox/Checkbox";

import { CheckBoxProps } from "../../lib/types/ElementsProps";

export default {
  title: "Elements/Checkbox",
  component: Checkbox,
  decorators: [withDesign],
} as Meta;

const Template: Story<CheckBoxProps> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=210%3A1101"
  }
};
