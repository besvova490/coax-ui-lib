import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { DatePicker } from "../../lib/components";

import { BaseCalendarProps } from "../../lib/types/ElementsProps";


export default { title: "Components/DatePicker", component: DatePicker, decorators: [withDesign] } as Meta;


const Template: Story<BaseCalendarProps> = args => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DRDFhFlRL1NKq9IREw3s5m/ReConstruct?node-id=128%3A3705"
  }
};
