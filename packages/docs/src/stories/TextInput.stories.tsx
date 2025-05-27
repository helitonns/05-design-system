import { Box, Text, TextInput, type TextInputProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {
  },
  decorators:[
    (Story)=>{
      return(
        <Box as="label" css={{display: "flex", flexDirection: "column", gap:"$2" }}>
          <Text size="sm">Nome do usuário</Text>
          {Story()}
        </Box>
      );
    }
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Digite seu nome"
  }
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/"
  },
};