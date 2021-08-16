import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Switch from "../../../lib/elements/Switch/Switch";

import { SwitchProps } from "../../../lib/types/ElementsProps";

export default {
  title: "Elements/Switch",
  component: Switch,
  decorators: [withDesign],
} as Meta;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
