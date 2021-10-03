import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Story, Meta } from "@storybook/react";

import { Table, Column } from "../../lib/components"

import { TableProps, TableColumnProps } from "../../lib/types/ComponentsProps";


export default { title: "Components/Table", component: Table, decorators: [withDesign] } as Meta;

const tableData = [
    {
      title: "Learning Korean Through Tasks",
      price: "$250.00",
      author: "YouJin Kim, Bumyong Choi, Hyunae Yun, Binna Kim, Sanghee Kang"
    },
    {
      title: "Learning Korean Through Tasks",
      price: "$250.00",
      author: "YouJin Kim, Bumyong Choi, Hyunae Yun, Binna Kim, Sanghee Kang"
    }
  ];


const Template: Story<TableProps> = args => (
  <Table {...args} dataSource={tableData}>
      <Column
        title="Title"
        dataIndex="title"
      />
      <Column
        title="Authors"
        dataIndex="author"
      />
      <Column
        title="Selling Price"
        dataIndex="price"
        width="150px"
      />
  </Table>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: ""
  }
};
