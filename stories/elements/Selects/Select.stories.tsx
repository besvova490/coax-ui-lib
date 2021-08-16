import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

//element
import Select from "../../../lib/elements/Select/Select";

//type
import { SelectProps } from "../../../lib/types/ElementsProps";


export default {
  title: "Elements/Select",
  component: Select,
  decorators: [withDesign],
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: 1, label: "Test" },
    { value: 2, label: "Disabled", disabled: true },
  ]
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=210%3A1101"
  }
};

export const TagSelect = Template.bind({});
TagSelect.args = {
  mode: "tag",
  options: [
    { value: 1, label: "Test" },
    { value: 2, label: "Disabled", disabled: true },
    { value: 3, label: "Item", disabled: true },
  ]
};
TagSelect.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=210%3A1101"
  }
};

