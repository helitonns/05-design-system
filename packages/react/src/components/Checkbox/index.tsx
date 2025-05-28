import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxContainer>{}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}