import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { InputProps, InputNumberProps } from "../../../lib/types/ElementsProps";

import Input from "../../../lib/elements/Input/Input";
import InputNumber from "../../../lib/elements/Input/InputNumber";

import LightningIcon from "../../../lib/iconComponents/LightningIcon";


export default {
  title: "Elements/Inputs",
  component: Input,
  decorators: [withDesign],
} as Meta;

const Template: Story<InputProps> = args => <Input {...args}/>;
const TemplateNumber: Story<InputNumberProps> = args => <InputNumber {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Primary Input",
  prefix: <LightningIcon fill={"#B3B5BC"} width={22} height={22}/>,
  suffix: <LightningIcon fill={"#B3B5BC"} height={22} width={22}/>,
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A726"
  }
};

export const Password = Template.bind({});

Password.args = {
  placeholder: "Password",
  type: "password"
};

export const InputTypeNumber = TemplateNumber.bind({});

InputTypeNumber.args = {
  defaultValue: 1
};
