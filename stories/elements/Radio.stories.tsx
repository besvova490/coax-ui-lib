import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import Radio from "../../lib/elements/Input/Radio";


export default { title: "Elements/Radio", component: Radio, decorators: [withDesign] } as Meta;

type Props = {
  disabled?: boolean;
};

const Template: Story<Props> = args => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
