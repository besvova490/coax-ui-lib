import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Search from "../../../lib/elements/Input/Search";

import { SearchProps } from "../../../lib/types/ElementsProps";

export default {
  title: "Elements/Inputs",
  component: Search,
  decorators: [withDesign],
} as Meta;

const Template: Story<SearchProps> = args => <Search {...args}/>;

export const SearchStory = Template.bind({});

SearchStory.args = {
  placeholder: "Search",
};

SearchStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A726"
  }
};
