import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$md",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  cursor: "pointer",
  padding: "0 $4",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",

        "&:not(:disabled):hover": {
          background: "$ignite300",
        },

        "&:disabled": {
          background: "$gray200",
        },
      },

      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          color: "$white",
          background: "$ignite500",
        },

        "&:disabled": {
          color: "$ignite200",
          border: "2px solid $ignite200",
        },
      },

      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends React.ComponentProps<typeof Button>{};