import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Title } from "../../lib/elements";

import  { TitleProps } from "../../lib/types/TypographyProps";

export default { title: "Typography/Heading", component: Title, decorators: [withDesign] } as Meta;


const Template: Story<TitleProps> = () => (
  <div>
		<Title>Heading/Regular Hero</Title>
		<Title level={1}>Heading/Regular Hero h1</Title>
		<Title level={2}>Heading/Regular Hero h2</Title>
		<Title level={3}>Heading/Regular Hero h3</Title>
		<Title level={4}>Heading/Regular Hero h4</Title>
		<Title level={5}>Heading/Regular Hero h5</Title>
		<Title level={6}>Heading/Regular Hero h6</Title>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/DRDFhFlRL1NKq9IREw3s5m/ReConstruct?node-id=17%3A139"
  }
};
