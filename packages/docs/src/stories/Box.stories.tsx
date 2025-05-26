import { Box, Text, type BoxProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
};

