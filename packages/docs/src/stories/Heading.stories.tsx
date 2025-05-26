import { Heading, type HeadingProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Título H1",
    as: "h1",
  },
  parameters:{
    docs: {
      description: {
        story: "Por padrão, o Heading é um `h2`, mas você pode alterar o elemento HTML com a propriedade `as`.",
      }
    }
  }
};
