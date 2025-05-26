import { Box, type BoxProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: "Box",
  },
};

