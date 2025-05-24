import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  background: "$ignite500",
  borderRadius: "$sm",
});

export function App(){
  return(
    <Button>Click me</Button>
  );
}