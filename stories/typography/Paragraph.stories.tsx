import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";


export default { title: "Typography/Paragraph", decorators: [withDesign] } as Meta;


const Template: Story = () => (
  <div>
    <p className={"paragraph-regular-xxl"}>Paragraph Regular XXL</p> 
    <p className={"paragraph-regular-xl"}>Paragraph Regular XL</p> 
    <p className={"paragraph-regular-l"}>Paragraph Regular L</p> 
    <p className={"paragraph-regular-m"}>Paragraph Regular M</p> 
    <p className={"paragraph-regular-s"}>Paragraph Regular S</p> 
    <p className={"paragraph-regular-xs"}>Paragraph Regular XS</p>
    <br/>
    <p className={"paragraph-semibold-xxl"}>Paragraph Semibold XXL</p> 
    <p className={"paragraph-semibold-xl"}>Paragraph Semibold XL</p> 
    <p className={"paragraph-semibold-l"}>Paragraph Semibold L</p> 
    <p className={"paragraph-semibold-m"}>Paragraph Semibold M</p> 
    <p className={"paragraph-semibold-s"}>Paragraph Semibold S</p> 
    <p className={"paragraph-semibold-xs"}>Paragraph Semibold XS</p> 
    <br/>
    <p className={"paragraph-bold-xxl"}>Paragraph Bold XXL</p> 
    <p className={"paragraph-bold-xl"}>Paragraph Bold XL</p> 
    <p className={"paragraph-bold-l"}>Paragraph Bold L</p> 
    <p className={"paragraph-bold-m"}>Paragraph Bold M</p> 
    <p className={"paragraph-bold-s"}>Paragraph Bold S</p> 
    <p className={"paragraph-bold-xs"}>Paragraph Bold XS</p> 
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
