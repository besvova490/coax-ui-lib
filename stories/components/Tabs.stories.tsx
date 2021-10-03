import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Tabs, Panel } from "../../lib/components/Tabs";

import { TabsProps, PanesProps } from "../../lib/types/ComponentsProps";


export default { title: "Components/Tabs", component: Tabs, decorators: [withDesign] } as Meta;


const Template: Story<TabsProps> = args => (
  <Tabs {...args}>
    <Panel tab="test">
      <h2>Bla Bla 1</h2>
    </Panel>
    <Panel tab="test 2">
      <h2>Bla Bla 2</h2>
    </Panel>
  </Tabs>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=203%3A1190"
  }
};
