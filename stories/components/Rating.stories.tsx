import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Rating } from "../../lib/components";

import { RatingProps } from "../../lib/types/ComponentsProps";


export default { title: "Components/Rating", component: Rating, decorators: [withDesign] } as Meta;


const Template: Story<RatingProps> = args => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rating: 2,
};
Primary.parameters = {
  design: {
    type: "figma",
    url: ""
  }
};
