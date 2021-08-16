import React from "react";
import { Story, Meta } from "@storybook/react";

import { Preloader } from "../../lib/components";

import { PreloaderProps } from "../../lib/types/ElementsProps";


export default {
  title: "Elements/Preloader",
  component: Preloader,
} as Meta;

const Template: Story<PreloaderProps> = args => <Preloader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "#000",
  height: 12,
  width: 12,
};
