import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";


export default { title: "Typography/Heading", decorators: [withDesign] } as Meta;


const Template: Story = () => (
  <div>
    <h1 className={"heading-regular-hero"}>Heading/Regular Hero</h1> 
    <h1 className={"heading-regular-h1"}>Heading/Regular Hero h1</h1> 
    <h1 className={"heading-regular-h2"}>Heading/Regular Hero h2</h1> 
    <h1 className={"heading-regular-h3"}>Heading/Regular Hero h3</h1> 
    <h1 className={"heading-regular-h4"}>Heading/Regular Hero h4</h1> 
    <h1 className={"heading-regular-h5"}>Heading/Regular Hero h5</h1> 
    <h1 className={"heading-regular-h6"}>Heading/Regular Hero h6</h1> 
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
