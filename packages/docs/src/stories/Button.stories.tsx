
import { Button, type ButtonProps } from "@heliton-ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar"
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<typeButtonProps> = {};

export const PrimaryDisabled: StoryObj<typeButtonProps> = {
  args: {
    disabled: true,
    children: "Enviar",
  },
};

export const PrimaryWithIcon: StoryObj<typeButtonProps> = {
  args: {
    children: (
      <>
      Enviar
      <ArrowRight weight="bold"/>
      </>
    ),
  },
};

export const Secondary: StoryObj<typeButtonProps> = {
  args: {
    variant: "secondary",
    children: "Criar",
  },
};

export const SecondaryDisabled: StoryObj<typeButtonProps> = {
  args: {
    disabled: true,
    variant: "secondary",
    children: "Criar",
  },
};

export const Tertiary: StoryObj<typeButtonProps> = {
  args:{
    variant: "tertiary",
    children: "Cancelar"
  }
};

export const TertiaryDisabled: StoryObj<typeButtonProps> = {
  args: {
    disabled: true,
    variant: "tertiary",
    children: "Cancelar",
  },
};

export const Small: StoryObj<typeButtonProps> = {
  args: {
    size: "sm",
    children: "Enviar",
  },
};
