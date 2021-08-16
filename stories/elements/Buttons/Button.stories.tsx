import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button, IconButton } from "../../../lib/elements/Button";

import { ButtonProps } from "../../../lib/types/ElementsProps";

//assets
import LightningIcon from "../../../lib/iconComponents/LightningIcon";


export default {
  title: "Elements/Buttons/Standart",
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;
const TemplateIconButton: Story<ButtonProps> = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  shape: "round",
  icon: <LightningIcon/>
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  type: "default",
  shape: "round",
  icon: <LightningIcon/>
};

export const Text = Template.bind({});
Text.args = {
  size: "large",
  label: "Button",
  type: "text",
  icon: <LightningIcon/>
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  label: "Button",
  type: "default",
  shape: "round",
  size: "small",
  icon: <LightningIcon width={16} height={16}/>
};

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  label: "Button",
  type: "default",
  shape: "round",
  size: "large",
  icon: <LightningIcon width={24} height={24}/>
};

export const IconButtonComponent = TemplateIconButton.bind({});
IconButtonComponent.args = {
  icon: <LightningIcon width={24} height={24}/>
};
