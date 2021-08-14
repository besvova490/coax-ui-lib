import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import {
  AppleButton as ButtonApple,
  GoogleButton as ButtonGoogle,
  FacebookButton as ButtonFacebook,
  GitHubButton as ButtonGitHub,
  GitLubButton as ButtonGitLub,
  BitbucketButton as ButtonBitbucket,
} from "../../../lib/elements/Button";

import { SocialButtonProps } from "../../../lib/types/ElementsProps";


export default {
  title: "Elements/Buttons/Social",
  component: ButtonApple,
  decorators: [withDesign],
} as Meta;

const AppleButtonTemplate: Story<SocialButtonProps> = args => <ButtonApple {...args} />;
const GoogleButtonTemplate: Story<SocialButtonProps> = args => <ButtonGoogle {...args} />;
const FacebookButtonTemplate: Story<SocialButtonProps> = args => <ButtonFacebook {...args} />;
const GitHubButtonTemplate: Story<SocialButtonProps> = args => <ButtonGitHub {...args} />;
const GitLubButtonTemplate: Story<SocialButtonProps> = args => <ButtonGitLub {...args} />;
const BitbucketButtonTemplate: Story<SocialButtonProps> = args => <ButtonBitbucket {...args} />;

export const AppleButton = AppleButtonTemplate.bind({});
AppleButton.args = {};

AppleButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const GoogleButton = GoogleButtonTemplate.bind({});
GoogleButton.args = {};

GoogleButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const FacebookButton = FacebookButtonTemplate.bind({});
FacebookButton.args = {};

FacebookButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const GitHubButton = GitHubButtonTemplate.bind({});
GitHubButton.args = {};

GitHubButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};


export const GitLubButton = GitLubButtonTemplate.bind({});
GitLubButton.args = {};

GitLubButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};


export const BitbucketButton = BitbucketButtonTemplate.bind({});
BitbucketButton.args = {};

BitbucketButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};
