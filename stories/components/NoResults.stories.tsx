import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { NoResults } from "../../lib/components";

import { NoResultsProps } from "../../lib/types/ElementsProps";


export default { title: "Components/NoResults", component: NoResults, decorators: [withDesign] } as Meta;


const Template: Story<NoResultsProps> = args => <NoResults {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
