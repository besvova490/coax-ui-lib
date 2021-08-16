import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import {
  IconAppleButton as ButtonApple,
  IconFacebookButton as ButtonGoogle,
  IconGoogleButton as ButtonFacebook,
  IconGitHubButton as ButtonGitHub,
  IconGitLubButton as ButtonGitLub,
  IconBitbucketButton as ButtonBitbucket,
} from "../../../lib/elements/Button";

import { SocialButtonProps } from "../../../lib/types/ElementsProps";


export default {
  title: "Elements/Buttons/IconButtons",
  component: ButtonApple,
  decorators: [withDesign],
} as Meta;

const AppleButtonTemplate: Story<SocialButtonProps> = args => <ButtonApple {...args} />;
const GoogleButtonTemplate: Story<SocialButtonProps> = args => <ButtonGoogle {...args} />;
const FacebookButtonTemplate: Story<SocialButtonProps> = args => <ButtonFacebook {...args} />;
const GitHubButtonTemplate: Story<SocialButtonProps> = args => <ButtonGitHub {...args} />;
const GitLubButtonTemplate: Story<SocialButtonProps> = args => <ButtonGitLub {...args} />;
const BitbucketButtonTemplate: Story<SocialButtonProps> = args => <ButtonBitbucket {...args} />;

export const IconAppleButton = AppleButtonTemplate.bind({});
IconAppleButton.args = {};

IconAppleButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const IconGoogleButton = GoogleButtonTemplate.bind({});
IconGoogleButton.args = {};

IconGoogleButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const IconFacebookButton = FacebookButtonTemplate.bind({});
IconFacebookButton.args = {};

IconFacebookButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

export const IconGitHubButton = GitHubButtonTemplate.bind({});
IconFacebookButton.args = {};

IconFacebookButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};


export const IconGitLubButton = GitLubButtonTemplate.bind({});
IconFacebookButton.args = {};

IconFacebookButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};


export const IconBitbucketButton = BitbucketButtonTemplate.bind({});
IconFacebookButton.args = {};

IconFacebookButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/ebw0SMZGU9FjLGvKeECo3P/Construct?node-id=270%3A1243"
  }
};

