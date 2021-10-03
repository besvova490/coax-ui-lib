import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Text } from "../../lib/elements";
import { TextProps } from "../../lib/types/TypographyProps";


export default { title: "Typography/Paragraph", component: Text, decorators: [withDesign] } as Meta;


const Template: Story<TextProps> = () => (
  <div>
		<Text size={"xxl"}>Paragraph Regular XXL</Text>
		<Text size={"xl"}>Paragraph Regular XL</Text>
		<Text size={"l"}>Paragraph Regular L</Text>
		<Text size={"m"}>Paragraph Regular M</Text>
		<Text size={"s"}>Paragraph Regular S</Text>
		<Text size={"xs"}>Paragraph Regular XS</Text>
    <br/>
		<Text size={"xxl"} fontWeight={"semibold"}>Paragraph Regular XXL</Text>
		<Text size={"xl"} fontWeight={"semibold"}>Paragraph Regular XL</Text>
		<Text size={"l"} fontWeight={"semibold"}>Paragraph Regular L</Text>
		<Text size={"m"} fontWeight={"semibold"}>Paragraph Regular M</Text>
		<Text size={"s"} fontWeight={"semibold"}>Paragraph Regular S</Text>
		<Text size={"xs"} fontWeight={"semibold"}>Paragraph Regular XS</Text>
    <br/>
		<Text size={"xxl"} fontWeight={"bold"}>Paragraph Regular XXL</Text>
		<Text size={"xl"} fontWeight={"bold"}>Paragraph Regular XL</Text>
		<Text size={"l"} fontWeight={"bold"}>Paragraph Regular L</Text>
		<Text size={"m"} fontWeight={"bold"}>Paragraph Regular M</Text>
		<Text size={"s"} fontWeight={"bold"}>Paragraph Regular S</Text>
		<Text size={"xs"} fontWeight={"bold"}>Paragraph Regular XS</Text>
		<br/>
		<Text size={"xxl"} strong>Paragraph Regular XXL</Text><br/>
		<Text size={"xxl"} italic>Paragraph Regular XXL</Text><br/>
		<Text size={"xxl"} underline>Paragraph Regular XXL</Text><br/>
		<Text size={"xxl"} delete>Paragraph Regular XXL</Text><br/>
		<Text size={"xxl"} type={"success"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} type={"secondary"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} type={"primary"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} type={"danger"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} type={"warning"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} type={"info"}>Paragraph Regular XXL</Text>
		<Text size={"xxl"} disabled>Paragraph Regular XXL</Text>
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
