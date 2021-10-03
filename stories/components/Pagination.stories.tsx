import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Pagination } from "../../lib/components";

import { PaginationProps } from "../../lib/types/ComponentsProps";


export default { title: "Components/Pagination", component: Pagination, decorators: [withDesign] } as Meta;


const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pagesList: [1, 2, 3, 4, 5, 6, 7, 8],
};
Primary.parameters = {
  design: {
    type: "figma",
    url: ""
  }
};
