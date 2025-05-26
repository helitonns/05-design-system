import { Avatar, type AvatarProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/helitonns.png",
    alt: "Heliton Nascimento",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
