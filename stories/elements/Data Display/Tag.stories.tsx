import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { TagProps } from "../../../lib/types/ElementsProps";

import { Tag } from "../../../lib/elements/Tag";


export default {
  title: "Data Display/Tag",
  component: Tag,
  decorators: [withDesign],
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Title"
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
